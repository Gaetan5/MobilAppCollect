import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 mt-8">Welcome to INTERACT</h1>
        <p className="text-lg mb-2">Our Vision: Empowering collaboration and innovation.</p>
        <p className="text-lg mb-2">Our Mission: To provide tools and spaces for effective teamwork.</p>
        <p className="text-lg mb-2">Our Values: Integrity, Collaboration, and Excellence.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
