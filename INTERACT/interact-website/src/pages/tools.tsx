import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

const Tools: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <Header />
            <h1 className="text-3xl font-bold mb-4">Tools and Applications</h1>
            <p className="mb-4">
                At INTERACT, we utilize a variety of tools and applications to enhance our productivity and collaboration. Below is a list of some of the key tools we use:
            </p>
            <ul className="list-disc pl-5">
                <li>Tool 1: Description of Tool 1</li>
                <li>Tool 2: Description of Tool 2</li>
                <li>Tool 3: Description of Tool 3</li>
                <li>Tool 4: Description of Tool 4</li>
                <li>Tool 5: Description of Tool 5</li>
            </ul>
        </div>
    );
};

export default Tools;