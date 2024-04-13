
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio ( building 🏗️🛠️)
      </h1>
      <p className="mb-4">
        {`Om Sarraf is an individual from India who is engaged in various activities such as freelancing, learning Next + Ts, watching anime, and reading books. He is also associated with different organizations like GDSC, NASA, and holds positions such as GDSC Lead 2023-24 and President of the IT council of DPS Dwarka.`}
      </p>
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
          April 1, 2024
        </p>
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
          ????
        </p>
      </div>

    </section>
  )
}
