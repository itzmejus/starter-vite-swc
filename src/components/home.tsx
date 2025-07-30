import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import PhotoGallery from "./PhotoGallery";
import ContactBar from "./ContactBar";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import profile from "./assets/justin.JPEG"
import JustinOffice from "./assets/JustinOffice.JPEG"
import JustinTeamOut from "./assets/JustinTeamOut.JPEG"
import justinFormal from "./assets/justinFormal.JPEG"
import TeamOut1 from "./assets/TeamOut1.JPEG"
import TeamOut2 from "./assets/TeamOut2.JPEG"
import TeamOut3 from "./assets/TeamOut3.JPEG"
import TeamOut4 from "./assets/TeamOut4.JPEG"
import WorkDesk from "./assets/WorkDesk.JPEG"

const HomePage = () => {
  const resumeData = {
    name: "Justin Johnson",
    title: "Full Stack Developer",
    location: "Abu Dhabi - UAE",
    email: "justinjohnson.ae@gmail.com",
    phone: "+971-502-300-557",
    linkedin: "https://www.linkedin.com/in/justin-johnson-2179b91a9",
    about:
      "Experienced software developer with 3.6 years of expertise in React, Node.js, and AWS. I am skilled in TypeScript, GraphQL, PostgreSQL, and modern tools like Stripe, Shopify, and NetSuite. Recognized for strong organizational skills and dedication to delivering quality solutions. Ready to contribute effectively to innovative projects.",
    experience: [
      {
        company: "GADGEON SYSTEMS INC – Kochi",
        position: "Software Engineer | KORE Digital Ecommerce",
        period: "October 2022 – Present",
        responsibilities: [
          "Front-end development using React, Vite, and Redux for responsive user experience, including the creation of reusable components.",
          "Built and optimized scalable backend solutions using AWS services, including API development and Step Functions for workflow automation.",
          "Integrated third-party services like Stripe and Shopify for payment processing and eCommerce operations.",
          "Implemented seamless integration with logistics providers including UPS, FedEx, and 3PL for automated shipping and tracking.",
          "Integrated NetSuite for efficient order management, invoicing, and financial workflows.",
        ],
        technologies: [
          "Front-End: React, Vite, Redux",
          "Back-End: Node.js, AWS Lambda, GraphQL",
          "Cloud & Infrastructure: (AWS): Lambda, API Gateway, CloudFront, S3, DynamoDB, RDS, CloudWatch, CICD, EventBridge, StepFuctions, Aurora",
          "Third Party Integrations: UPS, FEDEX, 3PL, Shopify, NetSuite",
          "Payment Gateway: Stripe",
        ],
      },
      {
        company: "TECHZERA INFOLOGIES PVT LTD – Malappuram",
        position: "Software Engineer – Full stack",
        period: "March 2022 – September 2022",
        responsibilities: [
          "Built APIs using Node.js for e-commerce applications.",
          "Designed user interfaces and admin dashboards with React, focusing on responsive and user-friendly experiences.",
          "Ensured smooth integration between APIs and UI components for seamless functionality.",
        ],
        technologies: [
          "Front-End: React",
          "Back-End: Node.js, ExpressJS, RESTful APIs",
        ],
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "ReactJs",
      "Vite",
      "Redux",
      "GraphQL",
      "Stripe",
      "NodeJS",
      "StepFunctions",
      "RDS",
      "DynamoDB",
      "S3",
      "CloudWatch",
      "CloudFront",
      "Lambda",
      "EventBridge",
      "UPS, Fedex,3PL",
      "PostgreSQL",
      "CodePipeline",
      "Git",
      "ExpressJS",
      "Jest",
      "Shopify",
      "NetSuite",
      "Keycloak",
      "JIRA",
    ],
    education: [
      {
        degree: "Bachelor of Computer Applications",
        institution: "SHREEDEVI COLLEGE OF INFORMATION SCIENCE",
        location: "Mangalore",
        year: "2018-2021",
      },
      {
        degree: "PUC (plus 2)",
        institution: "GHSS PAKKAM",
        location: "Kasaragod",
        year: "03/2017",
      },
      {
        degree: "SSLC",
        institution: "URSULINE PUBLIC SCHOOL",
        location: "Kanhiradukkam",
        year: "03/2015",
      },
    ],
    certifications: [
      "React- The Complete Guide (https://www.udemy.com/certificate/UC-687ae9ae-b91a-43d0-9d08-fc455f36a25a/)",
    ],
    languages: ["English", "Malayalam", "Hindi", "Tamil"],
  };

  const photos = [
    {
      id: 1,
      src: profile,
      alt: "Professional workspace with modern development setup",
      caption: "Development Environment",
    },
    {
      id: 2,
      src: JustinOffice,
      alt: "Office Space",
      caption: "Office Space",
    },
    {
      id: 3,
      src: JustinTeamOut,
      alt: "Team Outing - Le meridien",
      caption: "Team Outing - Le meridien",
    },
    {
      id: 4,
      src: justinFormal,
      alt: "Team Outing - Novotel",
      caption: "Team Outing - Novotel",
    },
    {
      id: 5,
      src: TeamOut1,
      alt: "Team Outing - 1947 Hotel",
      caption: "Team Outing - 1947 Hotel",
    },
    {
      id: 6,
      src: TeamOut2,
      alt: "Team Outing - Le meridien",
      caption: "Team Outing - Le meridien",
    },
    {
      id: 7,
      src: TeamOut3,
      alt: "Team Outing - Marriot",
      caption: "Team Outing - Marriot",
    },
    {
      id: 7,
      src: TeamOut4,
      alt: "With Nicki Brook",
      caption: "With Nicki Brook",
    },
    {
      id: 8,
      src: WorkDesk,
      alt: "Modern office space",
      caption: "Work Desk",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <ContactBar
        linkedInUrl={resumeData.linkedin}
        email={resumeData.email}
        phoneNumber={resumeData.phone}
        location={resumeData.location}
      />

      {/* Main Content */}
      <div className="pb-20">
        {/* Hero Section */}
        <HeroSection
          name={resumeData.name}
          title={resumeData.title}
          introduction={resumeData.about}
          profileImage="public\assets\justin.JPEG"
          resumeUrl="/resume.pdf"
        />

        <div className="container mx-auto px-4">
          <Separator className="my-16" />

          {/* About Me Section */}
          <section id="about" className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-xl text-slate-700 leading-relaxed text-center mb-8">
                  {resumeData.about}
                </p>

                <div className="mt-10">
                  <h3 className="text-2xl font-semibold mb-6 text-center">
                    Languages
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {resumeData.languages.map((language, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 transform hover:scale-105 shadow-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-semibold mb-6 text-center">
                    Education
                  </h3>
                  <div className="space-y-6">
                    {resumeData.education.map((edu, index) => (
                      <div
                        key={index}
                        className="relative bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        <h4 className="font-semibold text-lg text-slate-800">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 font-medium mt-1">
                          {edu.institution}, {edu.location}
                        </p>
                        <p className="text-slate-600 text-sm mt-1">
                          {edu.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-semibold mb-6 text-center">
                    Certifications
                  </h3>
                  <div className="space-y-4">
                    {resumeData.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-all duration-300"
                      >
                        <p className="text-slate-700 font-medium">{cert}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-16" />

          {/* Experience Section */}
          <section id="experience" className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-4">
                Skills & Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <ExperienceSection />
          </section>

          <Separator className="my-16" />

          {/* Photo Gallery */}
          <section id="gallery" className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-4">
                Photo Gallery
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <PhotoGallery photos={photos} />
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-900 to-blue-900 py-12 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {resumeData.name}
              </h3>
              <p className="text-blue-200">Full Stack Developer</p>
            </div>
            <div className="border-t border-blue-800 pt-6">
              <p className="text-blue-100">
                &copy; {new Date().getFullYear()} {resumeData.name}. All rights
                reserved.
              </p>
              <p className="text-sm text-blue-300 mt-2">
                Based in {resumeData.location} • Available for opportunities
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
