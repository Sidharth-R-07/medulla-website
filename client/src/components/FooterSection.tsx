import { Link } from "wouter";
import { MedullaLogo } from "@/lib/icons";
import { TwitterIcon, LinkedInIcon, InstagramIcon } from "@/lib/icons";
import { useScrollTo } from "@/hooks/use-scroll-to";

export default function FooterSection() {
  const { scrollToSection } = useScrollTo();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200" id="about">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <MedullaLogo className="h-8 w-auto" />
            </div>
            <p className="mt-4 text-gray-600 max-w-md">
              Medulla is transforming clinical practice with AI-powered tools that help healthcare professionals make better decisions faster.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://x.com/medullamed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/medullamed/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/medullamed?igsh=MTNvdmJqaTRpZXhicQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#tools"
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("tools");
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("testimonials");
                  }}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#app"
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("app");
                  }}
                >
                  Mobile App
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("faq");
                  }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} Medulla Health Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}