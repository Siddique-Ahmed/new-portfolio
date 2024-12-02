import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Siddique Ahmed</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Crafting digital experiences with passion and precision.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' }
              ].map(({ icon: Icon, label }) => (
                <a 
                  key={label}
                  href="#" 
                  aria-label={label} 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="py-6 text-sm text-center text-muted-foreground">
          <p>
            © {currentYear} Siddique Ahmed. All rights reserved. Made with{' '}
            <Heart className="inline-block w-4 h-4 text-destructive" /> in Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

