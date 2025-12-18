import React from 'react';
import { content } from '@/content/fit-pass-landing';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">{content.footer.product.title}</h3>
            <ul className="space-y-2">
              {content.footer.product.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* For Pros */}
          <div>
            <h3 className="text-white font-semibold mb-4">{content.footer.forPros.title}</h3>
            <ul className="space-y-2">
              {content.footer.forPros.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">{content.footer.resources.title}</h3>
            <ul className="space-y-2">
              {content.footer.resources.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">{content.footer.company.title}</h3>
            <ul className="space-y-2">
              {content.footer.company.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
