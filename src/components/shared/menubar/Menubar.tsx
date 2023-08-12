'use client'


import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



import { UserButton } from "@clerk/nextjs";
import Image from 'next/image';

import { useEffect, useState } from 'react';

import { FaDiceD20, FaUserFriends, FaShoppingCart } from 'react-icons/fa';
import { IoNotifications, IoSettings } from 'react-icons/io5'
import { useRouter, usePathname } from "next/navigation";


import logo from '../../../../public/assets/images/apple-touch-icon.png';

export default function Menubar() {

    const [selectedIcon, setSelectedIcon] = useState(null);
    const [contactOpen, setContactOpen] = useState(false);
    const [dot, setDotColor] = useState("");
    const [status, setStatus] = useState("Online"); // Estado para rastrear o status selecionado

    const handleIconClick = (iconName: any) => {
        if (iconName === selectedIcon && iconName === 'icon1') {

            setSelectedIcon(null);
            setContactOpen(false);
        } else {
            setSelectedIcon(iconName);
            setContactOpen(iconName === 'icon1');
        }
    };
    const location = usePathname();
    const isActive = (path: string) => {
        return location === path
            ? "text-white"
            : "text-gray-500";
    };

    const getDotColor = () => {
        switch (dot) {
          case "Online":
            return "text-green-500 hover:text-green-300";
          case "Ausente":
            return "text-yellow-500 hover:text-yellow-300";
          case "Não-Pertubar":
            return "text-red-500 hover:text-red-400";
          default:
            return "text-emerald-500"; // Cor padrão, caso o status não corresponda a nenhum caso acima
        }
      };
      
    return (
        <>
            <main>
                <aside className="flex fixed ">
                    <nav className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-zinc-900 dark:bg-gray-900 dark:border-gray-700">
                        <a href="#">
                            <Image className="w-12 h-auto" src={logo} alt="" />
                        </a>
                        <a href="onboarding" onClick={() => handleIconClick('icon2')} className={`p-1.5 hover:text-white focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 ${selectedIcon === 'icon2' ? 'text-white' : 'text-gray-500'} ${isActive("/onboarding")}`}>
                            <FaDiceD20 className='text-heading1-bold'></FaDiceD20>
                        </a>

                        <span onClick={() => handleIconClick('icon1')} className={`p-1.5 cursor-pointer hover:text-white  focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 ${selectedIcon === 'icon1' ? 'text-white' : 'text-gray-500'}`}>
                            <FaUserFriends className='text-heading1-bold'></FaUserFriends>
                        </span>

                        <a href="store" onClick={() => handleIconClick('icon3')} className={`p-1.5 hover:text-white focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 ${selectedIcon === 'icon3' ? 'text-white' : 'text-gray-500'} ${isActive("/pt-br/store")}`}>
                            <FaShoppingCart className='text-heading1-bold'></FaShoppingCart>
                        </a>
                        <span onClick={() => handleIconClick('icon4')} className={`p-1.5 cursor-pointer hover:text-white focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 ${selectedIcon === 'icon4' ? 'text-white' : 'text-gray-500'}`}>
                            <IoNotifications className='text-heading1-bold'></IoNotifications>
                        </span>
                        <div className="  relative top-[25rem] ">

                            <UserButton appearance={
                                {
                                    elements: {
                                        avatarBox: "w-[3rem] h-[3rem] ",
                                    },

                                }
                            }
                                afterSignOutUrl="/" />
                            <DropdownMenu >
                                <DropdownMenuTrigger asChild>
                                    <span className={`z-20 relative bottom-16 left-7 text-heading1-bold2 w-4 h-4 cursor-pointer  ${getDotColor()}`}>.</span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 bg-[#1D1D1D]">
                                <DropdownMenuLabel className="text-white">Defina seu status</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="text-green-500 cursor-pointer hover:bg-zinc-800" onClick={() => setDotColor("Online")}>
                                        Online
                                        <DropdownMenuShortcut className="text-green-500">.</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-yellow-500 cursor-pointer  hover:bg-zinc-800" onClick={() => setDotColor("Ausente")}>
                                        Ausente
                                        <DropdownMenuShortcut>.</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-500 cursor-pointer  hover:bg-zinc-800" onClick={() => setDotColor("Não-Pertubar")}>
                                        Não pertubar
                                        <DropdownMenuShortcut>.</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </nav>
                </aside>
            </main>
        </>
    )
}