export default function Component({ title, company, location, duration, Sdate, Edate, description, url }) {
    return (
        <div className="rounded-lg border bg-white dark:bg-black text-gray-900 dark:text-gray-50 shadow-sm w-full max-w-md" data-v0-t="card">
            <div className="space-y-1.5 p-6 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none text-wrap">{title}</h3>
                    <div className="text-center rounded-md bg-gray-300 dark:bg-gray-800 px-2 py-1 text-sm font-medium">
                        {location}
                    </div>
                </div>
                <p className="text-sm text-muted-foreground"><a className="underline cursor-pointer" href={url} target="_blank">{company}</a></p>
            </div>
            <div className="p-6 pt-0">
                <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <div>
                            <p className="text-sm font-medium">Duration</p>
                            <p className="dark:text-gray-400">{duration}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <div>
                            <p className="text-sm font-medium">Start Date</p>
                            <p className="dark:text-gray-400">{Sdate}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarCheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <div>
                            <p className="text-sm font-medium">End Date</p>
                            <p className="dark:text-gray-400">{Edate}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 space-y-2">
                    <p className="text-sm font-medium">Description</p>
                    <p className="dark:text-gray-400">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

function CalendarCheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="m9 16 2 2 4-4" />
        </svg>
    )
}

function CalendarDaysIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>
    )
}

function ClockIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}