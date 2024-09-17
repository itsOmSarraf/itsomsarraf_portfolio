import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Socials() {
    return (
        <div className="text-xl flex justify-center md:justify-start w-full items-center gap-4">
            <a href="https://in.linkedin.com/in/itsomsarraf" target="_blank" rel="noopener noreferrer" className="hide-cursor hover:text-blue-500 transition-colors">
                <BsLinkedin />
            </a>
            <a href="https://x.com/itsOmSarraf_" target="_blank" rel="noopener noreferrer" className="hide-cursor hover:text-blue-400 transition-colors">
                <BsTwitterX />
            </a>
            <a href="https://github.com/itsomsarraf" target="_blank" rel="noopener noreferrer" className="hide-cursor hover:text-gray-700 transition-colors">
                <BsGithub />
            </a>
        </div>
    )
}