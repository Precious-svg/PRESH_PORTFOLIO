"use client"
import { NextPage } from "next"
import Link from "next/link"
import { headerData, socialLink } from "@data/headerData"
import { useState } from "react"
import { FaBars } from "react-icons/fa6"
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation"

export const NavBar: NextPage = () => {
const [isOpen, setIsOpen] = useState<boolean>(false)
const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 1024

const pathName = usePathname();
  return (
    <div className={`fixed top-0 left-0 right-0 w-full h-14 flex justify-between items-center gap-2 px-4 bg-stone-950/50 shadow-2xs z-40 md:h-16 lg:px-6 lg:justify-start lg:gap-10`}>
        <h2 className="font-semibold text-2xl text-orange-600 md:text-4xl">PRECIOUS</h2>

        
         { 
            isLargeScreen ? (
              <div className="flex gap-10">
                  {headerData.map((item) => (
                   <Link key={item.title} href={`/${item.href}`}>
                     <p className={`text-xl font-medium ${pathName === `/${item.href}` ? "text-orange-700 underline" : "text-white"}`}>
                        {item.title}
                    </p>
                  </Link>
                 ))}
               </div>
            ) : isOpen ? (
             <nav className={`fixed top-0 left-0 right-0 bottom-0 h-screen w-full bg-orange-400 flex flex-col items-center justify-center gap-8 z-40
               transition-all duration-300 ease-out md:gap-14 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
               <div className="flex flex-col gap-8">
                  {headerData.map((item) => (
                   <Link key={item.title} href={`/${item.href}`} onClick={() => setIsOpen(false)}>
                     <p className={`text-4xl font-medium text-center md:text-6xl ${pathName === `/${item.href}`? "text-orange-700" : "text-white"}`}>
                        {item.title}
                    </p>
                  </Link>
                 ))}
               </div>
               <IoClose onClick={() => setIsOpen(false)} className="text-4xl border-2 md:text-7xl border-white rounded-full"/>

               <div className="flex gap-4 md:gap-6">
                  {socialLink.map((item) => {
                    const Icon = item.icon
                    return(
                      <Link key={item.title} href={item.href} target="blank" rel="noopener noreferrer">
                          <Icon className="text-3xl md:text-4xl"/>
                        </Link>
                     )})
                   }
               </div>
            </nav>
            ) : (<FaBars className="text-2xl md:text-4xl" onClick={() => setIsOpen(true)}/>)

            
          }
       
            

    </div>
 )
   
}