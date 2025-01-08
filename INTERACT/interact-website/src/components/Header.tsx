import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white">
      <div className="bg-blue-700 text-center py-10">
        <h2 className="text-4xl font-bold">Welcome to INTERACT</h2>
        <p className="text-xl mt-2">All in One Experience</p>
      </div>
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">INTERACT</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-lg font-semibold">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="text-lg font-semibold">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/projects" legacyBehavior>
                <a className="text-lg font-semibold">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/tools" legacyBehavior>
                <a className="text-lg font-semibold">Tools</a>
              </Link>
            </li>
            <li>
              <Link href="/workspace" legacyBehavior>
                <a className="text-lg font-semibold">Workspace</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-lg font-semibold">About Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;