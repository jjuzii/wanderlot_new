import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">Wanderlot</h3>
            <p className="text-gray-400 leading-relaxed">
              We are a group of Shanghai students dedicated to sharing our city's stories with the world. Join us for a free, authentic, and unforgettable experience.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-amber-500">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/tours" className="text-gray-400 hover:text-white transition duration-300">Our Tours</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-amber-500">Contact Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 transform hover:-translate-y-1"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 transform hover:-translate-y-1"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300 transform hover:-translate-y-1"><Instagram size={24} /></a>
              <a href="mailto:contact@wanderlot.com" className="text-gray-400 hover:text-amber-500 transition duration-300 transform hover:-translate-y-1"><Mail size={24} /></a>
            </div>
            <div className="mt-6">
                 <p className="text-gray-500 text-sm">Have questions? Drop us an email!</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Wanderlot Student Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
