import React from 'react';

const Services: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Nos Services</h1>
            <ul className="list-disc list-inside">
                <li>Consultation en stratégie digitale</li>
                <li>Développement d'applications web</li>
                <li>Gestion de projet agile</li>
                <li>Formation et accompagnement</li>
                <li>Support technique et maintenance</li>
            </ul>
        </div>
    );
};

export default Services;