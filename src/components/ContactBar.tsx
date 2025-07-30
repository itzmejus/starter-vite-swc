import { Github, Linkedin, Phone, MapPin, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface ContactBarProps {
  linkedInUrl?: string;
  githubUrl?: string;
  email?: string;
  phoneNumber?: string;
  location?: string;
}

const ContactBar = ({
  linkedInUrl = "https://www.linkedin.com/in/justin-johnson-2179b91a9",
  githubUrl = "https://github.com/itzmejus",
  phoneNumber = "+971-502-300-557",
  location = "https://maps.app.goo.gl/CDxsDkq1TXNYJK7WA",
}: ContactBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center h-16 bg-background border-t shadow-md px-4">
      <div className="container max-w-7xl flex justify-between items-center">
        <div className="text-sm font-medium hidden md:block">
          Justin Johnson | Full Stack Developer
        </div>

        <div className="flex items-center space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="mailto:justinjohnson.ae@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={`tel:${phoneNumber.replace(/-/g, "")}`}
                    aria-label="Phone Number"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{phoneNumber}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-default">
                  <a href="https://maps.app.goo.gl/CDxsDkq1TXNYJK7WA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Location"
                  >
                    <MapPin className="h-5 w-5" />
                  </a>

                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{location}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="text-sm font-medium md:block hidden">
          <a
            href="mailto:justinjohnson.ae@gmail.com"
            className="hover:underline"
          >
            justinjohnson.ae@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
