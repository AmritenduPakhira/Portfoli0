import React from "react";


const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="lg:w-1/2 w-full bg-gray-200 flex flex-col justify-center items-start p-10 z-10">
        <h2 className="text-xl mb-2 text-gray-800">Hi, I am</h2>
        <h1 className="text-5xl lg:text-6xl font-bold text-black">Tomasz Gajda</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Front-end Developer / UI Designer
        </p>

        <div className="flex gap-4 mt-6">
          <button className="p-2 bg-white shadow hover:scale-105 transition">📧</button>
          <button className="p-2 bg-white shadow hover:scale-105 transition">🐱</button>
          <button className="p-2 bg-white shadow hover:scale-105 transition">💼</button>
        </div>
      </div>

      {/* Right Side with Diagonal */}
     <div className="lg:w-1/2 w-full relative bg-black flex justify-center items-center p-10">
        {/* Diagonal Shape */}
        <div className="hidden lg:block absolute left-0 top-0 h-full w-full bg-black transform -skew-x-12 origin-left z-0"></div>

        {/* Image in front */}
        <img
          src="./profile.JPG"
          alt="Profile"
          className="relative z-10 w-[260px] lg:w-[400px] object-contain"
        />
      </div>  
    </section>   
  );
};

export default Hero;
