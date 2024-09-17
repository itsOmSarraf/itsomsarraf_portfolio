'use client'
import React, { useState } from 'react';

export const experiences = [
    {
        title: 'FullStack Intern',
        company: 'vexio.in',
        location: 'Remote',
        duration: 'May 2024 - Present',
        Sdate: 'May 13, 2024',
        Edate: 'Present',
        description: [
            'Working with a small team of 6 people on the GenAi MVP',
            'Stack: Nextjs and Django'
        ],
        url: 'https://vexio.in'
    },
    {
        title: 'Solo Founding Dev',
        company: 'FOF.link',
        location: 'Remote',
        duration: 'April 2024 - June 2024',
        Sdate: 'April, 2024',
        Edate: 'Present',
        description: [
            'Working as a solo Engineer at FOF.link',
            'Learnt Nextjs on day 0 of joining',
            'Building the platform solely :D'
        ],
        url: 'https://fof.link'
    },
    {
        title: 'GDSC Lead',
        company: 'Bennett University',
        location: 'Bennett University',
        duration: 'July 2023 - July 2024',
        Sdate: 'July, 2023',
        Edate: 'July 2024',
        description: [
            'Led the Google Developer Student Club at college',
            'Organized coding events and workshops'
        ],
        url: 'https://gdsc.community.dev/bennett-university-greater-noida-india/'
    },
    {
        title: 'Google Developer Groups',
        company: 'Google Developer Group',
        location: 'Delhi NCR',
        duration: 'Dec 2022 - Present',
        Sdate: 'Dece, 2022',
        Edate: 'Present',
        description: [
            'Part of the core team for the Google Developer Groups in Noida and New Delhi',
            'Helped organize DevFest 2022, 2023'
        ],
        url: 'https://developers.google.com/community/gdg'
    },
    {
        title: 'President, IT Council',
        company: 'DPS Dwarka',
        location: 'DPS Dwarka (School)',
        duration: 'July 2020 - July 2021',
        Sdate: 'July, 2020',
        Edate: 'July 2021',
        description: [
            'Served as the President of the IT Council in school',
            'Led technology initiatives and events'
        ],
        url: 'https://dpsdwarka.com'
    }
];

const ExperienceItem = ({ title, company, location, duration, description, url }: any) => (
    <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <h4 className="text-lg font-medium text-gray-700">
            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {company}
            </a>
            {location && ` - ${location}`}
        </h4>
        <p className="text-sm text-gray-600 mb-2">{duration}</p>
        <ul className="list-none pl-0">
            {description.map((item: any, index: any) => (
                <li key={index} className="mb-2 flex items-start">
                    <span className="text-gray-800 mr-2">▹</span>
                    <span className="text-gray-600">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Experiences = () => {
    const [selectedCompany, setSelectedCompany] = useState(experiences[0].company);

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                    {/* <span className="text-gray-600 mr-2">02.</span> */}
                    Work
                </h2>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <ul className="list-none pl-0 md:border-l md:border-gray-300">
                            {experiences.map((exp) => (
                                <li
                                    key={exp.company}
                                    className={`mb-2 pl-4 py-2 cursor-pointer transition-colors duration-200 ${selectedCompany === exp.company
                                        ? "text-gray-800 font-semibold border-l-2 border-gray-800"
                                        : "text-gray-600 hover:text-gray-800"
                                        }`}
                                    onClick={() => setSelectedCompany(exp.company)}
                                >
                                    {exp.company}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-3/4 md:pl-8">
                        {experiences.find(exp => exp.company === selectedCompany) &&
                            <ExperienceItem {...experiences.find(exp => exp.company === selectedCompany)} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;