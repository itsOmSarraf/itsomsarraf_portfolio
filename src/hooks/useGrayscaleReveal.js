'use client';
import { useEffect, useId, useRef, useState } from 'react';

const entries = new Map();
let activeId = null;
let interacted = false;
const subs = new Set();
let listenersSet = false;

function notify() {
  subs.forEach(fn => fn());
}

function recalc() {
  let best = null, bestRatio = 0;
  entries.forEach((r, k) => {
    if (r > bestRatio) { bestRatio = r; best = k; }
  });
  if (best !== activeId) {
    activeId = best;
    notify();
  }
}

function ensureInteractionListeners() {
  if (listenersSet) return;
  listenersSet = true;
  const mark = () => {
    interacted = true;
    notify();
    window.removeEventListener('scroll', mark);
    window.removeEventListener('click', mark);
    window.removeEventListener('touchstart', mark);
  };
  window.addEventListener('scroll', mark, { passive: true });
  window.addEventListener('click', mark);
  window.addEventListener('touchstart', mark, { passive: true });
}

export function useGrayscaleReveal() {
  const id = useId();
  const ref = useRef(null);
  const [colored, setColored] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(max-width: 767px)').matches) return;

    ensureInteractionListeners();

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const obs = new IntersectionObserver(
      ([e]) => {
        entries.set(id, e.intersectionRatio);
        recalc();
      },
      { threshold: thresholds }
    );
    if (ref.current) obs.observe(ref.current);

    const update = () => setColored(interacted && activeId === id);
    subs.add(update);
    update();

    return () => {
      obs.disconnect();
      entries.delete(id);
      subs.delete(update);
      recalc();
    };
  }, [id]);

  return { ref, colored };
}
