import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

const Services: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <Header />
            <h1 className="text-3xl font-bold mb-4">Nos Services</h1>
            <ul className="list-disc list-inside">
                <li>Consultation en strategies digital</li>
                <li>Developments d'applications web</li>
                <li>Gestion de project agile</li>
                <li>Formation et accompagnement</li>
                <li>Support technique et maintenance</li>
            </ul>
        </div>
    );
};

export default Services;