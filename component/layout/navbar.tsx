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
const pathName = usePathname();
  return (
    <div className={`fixed top-0 left-0 right-0 w-full h-14 flex justify-between items-center gap-2 px-4 bg-stone-950/50 shadow-2xs z-40`}>
        <h2 className="font-semibold text-2xl text-orange-600">PRECIOUS</h2>

    
        {
            isOpen ? (
             <nav className={`fixed top-0 left-0 right-0 bottom-0 h-screen w-full bg-orange-400 flex flex-col items-center justify-center gap-8 z-40
               transition-all duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
               <div className="flex flex-col gap-8">
                  {headerData.map((item) => (
                   <Link key={item.title} href={`/${item.href}`} onClick={() => setIsOpen(false)}>
                     <p className={`text-4xl font-semiboldtext-center ${pathName === `/${item.title}`? "text-orange-800" : "text-white"}`}>
                        {item.title}
                    </p>
                  </Link>
                 ))}
               </div>
               <IoClose onClick={() => setIsOpen(false)} className="text-4xl border-2  border-white rounded-full"/>

               <div className="flex gap-4 ">
                  {socialLink.map((item) => {
                    const Icon = item.icon
                    return(
                      <Link key={item.title} href={item.href} target="blank" rel="noopener noreferrer">
                          <Icon className="text-3xl"/>
                        </Link>
                     )})
                   }
               </div>
            </nav>
            ) : (<FaBars className="text-2xl" onClick={() => setIsOpen(true)}/>)
            
        }
          
            

    </div>
 )
   
}