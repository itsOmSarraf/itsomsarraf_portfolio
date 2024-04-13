import { experiences } from "./constants/experiences";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio (building 🏗️🛠️)
      </h1>
      <p className="mb-4">
        {`Om Sarraf is an individual from India who is engaged in various activities such as freelancing, learning Next + Ts, watching anime, and reading books. He is also associated with different organizations like GDSC, NASA, and holds positions such as GDSC Lead 2023-24 and President of the IT council of DPS Dwarka.`}
      </p>
      {/* <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2"> */}
      <div className="w-full md:flex-col flex-row space-x-0">
        {Object.entries(experiences).map(([experience, { designation, month, year }]) => {
          const yearStr0 = String(year[0])
          year[0] = yearStr0.slice(-2)
          const isOngoing = year[1] === 'Present' || month[1] === 'Present';
          let ongoingText = isOngoing ? 'Present' : `${month[1]} '${year[1]}`;
          if (ongoingText !== 'Present') {
            const yearStr1 = String(year[1])
            year[1] = yearStr1.slice(-2)
          }
          return (
            <div key={experience} className="flex-row md:flex justify-between w-full">
              <div className="flex flex-row items-center">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                  {month[0]} '{year[0]} - {ongoingText}
                </p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {designation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </section>
  );
}
