import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#treatments" },
    { name: "Appointments", href: "#contact" },
    { name: "Health Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
  ];

  const services = [
    { name: "General Medicine", href: "#" },
    { name: "Dental Care", href: "#" },
    { name: "Cardiology", href: "#" },
    { name: "Physical Therapy", href: "#" },
    { name: "Emergency Care", href: "#" },
    { name: "Pediatrics", href: "#" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-foreground to-primary text-white">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent mb-4">
                findskin.doctor+
              </h3>
              <p className="text-white/80 leading-relaxed">
                Providing exceptional findskin.doctor services with compassion, innovation, and excellence. Your health and well-being are our top priorities.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium">Main Clinic</p>
                  <p className="text-white/70 text-sm">
                    123 findskin.doctor Blvd, Suite 100<br />
                    Medical City, MC 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium">Emergency: +91 8278771093</p>
                  <p className="text-white/70 text-sm">Appointments: +91 75899 51677</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-white/90">info@findskindoctor@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium">Hours</p>
                  <p className="text-white/70 text-sm">
                    Mon-Sun: 24/7<br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-white/70 hover:text-secondary transition-colors duration-300 text-sm group"
                  >
                    <span className="relative">
                      {service.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Stay Connected</h4>
            <div className="space-y-6">
              <div>
                <p className="text-white/80 text-sm mb-4">
                  Subscribe to our newsletter for health tips and updates.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                  <Button variant="wellness" size="sm" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </div>
              
              <div>
                <p className="text-white/80 text-sm mb-4">Follow us on social media</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all duration-300 group"
                        aria-label={social.name}
                      >
                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
<footer className="text-center text-sm text-white-500 py-4">
  © 2024 findskin.doctor+. All rights reserved. |  Designed & Developed with  by{" "}
  <a
    href="https://harishrajput.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white-500 hover:underline"
  >
    Harish.Rajput
  </a>
</footer>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;