import React from "react";
import { Button } from "./ui/button";
import { ArrowDownIcon, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import profile from "./assets/justin.JPEG"

interface HeroSectionProps {
  name?: string;
  title?: string;
  introduction?: string;
  profileImage?: string;
  resumeUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name = "Justin Johnson",
  title = "Full Stack Developer",
  introduction = "Experienced software developer with 3.6 years of expertise in React, Node.js, and AWS. I am skilled in TypeScript, GraphQL, PostgreSQL, and modern tools like Stripe, Shopify, and NetSuite. Recognized for strong organizational skills and dedication to delivering quality solutions.",
  resumeUrl = "/resume.pdf",
}) => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Justin_Johnson_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="flex flex-col space-y-8 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
                {name}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                {title}
              </h2>
            </motion.div>
          </div>

          <motion.p
            className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {introduction}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleDownloadResume}
            >
              <ArrowDownIcon size={20} />
              Download Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <a
                href="mailto:justinjohnson.ae@gmail.com"
                className="hover:underline"
              >
                <Mail size={20} />
              </a>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <MapPin size={18} className="text-blue-600" />
            <span className="font-medium">Abu Dhabi, UAE</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-ping opacity-20"></div>
            <div className="absolute inset-4 rounded-full border-2 border-indigo-300 animate-pulse opacity-30"></div>

            {/* Main profile image */}
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-100"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profile}
                alt={`${name} - ${title}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-full shadow-xl border-4 border-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="font-semibold text-sm">3.6+ Years</span>
            </motion.div>

            {/* Status indicator */}
            <motion.div
              className="absolute top-6 right-6 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
