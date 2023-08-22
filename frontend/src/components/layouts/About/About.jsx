import React from 'react';

const About = () => {
  return (
    
    <div className="flex justify-center items-center bg-gray-100">
      <div className="max-w-6xl p-6 pb-0"> {/* Reduced bottom padding */}
        <h1 className="text-3xl font-semibold mb-4">Hey, we're Developers! 😊</h1>
        <p className="text-gray-600 mb-6">
          We are a team of three fullstack developers currently pursuing engineering degrees. Our passion lies in the world of development and open source. We specialize in building web applications using various technologies including MongoDB, React, Node.js, Express, Tailwind CSS, and Chakra UI.
        </p>
        <p className="text-gray-600">
          We approach each project with enthusiasm and dedication, aiming to create products that our clients will use and love. Our remote team is spread across the globe, united by our commitment to delivering high-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
