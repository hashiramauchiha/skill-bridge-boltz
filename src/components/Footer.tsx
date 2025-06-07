import React from 'react';
import { Grid as Bridge, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bridge className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">SkillBridge</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Where Trust Meets Talent. A secure freelance marketplace platform with 
              peer-reviewed skill endorsements, milestone-based escrow payments, and 
              pre-designed contract templates.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>JNTUH UCEJ, Department of CSE</p>
              <p>Advanced Software Engineering Project</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="/user-roles" className="hover:text-blue-400 transition-colors">User Roles</a></li>
              <li><a href="/faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@skillbridge.dev</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Hyderabad, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Github className="h-4 w-4" />
                <span>github.com/skillbridge</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SkillBridge. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              <span className="font-medium">Powered by:</span> React.js • Node.js • PostgreSQL • Cloud Hosting
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;