import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import OmSarraf from "@/public/Om_Sarraf.png"
import Socials from "../app/Socials";

export default function Hero() {
    return (
        <div className="w-full items-center">
            <div className="container mx-auto px-4 flex justify-center">
                <RoughNotationGroup show={true}>
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-10 md:mx-auto">
                        <div className="w-full md:w-1/2 md:mt-0 mt-2 text-center md:text-left">
                            <h1 className="font-bold text-4xl md:text-5xl mb-2 md:mb-0">FullStack Developer</h1>
                            <p className="text-lg w-full mb-4">
                                Om Sarraf is an individual from India who is currently working{' '}
                                <a href="https://vexio.in" target="_blank" rel="noopener noreferrer" className="font-semibold hide-cursor">@vexio.in</a> as a {' '}
                                <RoughNotation type="circle" color="#B8001F">FullStack intern</RoughNotation>, & also does some{' '}
                                <RoughNotation type="highlight" color="#FFEB00">
                                    <span className="inline-flex items-center hide-cursor">
                                        <a href="/freelancing" target="_blank" rel="noopener noreferrer" className="underline">freelancing (open to gigs)</a>
                                        <MdArrowOutward className="ml-1" />
                                    </span>
                                </RoughNotation>
                            </p>
                            <Socials />
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
        </div>
    )
}