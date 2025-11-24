import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import Button from "../ui/Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand + Socials */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent mb-3">
              FreeWillTechnologies
            </h3>

            <p className="text-muted-foreground mb-4 max-w-md">
              Building innovative solutions and empowering individuals through
              technology. Creating beautiful, functional, and user-centered
              digital experiences.
            </p>

            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="hover-lift">
                <Github className="h-4 w-4" />
              </Button>

              <Button variant="outline" size="icon" className="hover-lift">
                <Linkedin className="h-4 w-4" />
              </Button>

              <Button variant="outline" size="icon" className="hover-lift">
                <Twitter className="h-4 w-4" />
              </Button>

              <Button variant="outline" size="icon" className="hover-lift">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>

            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>

            <ul className="space-y-2">
              <li className="text-muted-foreground">Web Development</li>
              <li className="text-muted-foreground">UI/UX Design</li>
              <li className="text-muted-foreground">Consulting</li>
              <li className="text-muted-foreground">Technical Writing</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} FreeWillTechnologies. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
           
             
        
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

export { Footer };