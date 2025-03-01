import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";
import OmSarraf from "@/public/om_new.jpeg";
import Socials from "../app/Socials";
import { GoArrowDownLeft } from "react-icons/go";

export default function Hero() {
    return (
        <div className="w-full items-center">
            <div className="container mx-auto px-4 flex justify-center">
                <RoughNotationGroup show={true}>
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-10 md:mx-auto">
                        <div className="w-full md:w-1/2 md:mt-0 mt-2 text-center md:text-left">
                            <h1 className="font-bold text-4xl md:text-5xl mb-2 md:mb-0">FullStack Developer</h1>
                            <p className="text-lg w-full mb-4">
                                Om Sarraf is currently {' '}
                                <span className="whitespace-nowrap font-bold">
                                    <RoughNotation type="circle" color="#B8001F">shipping cool stuff</RoughNotation>
                                </span>, and also does{' '}
                                <RoughNotation type="highlight" color="#FFEB00">
                                    <span className="inline-flex items-center">
                                        <a
                                            href="mailto:itsomsarraf@gmail.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline"
                                        >
                                            freelancing
                                        </a>
                                        <GoArrowDownLeft className="ml-1" />
                                    </span>
                                </RoughNotation>
                            </p>
                            <Socials />
                        </div>
                        <div className="w-full md:w-auto flex justify-center">
                            <div className="h-[200px] w-[200px] overflow-hidden rounded-full">
                                <Image
                                    src={OmSarraf}
                                    alt="Om Sarraf"
                                    width={200}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </RoughNotationGroup>
            </div>
        </div>
    );
}
