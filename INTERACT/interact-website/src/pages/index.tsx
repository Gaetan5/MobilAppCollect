import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <nav className="bg-white shadow-md">
        <ul className="flex justify-center space-x-4 p-4">
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
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-blue-500 text-white w-full py-10 text-center">
          <h1 className="text-5xl font-bold mb-4">INTERACT</h1>
          <p className="text-2xl">Welcome to All in One Experience</p>
        </div>
        <h1 className="text-4xl font-bold mb-4 mt-8">Welcome to INTERACT</h1>
        <p className="text-lg mb-2">Our Vision: Empowering collaboration and innovation.</p>
        <p className="text-lg mb-2">Our Mission: To provide tools and spaces for effective teamwork.</p>
        <p className="text-lg mb-2">Our Values: Integrity, Collaboration, and Excellence.</p>
      </main>
    </div>
  );
};

export default Home;