import React from "react";
import { ExternalLinkIcon, CalendarIcon, BookOpenIcon } from "lucide-react";

const conferences = [
    {
        name: "Fall Undergraduate Research Expo",
        date: "Nov. 19-26, 2024",
        description: "An excellent opportunity for undergraduate researchers to showcase their scholarly work and creative endeavors through poster presentations or research talks.",
        link: "https://www.purdue.edu/undergrad-research/conferences/index.php"
    },
    {
        name: "Spring Undergraduate Research Conference",
        date: "April 8-15, 2025",
        description: "The largest showcase of undergraduate research at Purdue, featuring oral or poster presentations.",
        link: "https://www.purdue.edu/undergrad-research/conferences/index.php"
    },
    {
        name: "Summer Undergraduate Research Symposium",
        date: "July 25, 2025",
        description: "An opportunity for undergraduate researchers to present their work through research talks or poster presentations.",
        link: "https://www.purdue.edu/undergrad-research/conferences/index.php"
    }
];

const resources = [
    {
        title: "Journal of Purdue Undergraduate Research (JPUR)",
        description: "Publish research snapshots or articles in JPUR to gain experience in scientific writing and share your work with a broader audience.",
        link: "https://docs.lib.purdue.edu/jpur/",
        deadlines: ["Fall: Nov. 15", "Spring: Feb. 15"]
    },
    {
        title: "Undergraduate Research Seminar Series",
        description: "Great resources to share your work, attend others' presentations, and connect with faculty projects.",
        link: "https://www.purdue.edu/undergrad-research/seminar-series/index.php",
        upcoming: "Apr 24, 4pm - Marketing your undergraduate research experiences"
    }
];

const writingResources = [
    "Journal of Purdue Undergraduate Research - Tips for Authors",
    "Purdue Online Writing Lab (OWL)",
    "Research and Citation Resources",
    "Writing scientific abstracts presentation",
    "Writing a research paper"
];

export default function PresentingYourResearchPage() {
    return (
        <div className="min-h-screen pt-20">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Presenting Your <span className="text-green-400">Research</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Share your research with the world! Discover opportunities to present your work and gain
                        valuable feedback from peers and professionals.
                    </p>
                </div>

                {/* Conferences Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Undergraduate Research <span className="text-green-400">Conferences</span>
                    </h2>
                    <div className="space-y-6">
                        {conferences.map((conference, index) => (
                            <div key={index} className="bg-black/40 rounded-lg p-6 border border-gray-700">
                                <div className="mb-4">
                                    <a
                                        href={conference.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors flex items-center underline"
                                    >
                                        {conference.name}
                                        <ExternalLinkIcon className="w-5 h-5 ml-2"/>
                                    </a>
                                </div>
                                <div className="flex items-center text-green-400 mb-3">
                                    <CalendarIcon className="w-4 h-4 mr-2"/>
                                    <span className="font-semibold">{conference.date}</span>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{conference.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Research Images */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Research <span className="text-green-400">Showcase</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-black/40 rounded-lg p-6 border border-gray-700">
                            <img
                                src="./presenting_1.jpeg"
                                alt="Students presenting their research posters at the fall undergraduate research expo."
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <p className="text-gray-400 text-sm text-center">
                                Students presenting their research posters at the fall undergraduate research expo.
                            </p>
                        </div>
                        <div className="bg-black/40 rounded-lg p-6 border border-gray-700">
                            <img
                                src="./presenting_2.png"
                                alt="Research article cover page in JPUR journal, vol 13. 'Machine Learning of Big Data: A Gaussian Regression Model to Predict' by Jerry Gu."
                                className="w-full max-h-96 object-contain rounded-lg mb-4"
                            />
                            <p className="text-gray-400 text-sm text-center">
                                Research article cover page in JPUR journal, vol 13. "Machine Learning of Big Data: A
                                Gaussian Regression Model to Predict" by Jerry Gu.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Resources Section */}
                <div className="mb-12">
                    <div className="space-y-6">
                        {resources.map((resource, index) => (
                            <div key={index} className="bg-black/40 rounded-lg p-6 border border-gray-700">
                                <div className="mb-4">
                                    <a
                                        href={resource.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors flex items-center underline"
                                    >
                                        {resource.title}
                                        <ExternalLinkIcon className="w-5 h-5 ml-2"/>
                                    </a>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-4">{resource.description}</p>

                                {resource.deadlines && (
                                    <div className="mb-4">
                                        <h4 className="text-green-400 font-semibold mb-2">Submission Deadlines:</h4>
                                        <ul className="text-gray-300 space-y-1">
                                            {resource.deadlines.map((deadline, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                                    {deadline}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {resource.upcoming && (
                                    <div className="mb-4">
                                        <h4 className="text-green-400 font-semibold mb-2">Upcoming Event:</h4>
                                        <p className="text-gray-300">{resource.upcoming}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Writing Help Section */}
                <h2 className="text-2xl font-bold text-white mb-6">
                    Need Help with <span className="text-green-400">Research Writing?</span>
                </h2>
                <div className="bg-black/40 rounded-lg p-6 border border-gray-700">
                    <p className="text-gray-300 mb-6">
                        Writing about your research can be challenging, but these resources are here to help you craft
                        compelling research papers and abstracts.
                    </p>
                    <div className="space-y-3">
                        {writingResources.map((resource, index) => (
                            <div key={index}
                                 className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                                <BookOpenIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                                <span className="text-gray-300">{resource}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}