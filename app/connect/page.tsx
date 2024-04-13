import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default function Connect() {
    return (
        <div>
            {/* <div className="flex justify">    <FaXTwitter size={40} /> Twitter</div>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />

            <ul className=" font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 align-middle">
                <li>

                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 text-5xl align-middle"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="/rss"
                    > <FaXTwitter />
                        <ArrowIcon />
                        <p className="ml-2 h-7">Twitter</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/vercel/next.js"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">github</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://vercel.com/templates/next.js/portfolio-starter-kit"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">view source</p>
                    </a>
                </li>
            </ul>
        */}
        </div>
    )
}