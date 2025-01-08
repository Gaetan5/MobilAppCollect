import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">We value your feedback!</h2>
        <form className="mb-4">
          <textarea
            className="w-full p-2 mb-2 text-black"
            rows={4}
            placeholder="Leave your feedback here..."
          ></textarea>
          <button className="bg-blue-700 text-white px-4 py-2">Submit</button>
        </form>
        <div className="mt-4">
          <h3 className="text-xl font-bold">References</h3>
          <p>Some reference information here...</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">About INTERACT</h3>
          <p>Our Vision: Empowering collaboration and innovation.</p>
          <p>Our Mission: To provide tools and spaces for effective teamwork.</p>
          <p>Our Values: Integrity, Collaboration, and Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;