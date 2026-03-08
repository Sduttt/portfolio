import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Associate Product Configurator",
    org: "Inadev India Pvt Ltd",
    start: "Jan 2025",
    end: "Present",
    desc: "Configured web and cross-platform applications using Inadev's low-code platform, enabling rapid development and deployment of customized solutions for clients across various industries.",
  },
  {
    title: "Web Developer",
    org: "DeeGlory Solutions",
    start: "May 2024",
    end: "Jan 2025",
    desc: "Built custom websites and funnels using goHighLevel CRM for various clients, enhancing their online presence and lead generation.",
  },
  {
    title: "Freelance Web Developer",
    org: "Self-employed",
    start: "Jan 2023",
    end: "Dec 2023",
    desc: "Built Websites and web applications for various clients using React.",
  },
];

export default function Timeline() {
  return (
    <section className="py-12">
      <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn mb-10">EXPERIENCES :</h1>

      <div className="container mx-auto px-4">
        {/* Grid layout:
            - small screens: 2 columns (line on left, content on right)
            - md and up: 3 columns (left card, center line, right card)
        */}
        <div className="grid grid-cols-2 md:grid-cols-[10fr_1fr_10fr] gap-2 items-start relative">
          {/* vertical line: full height */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300"></div>
          <div className="md:hidden absolute top-0 bottom-0 left-4 w-0.5 bg-gray-300"></div>

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0; // alternate on md+

            return (
              <React.Fragment key={idx}>
                {/* left column for md+ */}
                <div className="hidden md:flex md:col-start-1 md:justify-end md:items-start">
                  {isLeft && (
                    <div className="w-full flex justify-end">
                      <div className="-translate-x-6">
                        <ExperienceCard {...exp} />
                      </div>
                    </div>
                  )}
                </div>

                {/* center column: dot (desktop only) */}
                <div className="hidden md:flex col-start-2 justify-center relative">
                  <div className="z-10 mt-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-md"></div>
                  </div>
                </div>

                {/* right column for md+ */}
                <div className="hidden md:flex md:col-start-3 md:justify-start md:items-start">
                  {!isLeft && (
                    <div className="w-full flex justify-start">
                      <div className="translate-x-6">
                        <ExperienceCard {...exp} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Small screen: dot on left and card on right (card width 80%) */}
                <div className="md:hidden col-span-2 mt-4 flex items-start">
                  <div className="w-12 flex z-10 -ml-1.75 justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-md mt-2"></div>
                  </div>
                  <div className="pl-2 w-4/5">
                    <ExperienceCard {...exp} />
                  </div>
                </div>

                {/* spacer to create vertical spacing between items */}
                <div className="hidden md:block md:col-span-3 h-8"></div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
