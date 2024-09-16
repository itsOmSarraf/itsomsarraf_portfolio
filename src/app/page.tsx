import Image from "next/image";
import OmSarraf from "@/public/Om_Sarraf.png"
import { ArrowUpRight } from 'lucide-react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  return (
    <div className="container mx-auto px-4 flex justify-center">
      <RoughNotationGroup show={true}>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:mx-auto py-20">
          <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
            <h1 className="font-bold text-4xl md:text-5xl mb-4">FullStack Developer</h1>
            <p className="text-lg w-full">
              Om Sarraf is an individual from India who is currently working{' '}
              <a href="https://vexio.in" target="_blank" rel="noopener noreferrer" className="font-semibold">@vexio.in</a> as a {' '}
              <RoughNotation type="circle" color="#B8001F">FullStack intern</RoughNotation>, also does{' '}
              <RoughNotation type="highlight" color="#FFEB00">
                <span className="inline-flex items-center">
                  <a href="/freelancing" target="_blank" rel="noopener noreferrer" className="underline">freelancing (open to gigs)</a>
                  <ArrowUpRight className="ml-1" />
                </span>
              </RoughNotation>
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <Image
              src={OmSarraf}
              alt='Om Sarraf'
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>
      </RoughNotationGroup>
    </div>
  );
}
