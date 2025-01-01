// import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Email: kumarashu493@gmail.com<br />
              Phone: +91 8521514973
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/ashutoshranjan-cmd" target="_blank" className="hover:text-primary">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/ashutosh-ranjan-a2087b203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank" className="hover:text-primary">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="" className="hover:text-primary">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2025 Ashutosh Ranjan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}