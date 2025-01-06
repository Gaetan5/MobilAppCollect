import React from 'react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">À propos de INTERACT</h1>
            <p className="mb-4">
                INTERACT est dédié à la création d'un environnement de travail collaboratif et innovant. 
                Notre vision est de favoriser la collaboration à distance et de permettre à chacun de contribuer 
                à des projets significatifs, peu importe où il se trouve.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Objectifs</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Faciliter la collaboration en ligne.</li>
                <li>Promouvoir l'innovation à travers des projets collaboratifs.</li>
                <li>Offrir des outils et des ressources pour le travail à distance.</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Valeurs</h2>
            <ul className="list-disc list-inside">
                <li>Collaboration</li>
                <li>Innovation</li>
                <li>Accessibilité</li>
                <li>Intégrité</li>
            </ul>
        </div>
    );
};

export default About;