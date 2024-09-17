import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
    return (
        <div className="bg-gray-50 py-12">
            <h2 className="font-bold text-3xl text-center mb-12 text-gray-900">
                Projects
            </h2>
            <div className="max-w-5xl mx-auto px-4">
                <div className="relative">
                    <div className="md:w-3/5 lg:w-2/3 relative">
                        <Image
                            src='https://picsum.photos/id/0/4209/2769'
                            width={800}
                            height={500}
                            alt="Project preview"
                            className="w-full h-auto object-cover rounded-xl shadow-md"
                        />
                        <div className="absolute inset-0 bg-black opacity-50 md:opacity-0 rounded-xl"></div>
                    </div>
                    <div className="bg-white bg-opacity-90 md:bg-opacity-100 p-6 rounded-xl shadow-lg border border-gray-200 
                                    absolute inset-0 md:inset-auto md:top-10 md:right-0 md:w-1/2 lg:w-2/5 
                                    flex flex-col justify-center md:block md:text-right">
                        <h3 className="mb-3 text-xl font-semibold text-gray-800">Project Name</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam neque doloremque at reprehenderit accusamus facere aperiam eveniet nemo commodi alias aspernatur, ea tenetur modi, sint recusandae, facilis reiciendis dolor.
                        </p>
                        <div className="flex justify-center md:justify-end mt-4 gap-3">
                            <BsGithub className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer text-xl" />
                            <FiExternalLink className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}