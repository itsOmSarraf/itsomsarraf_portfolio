import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import { BsTwitterX, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

export default function Socials() {
    return (
        <div className="flex flex-col items-center md:items-start mt-10">
            <RoughNotation
                type="bracket"
                show={true}
                color="#4A5568"
                strokeWidth={2}
                padding={10}
                brackets={['left', 'right']}
            >
                <div className="text-xl flex flex-wrap justify-center md:justify-start items-center gap-4">
                    <p>Connect :</p>
                    <div className="flex gap-4">
                        <a href="https://in.linkedin.com/in/itsomsarraf" target="_blank" rel="noopener noreferrer" className="hide-cursor hover:text-blue-500 transition-colors">
                            <BsLinkedin />
                        </a>
                        <a href="https://x.com/itsOmSarraf_" target="_blank" rel="noopener noreferrer" className="hide-cursor hover:text-blue-400 transition-colors">
                            <BsTwitterX />
                        </a>
                        <a href="https://github.com/itsomsarraf" target="_blank" rel="noopener noreferrer" className="hide-cursor hover:text-gray-400 transition-colors">
                            <BsGithub />
                        </a>
                        <a href="https://instagram.com/itsomsarraf" target="_blank" rel="noopener noreferrer" className="hide-cursor hover:text-pink-700 transition-colors">
                            <BsInstagram />
                        </a>
                    </div>
                </div>
            </RoughNotation>
        </div>
    );
}