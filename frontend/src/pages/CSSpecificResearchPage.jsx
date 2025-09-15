import React from "react";
import { ExternalLinkIcon, CodeIcon, UsersIcon, BookOpenIcon, CalendarIcon } from "lucide-react";

const researchResources = [
    {
        title: "Undergraduate Research Opportunities with CS Professor",
        link: "https://www.cs.purdue.edu/corporate/employment/cs%20research.html",
        description: "An updated list of research projects with CS professors who are seeking undergraduate researchers.",
        help: "If you already have an interest in a specific research area or would like to work with a certain professor on a project.",
        icon: <UsersIcon className="w-5 h-5" />
    },
    {
        title: "CS Departmental Research Areas",
        link: "https://www.cs.purdue.edu/research/index.html",
        description: "A summary of the 14 major research areas within the CS Department and the supporting faculty for each.",
        help: "If you do not have a specific research area or professor in mind yet but want to explore all the options available in the Department.",
        icon: <CodeIcon className="w-5 h-5" />
    },
    {
        title: "Research Seminars",
        link: "https://www.cs.purdue.edu/research/seminars.html",
        description: "An updated list of various CS-Related seminar series and colloquiums.",
        help: "If you want to hear about the latest CS Department research directly from faculty.",
        icon: <CalendarIcon className="w-5 h-5" />
    },
    {
        title: "Computational Science Undergrad Research Brightspace Page",
        link: "https://purdue.brightspace.com/d2l/login?sessionExpired=1&target=%2fd2l%2fle%2fcontent%2f910376%2fviewContent%2f13784501%2fView",
        description: "A list of all the undergraduate research programs that offer CS-related projects.",
        help: "If you want an overview of all the possible CS-related research opportunities across the university.",
        icon: <BookOpenIcon className="w-5 h-5" />
    }
];

export default function CSSpecificResearchPage() {
    return (
        <div className="min-h-screen pt-20">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        CS-Specific <span className="text-green-400">Research</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Interested in doing undergraduate research related to your CS/DS/AI Degree but don't know where to start? 
                        Check out this list of helpful resources to learn more!
                    </p>
                </div>

                <div className="space-y-8 mb-12">
                    {researchResources.map((resource, index) => (
                        <div key={index} className="bg-black/40 rounded-lg p-6 border border-gray-700">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4 text-white">
                                    {resource.icon}
                                </div>
                                <a 
                                    href={resource.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors flex items-center underline"
                                >
                                    {resource.title}
                                    <ExternalLinkIcon className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                            
                            <div className="mb-4">
                                <h4 className="text-green-400 font-semibold mb-2">Description:</h4>
                                <p className="text-gray-300 leading-relaxed">{resource.description}</p>
                            </div>
                            
                            <div>
                                <h4 className="text-green-400 font-semibold mb-2">How it can help:</h4>
                                <p className="text-gray-300 leading-relaxed">{resource.help}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}