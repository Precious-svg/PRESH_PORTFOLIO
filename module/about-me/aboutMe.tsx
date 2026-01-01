
"use client"
import { NextPage } from "next";
import { ProfileCard } from "../home";
import { Button } from "@/component/ui/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const AboutMe: NextPage = () => {
    const pathName = usePathname()
  return (
        <article className={`w-full pb-7 flex flex-col gap-4 items-center px-2 ${pathName === "/about" ? " bg-stone-950  pt-14" : "pt-3  bg-stone-900/50 "}`}>
            
            <h4 className="font-semibold text-2xl pt-2">About <span className="text-orange-500">Me</span></h4>
            <div className="w-36 h-36"><ProfileCard/></div>
              {
                pathName === "/about" && (
                    <Link href="/contact">
                     <Button size="sm" variant="primary" className="rounded-xl  py-1 w-36 text-lg">Hire Me</Button>
                    </Link>
                )
              }
            <section className="px-2 flex flex-col gap-4">
                
                {pathName === "/about" && (
                    <p className="text-center tracking-wide">
                      I am a Software Developer who is proficient in React/Next, Vue/Nuxt, Tailwind CSS and Node Js. I have also used React Native
                     to build a simple but Functional Application. I am very passionate about building and creating clean, accessible  and user-friendly 
                     interfaces, engaging in activities that promote growth and contribute meaningfully to the field of Software Development .
                  </p>
                )}
                <p className="text-center tracking-wide">
                    My hobbies are reading, travelling and exporing new places. Currently, my favorite books series are "A Court of Thorns and Roses" and
                    "Stay With Me".
                </p>
                <p className="text-center tracking-wide"> 
                    I love a good challenge, so contact me for freelance, remote and full-time roles. I am open to working in an environment 
                    that fosters growth and critical thinking. 
                </p>
            </section>
            {
                pathName !== "/about" && (
                    <Link href="/contact">
                      <Button size="sm" variant="primary" className={`rounded-xl  py-1 w-36 text-lg `}>Hire Me</Button>
                    </Link>
                )
            }
            
        </article>
  )
}