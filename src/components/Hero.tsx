import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";
import OmSarraf from "@/public/itsomsarraf.png";
import Socials from "../app/Socials";
import { GoArrowDownLeft } from "react-icons/go";

export default function Hero() {
    return (
        <div className="w-full items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <RoughNotationGroup show={true}>
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 py-10">
                        <div className="w-full md:w-auto md:mt-0 mt-2 text-center md:text-left">
                            <h1 className="font-bold text-4xl md:text-5xl mb-3">FullStack Developer</h1>
                            <p className="text-lg max-w-md mb-4 leading-relaxed">
                                Shipping{' '}
                                <RoughNotation type="highlight" color="#FFEB00" multiline={true}>
                                    products that matter
                                </RoughNotation>
                                {' '}— from{' '}
                                <span className="font-bold">web & mobile apps</span> to{' '}
                                <span className="font-bold">AI agents & automation</span>.
                                <br className="hidden md:block" />
                                {' '}Worked with{' '}
                                <span className="whitespace-nowrap font-bold">
                                    <RoughNotation type="underline" color="#B8001F">clients across the globe</RoughNotation>
                                </span>.{' '}
                                <RoughNotation type="circle" color="#B8001F">
                                    <a
                                        href="mailto:itsomsarraf@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center font-semibold"
                                    >
                                        Let's talk
                                        <GoArrowDownLeft className="ml-1" />
                                    </a>
                                </RoughNotation>
                            </p>
                            <Socials />
                        </div>
                        <div className="flex-shrink-0">
                            <div className="h-[180px] w-[180px] md:h-[200px] md:w-[200px] overflow-hidden rounded-full">
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
