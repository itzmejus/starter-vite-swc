import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, Car, Palmtree, FileText, Building2, Bus } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    category: "Tourism" | "E-Commerce" | "Business Services" | "Transportation";
    icon?: React.ReactNode;
    gradient?: string;
}

interface ProjectsProps {
    projects?: Project[];
    title?: string;
    subtitle?: string;
}

const Projects = ({
    projects = [
        {
            id: 1,
            title: "Luxury Car Rental Platform",
            description: "Premium car rental booking system with real-time availability and Shopify integration",
            longDescription: "A comprehensive luxury car rental platform built for the UAE market, featuring real-time vehicle availability, dynamic pricing, and seamless Shopify checkout integration. Includes advanced filtering, mobile-responsive design, and multi-currency support.",
            technologies: ["React", "TypeScript", "Shopify API", "Redux", "Tailwind CSS"],
            category: "Transportation",
            icon: <Car className="w-16 h-16" />,
            gradient: "from-purple-500 via-pink-500 to-red-500",
        },
        {
            id: 2,
            title: "Desert Safari Booking System",
            description: "Complete booking platform for Dubai desert experiences with tour management",
            longDescription: "Full-featured desert safari booking application with tour package management, real-time availability checking, and integrated payment processing. Designed specifically for Dubai tourism market with tax-free checkout flow.",
            technologies: ["React", "TypeScript", "Redux", "Shopify Storefront API"],
            category: "Tourism",
            liveUrl: "https://safaris.ae",
            icon: <Palmtree className="w-16 h-16" />,
            gradient: "from-orange-500 via-amber-500 to-yellow-500",
        },
        {
            id: 3,
            title: "Dubai Excursions Platform",
            description: "Complete Dubai tourism marketplace with excursions, tours, and activity bookings",
            longDescription: "All-in-one tourism platform aggregating various Dubai attractions and experiences. Features include package bundling, seasonal promotions, customer reviews, and personalized recommendations based on user preferences.",
            technologies: ["React", "TypeScript", "Shopify", "Redux Toolkit"],
            category: "Tourism",
            liveUrl: "http://excursionsdubai.ae/",
            icon: <Palmtree className="w-16 h-16" />,
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
        },
        {
            id: 4,
            title: "Visa Services Platform",
            description: "Multi-country visa application and processing system with GCC payment integration",
            longDescription: "Comprehensive visa application platform supporting multiple countries and visa types. Features include document management, application tracking, GCC-specific payment restrictions, and automated status notifications.",
            technologies: ["React", "TypeScript", "Node.js", "Payment Gateway"],
            category: "Business Services",
            liveUrl: "https://app.jetsetvisas.ae",
            icon: <FileText className="w-16 h-16" />,
            gradient: "from-green-500 via-emerald-500 to-teal-500",
        },
        {
            id: 5,
            title: "Property Management System",
            description: "Real estate platform for property listings and management across UAE",
            longDescription: "Modern property management platform with advanced search filters, virtual tours integration, and comprehensive listing management. Supports both residential and commercial properties with multi-language capabilities.",
            technologies: ["React", "TypeScript", "Redux", "Maps API"],
            category: "Business Services",
            liveUrl: "https://jade-properties.onrender.com/",
            icon: <Building2 className="w-16 h-16" />,
            gradient: "from-indigo-500 via-purple-500 to-pink-500",
        },
        {
            id: 6,
            title: "Multi-Country Bus Service",
            description: "Inter-city bus booking platform with route management and seat selection",
            longDescription: "Cross-border bus service booking system featuring route planning, seat selection interface, dynamic pricing based on demand, and real-time bus tracking. Supports multiple countries with localized payment methods.",
            technologies: ["React", "TypeScript", "Redux", "Geolocation API"],
            category: "Transportation",
            icon: <Bus className="w-16 h-16" />,
            gradient: "from-blue-600 via-indigo-600 to-purple-600",
        },
    ],
    title = "Featured Projects",
    subtitle = "Recent web development work and client solutions",
}: ProjectsProps) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", "Tourism", "Business Services", "Transportation"];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const openProjectDetails = (project: Project) => {
        setSelectedProject(project);
        setIsDialogOpen(true);
    };

    return (
        <section className="w-full py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
                    <p className="text-muted-foreground mb-6">{subtitle}</p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card
                                className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                                onClick={() => openProjectDetails(project)}
                            >
                                <div className={`relative overflow-hidden h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                                        />
                                    ) : (
                                        <div className="text-white opacity-80 transition-transform duration-300 hover:scale-110">
                                            {project.icon}
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>

                                <CardHeader>
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <CardTitle className="text-xl">{project.title}</CardTitle>
                                        <Badge variant="secondary" className="shrink-0">
                                            {project.category}
                                        </Badge>
                                    </div>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <Badge key={tech} variant="outline" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <Badge variant="outline" className="text-xs">
                                                +{project.technologies.length - 3}
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Project Details Dialog */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        {selectedProject && (
                            <>
                                <DialogHeader>
                                    <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                                </DialogHeader>

                                <div className={`relative overflow-hidden rounded-lg h-64 bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center`}>
                                    {selectedProject.image ? (
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <div className="text-white opacity-90">
                                            {selectedProject.icon}
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <Badge>{selectedProject.category}</Badge>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold mb-2">About This Project</h3>
                                        <p className="text-muted-foreground">
                                            {selectedProject.longDescription || selectedProject.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold mb-2">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech) => (
                                                <Badge key={tech} variant="secondary">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {(selectedProject.liveUrl || selectedProject.githubUrl) && (
                                        <div className="flex gap-3 pt-4">
                                            {selectedProject.liveUrl && (
                                                <Button asChild>
                                                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="mr-2 h-4 w-4" />
                                                        View Live
                                                    </a>
                                                </Button>
                                            )}
                                            {selectedProject.githubUrl && (
                                                <Button variant="outline" asChild>
                                                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                                        <Github className="mr-2 h-4 w-4" />
                                                        GitHub
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default Projects;