import React, { useState } from 'react';
import { FaDiscord, FaSteam, FaFacebook } from 'react-icons/fa';
import { SiFacebook } from "react-icons/si";
import { FaTicketAlt } from 'react-icons/fa';
import avatarImage from '../assets/avatar.png';
import '../index.css'
import '../App.css'

const StudentFeedback = () => {
    // State for the feedback input
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback submitted:", feedback);

        setFeedback(''); // Clear the input after submission
    };

    return (
        // Assurez-vous que le conteneur principal a 'relative' si les icônes sont 'absolute'
        <div className="w-full p-5 text-center flex flex-col items-center min-h-screen relative">
            {/* Student's Reviews Section */}
            <section className="p-10 mb-2">
                <h2 className="font-pixel text-accent-yellow text-2xl md:text-3xl tracking-wide mb-10">
                    STUDENT'S REVIEWS
                </h2>
                <div className="flex flex-col items-center gap-5">
                    <img
                        src={avatarImage} // Replace with actual avatar path if needed
                        alt="John Doe's Avatar"
                        className="w-24 h-24 rounded-full border-4 border-accent-yellow shadow-yellow-glow object-cover animate-pulse-custom"
                    />
                    <h3 className="text-xl text-accent-yellow uppercase font-bold">
                        JOHN DOE
                    </h3>
                    <p className="text-base leading-relaxed max-w-2xl text-text-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat.
                    </p>
                    <div className="flex gap-2.5 mt-5">
                        <span className="w-2.5 h-2.5 bg-gray-600 rounded-full"></span>
                        <span className="w-2.5 h-2.5 bg-accent-yellow rounded-full shadow-yellow-glow"></span>
                        <span className="w-2.5 h-2.5 bg-gray-600 rounded-full"></span>
                    </div>
                </div>
            </section>

            {/* Feedback and Suggestions Section */}
            <section
                className="p-16 mt-[-20px]">

                <div className=" "></div>

                <h2 className="font-pixel text-accent-yellow text-2xl md:text-3xl tracking-wide mb-8 relative z-20">
                    FEEDBACK AND SUGGESTIONS
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 max-w-2xl mx-auto relative z-20">
                    <div className="relative w-full flex flex-col md:flex-row items-center bg-space-dark border-2 border-accent-yellow rounded-full p-1 shadow-yellow-glow">
                        <input
                            type="text"
                            placeholder="YOUR OPINION AND SUGGESTIONS MATTER"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="flex-grow bg-transparent border-none outline-none text-white text-base py-2.5 px-5 rounded-full placeholder-gray-400 md:mb-0 mb-2 w-full md:w-auto"
                        />
                        <button
                            type="submit"
                            className="bg-accent-yellow text-space-dark font-bold py-2.5 px-6 rounded-full text-base uppercase tracking-wider cursor-pointer transition-all duration-300 hover:bg-yellow-400 hover:-translate-y-0.5 shadow-yellow-button-glow w-full md:w-auto"
                        >
                            SEND
                        </button>
                    </div>
                    <p className=" text-sm text-text-light tracking-wide">
                        YOUR OPINION AND SUGGESTIONS MATTER
                    </p>
                </form>
            </section>
            
            <div className="
              absolute bottom-8 right-8 /* Positionne le div en bas à droite */
              flex space-x-4 /* Organise les icônes horizontalement avec un espacement */
            ">
                {/* Discord Icon */}
                <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"
                    className="
                         /* Couleur de fond foncée pour l'icône */
                        text-white /* Couleur de l'icône */
                        border border-accent-yellow /* Bordure bleu clair comme sur l'image */
                        rounded-full /* Forme circulaire */
                        w-14 h-14/* Taille de l'icône */
                        flex items-center justify-center /* Centrer l'icône */
                        hover:bg-[#22D3EE] /* Changement de couleur au survol */
                        hover:text-gray-800 /* Changer la couleur du texte/icône au survol */
                        transition-colors duration-300 ease-in-out /* Transition fluide */
                        shadow-lg /* Ombre subtile */
                    "
                >
                    <FaDiscord className="w-8 h-8" /> {/* Taille de l'icône */}
                </a>

                {/*  */}
                <a href="#" target="_blank" rel="noopener noreferrer"
                    className="
                        
                        text-white
                        border border-accent-yellow
                        rounded-full
                        w-14 h-14
                        flex items-center justify-center
                        hover:bg-[#22D3EE]
                        hover:text-gray-800
                        transition-colors duration-300 ease-in-out
                        shadow-lg
                    "
                >
                    <FaTicketAlt className="w-5 h-5" />
                </a>

                {/* Facebook Icon */}
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
                    className="
                        
                        text-white
                        border border-accent-yellow
                        rounded-full
                        w-14 h-14
                        flex items-center justify-center
                        hover:bg-[#22D3EE]
                        hover:text-gray-800
                        transition-colors duration-300 ease-in-out
                        shadow-lg
                    "
                >
                    <SiFacebook  className="w-8 h-8" />
                </a>
            </div>
        </div>
    );
};

export default StudentFeedback;