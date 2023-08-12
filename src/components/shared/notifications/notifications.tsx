"use client"

import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi'; // Import the icon

export default function Notifications() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        
        <div className="absolute top-0 left-0 inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-10 block p-2 text-white bg-transparent border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none hover:text-[#750FC5]"
            >
           <GiHamburgerMenu size={40} />

            </button>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="absolute left-0 z-20 w-64 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg sm:w-80 dark:bg-gray-800"
                >
                   
                    <a
                        href="#"
                        className="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline"
                    >
                        Ver todas as notificações
                    </a>
                </div>
            )}
        </div>
        </>
    );
}