import React from "react";

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center">
            <div className="text-center text-white px-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
                    Welcome to Simple Todo
                </h1>
                <p className="text-lg md:text-2xl mb-6 animate-fade-in-up">
                    Organize your tasks effortlessly with style and simplicity.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300 animate-bounce">
                    Get Started
                </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
    );
};

export default Hero;
