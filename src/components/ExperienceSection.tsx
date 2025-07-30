import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase, Code, GraduationCap } from "lucide-react";

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceSection = ({ className = "" }: ExperienceSectionProps) => {
  const [activeTab, setActiveTab] = useState("experience");

  const skills = [
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "ReactJS", category: "frontend" },
    { name: "Vite", category: "frontend" },
    { name: "Redux", category: "frontend" },
    { name: "GraphQL", category: "backend" },
    { name: "NodeJS", category: "backend" },
    { name: "ExpressJS", category: "backend" },
    { name: "AWS Lambda", category: "cloud" },
    { name: "AWS API Gateway", category: "cloud" },
    { name: "AWS CloudFront", category: "cloud" },
    { name: "AWS S3", category: "cloud" },
    { name: "AWS DynamoDB", category: "cloud" },
    { name: "AWS RDS", category: "cloud" },
    { name: "AWS CloudWatch", category: "cloud" },
    { name: "AWS CICD", category: "cloud" },
    { name: "AWS EventBridge", category: "cloud" },
    { name: "AWS StepFunctions", category: "cloud" },
    { name: "AWS Aurora", category: "cloud" },
    { name: "PostgreSQL", category: "database" },
    { name: "Stripe", category: "integration" },
    { name: "Shopify", category: "integration" },
    { name: "NetSuite", category: "integration" },
    { name: "UPS", category: "integration" },
    { name: "FedEx", category: "integration" },
    { name: "3PL", category: "integration" },
    { name: "Keycloak", category: "security" },
    { name: "Jest", category: "testing" },
    { name: "Git", category: "tools" },
    { name: "JIRA", category: "tools" },
  ];

  console.log("activeTab", activeTab);

  const experiences = [
    {
      id: "gadgeon",
      company: "GADGEON SYSTEMS INC",
      location: "Kochi",
      position: "Software Engineer",
      project: "KORE Digital Ecommerce",
      period: "October 2022 - Present",
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
        "Cloud & Infrastructure (AWS): Lambda, API Gateway, CloudFront, S3, DynamoDB, RDS, CloudWatch, CICD, EventBridge, StepFunctions, Aurora",
        "Third Party Integrations: UPS, FEDEX, 3PL, Shopify, NetSuite",
        "Payment Gateway: Stripe",
      ],
      tools: [
        "Git (Version Control)",
        "Jira (Task Management)",
        "Unit Testing",
        "Agile Development",
      ],
    },
    {
      id: "techzera",
      company: "TECHZERA INFOLOGIES PVT LTD",
      location: "Malappuram",
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
      tools: ["Git (Version Control)", "Jira (Task Management)"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "SHREEDEVI COLLEGE OF INFORMATION SCIENCE",
      location: "Mangalore",
      period: "2018 - 2021",
    },
    {
      degree: "PUC (plus 2)",
      institution: "GHSS PAKKAM",
      location: "Kasaragod",
      period: "2017",
    },
    {
      degree: "SSLC",
      institution: "URSULINE PUBLIC SCHOOL",
      location: "Kanhiradukkam",
      period: "2015",
    },
  ];

  const certifications = [
    {
      name: "React- The Complete Guide",
      url: "https://www.udemy.com/certificate/UC-687ae9ae-b91a-43d0-9d08-fc455f36a25a/",
    },
  ];

  const getBadgeColor = (category: string) => {
    const colors: Record<string, string> = {
      frontend: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      backend: "bg-green-100 text-green-800 hover:bg-green-200",
      cloud: "bg-purple-100 text-purple-800 hover:bg-purple-200",
      database: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      integration: "bg-pink-100 text-pink-800 hover:bg-pink-200",
      security: "bg-red-100 text-red-800 hover:bg-red-200",
      testing: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
      tools: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    };
    return colors[category] || "bg-gray-100 text-gray-800 hover:bg-gray-200";
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Experience
        </h2>

        <Tabs
          defaultValue="experience"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger
                value="experience"
                className="flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="flex items-center gap-2"
              >
                <GraduationCap className="h-4 w-4" />
                Education
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="experience" className="space-y-8">
            <div className="space-y-6">
              {experiences.map((exp) => (
                <Card key={exp.id} className="border border-gray-200 shadow-sm">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <CardTitle className="text-xl font-bold">
                          {exp.position}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium">
                          {exp.company} - {exp.location}
                        </CardDescription>
                        {exp.project && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Project: {exp.project}
                          </p>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-sm">
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="technologies">
                          <AccordionTrigger className="text-sm font-medium">
                            Technologies Used
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-1">
                              {exp.technologies.map((tech, idx) => (
                                <li key={idx} className="text-sm">
                                  {tech}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        {exp.tools && exp.tools.length > 0 && (
                          <AccordionItem value="tools">
                            <AccordionTrigger className="text-sm font-medium">
                              Tools & Methodologies
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1">
                                {exp.tools.map((tool, idx) => (
                                  <li key={idx} className="text-sm">
                                    {tool}
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                      </Accordion>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>
                  Technologies and tools I've worked with professionally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`${getBadgeColor(skill.category)} transition-all duration-300 cursor-default`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Frontend Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((skill) => skill.category === "frontend")
                        .map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className={getBadgeColor(skill.category)}
                          >
                            {skill.name}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Backend Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((skill) => skill.category === "backend")
                        .map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className={getBadgeColor(skill.category)}
                          >
                            {skill.name}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Cloud & Infrastructure</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((skill) => skill.category === "cloud")
                        .map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className={getBadgeColor(skill.category)}
                          >
                            {skill.name}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((skill) => skill.category === "integration")
                        .map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className={getBadgeColor(skill.category)}
                          >
                            {skill.name}
                          </Badge>
                        ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>
                    Academic qualifications and certifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                      >
                        <h4 className="font-medium">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}, {edu.location}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {edu.period}
                        </p>
                      </div>
                    ))}
                  </div>

                  {certifications.length > 0 && (
                    <div className="mt-8">
                      <h3 className="font-semibold mb-4">Certifications</h3>
                      <div className="space-y-2">
                        {certifications.map((cert, index) => (
                          <div key={index} className="flex items-center">
                            <Badge variant="outline" className="mr-2">
                              Certificate
                            </Badge>
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:underline"
                            >
                              {cert.name}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
