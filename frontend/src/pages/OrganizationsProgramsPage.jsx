import React from "react";
import { ExternalLinkIcon } from "lucide-react";

const organizations = [
    {
        title: "Office of Undergraduate Research (OUR)",
        link: "https://www.purdue.edu/undergrad-research/",
        description: "OUR provides a lot of great information on their website. A few places to start include the 'Students' and 'Conferences' tabs. You can also Search Opportunities to find research opportunities available in the various colleges.",
        searchLink: "https://www.purdue.edu/undergrad-research/students/search-opportunities.php"
    },
    {
        title: "CURE-Purdue",
        link: "https://www.purdue.edu/undergrad-research/faculty/cure/index.php",
        description: "The CURE-Purdue Program aims to encourage the incorporation of research into new and existing courses through training and support in creating a course-based undergraduate research experience (CURE). CUREs offer more students opportunities to engage in research with a Purdue faculty/staff instructor for credit."
    },
    {
        title: "John Martinson Honors College (JMHC)",
        link: "https://honors.purdue.edu/current-students/Undergraduate-Research/index.php",
        description: "Students in the JMHC have access to many different resources and opportunities related to research - students may apply for grants, receive regular announcements about new research opportunities, and join communities that cultivate experiential learning in different interdisciplinary themes.",
        fellowshipLink: "https://honors.purdue.edu/current-students/Undergraduate-Research/Undergraduate%20Research%20Fellowship.php"
    },
    {
        title: "Engineering Undergraduate Research Office (EURO)",
        link: "https://engineering.purdue.edu/Engr/Research/EURO",
        description: "EURO provides more information on many undergraduate research opportunities at Purdue, including the First Time Researcher (FTR) Fellowship and the Summer Undergraduate Research Fellowship (SURF).",
        ftrLink: "https://engineering.purdue.edu/Engr/Research/EURO/programs/ftr",
        surfLink: "https://engineering.purdue.edu/Engr/Research/EURO/students/about-SURF"
    },
    {
        title: "Discovery Undergraduate Interdisciplinary Research Internship (DUIRI)",
        link: "https://www.purdue.edu/discoverypark/duri/about/index.php",
        description: "The DUIRI program gives students the opportunity to get involved in research combining two or more disciplinary strengths in the innovative and entrepreneurial environment of Purdue's Discovery Park District."
    },
    {
        title: "Summer Research Opportunities Program (SROP)",
        link: "https://www.purdue.edu/academics/ogsps/diversity/programs/summer-research-opportunities-program/index.php",
        description: "The SROP is an 8-week program intended to give equal access and opportunities to underrepresented students, preparing participants for their graduate studies."
    },
    {
        title: "Summer Stay Scholars",
        link: "https://www.purdue.edu/summerstay/",
        description: "Through the Summer Stay Scholars program, students can combine coursework with a research or internship experience."
    }
];

export default function OrganizationsProgramsPage() {
    return (
        <div className="min-h-screen pt-20">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Research <span className="text-green-400">Organizations & Programs</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover the various organizations and programs that support undergraduate research at Purdue University.
                    </p>
                </div>
                
                <div className="space-y-8">
                    {organizations.map((org, index) => (
                        <div key={index} className="bg-black/40 rounded-lg p-6 border border-gray-700">
                            <div className="mb-4">
                                <a 
                                    href={org.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors flex items-center underline"
                                >
                                    {org.title}
                                    <ExternalLinkIcon className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{org.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}