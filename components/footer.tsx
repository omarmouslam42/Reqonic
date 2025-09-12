
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo + Text */}
          <div>
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center space-x-2 rtl:space-x-reverse"
              >
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    R
                  </span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  Reqonic
                </span>
              </Link>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-muted-foreground sm:max-w-xs sm:text-left">
              Professional technology and IT solutions for individuals and
              businesses.
            </p>

            {/* Social Icons */}
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-foreground transition hover:text-primary"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              {/* باقي السوشيال لينكات بنفس الأسلوب */}
            </ul>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-muted-foreground hover:text-foreground transition" href="#">
                    Company History
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-foreground transition" href="#">
                    Meet the Team
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-muted-foreground hover:text-foreground transition" href="#">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-foreground transition" href="#">
                    Web Design
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-muted-foreground hover:text-foreground transition" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-foreground transition" href="#">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-muted-foreground">john@doe.com</span>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-muted-foreground">0123456789</span>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-muted-foreground">
                    213 Lane, London, United Kingdom
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-muted pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-muted-foreground">
              <span className="block sm:inline">All rights reserved.</span>
              <a
                className="inline-block text-primary underline transition hover:text-primary/75"
                href="#"
              >
                Terms & Conditions
              </a>
              <span>&middot;</span>
              <a
                className="inline-block text-primary underline transition hover:text-primary/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>
            <p className="mt-4 text-sm text-muted-foreground sm:order-first sm:mt-0">
              &copy; 2025 Reqonic
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
