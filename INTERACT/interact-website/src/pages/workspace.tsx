import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

const Workspace: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Header />
            <h1 className="text-4xl font-bold mb-4">Collaborative Online Workspace</h1>
            <p className="text-lg text-center max-w-2xl mb-8">
                Welcome to INTERACT's collaborative online workspace. Here, you can connect with team members, share ideas, and work together on projects in real-time. Our platform is designed to facilitate remote collaboration and enhance productivity.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Features:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Real-time collaboration tools</li>
                <li>Project management features</li>
                <li>Integrated communication channels</li>
                <li>File sharing and storage solutions</li>
            </ul>
            <p className="text-lg">
                Join us in creating a productive and engaging work environment, no matter where you are!
            </p>
        </div>
    );
};

export default Workspace;