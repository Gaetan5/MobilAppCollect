import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Projects: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <Header />
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <p className="mb-4">Here are some of the projects undertaken by INTERACT:</p>
            <ul className="list-disc pl-5">
                <li>Project 1: Description of project 1.</li>
                <li>Project 2: Description of project 2.</li>
                <li>Project 3: Description of project 3.</li>
                <li>Project 4: Description of project 4.</li>
            </ul>
            <Footer />
        </div>
    );
};

export default Projects;