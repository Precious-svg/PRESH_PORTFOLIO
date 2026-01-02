import { NextPage } from "next"
import { ProfileCard } from "./profileCard"
import { Button } from "@/component/ui/Button"
import { socialLink } from "@/data/headerData"
import Link from "next/link"
export const Home : NextPage = () => {
    return (
        
      <div className="flex flex-col justify-center items-center gap-5 w-[90%] px-2 pt-14 pb-7 bg-stone-950 mx-auto md:pt-20 lg:flex-row lg:justify-between lg:pt-24 lg:w-full lg:px-6">
          <div className="w-80 h-80 lg:self-start order-1 lg:order-2 lg:h-105 lg:w-105"><ProfileCard/></div>
            <article className="flex flex-col gap-3  order-2 lg:w-2/3 lg:order-1 lg:h-96">
               <h2 className="font-semibold text-xl md:text-3xl">Hello!</h2>
                <p className="font-semibold text-xl flex gap-2 md:text-3xl">I am <span className="font-medium text-orange-500">Precious Ogwezhi</span></p>
                <h4 className="font-semibold text-lg md:text-2xl">Software Developer</h4>
                <p className="tracking-wide md:text-xl">Passionate about building real-world web apps -- from intuitive frontend interfaces to functional backend logic.
                     Experienced with React, Vue/Nuxt, Tailwind CSS, and Node.js, with hands-on experience building dashbaords, APIs,
                     authentification, and full stack features.
                </p>

                <section className="w-full flex justify-between gap-2 items-center py-2 lg:flex-col lg:items-start lg:gap-5">
                    <Link href="/contact">
                        <Button size="md" variant="primary" className="rounded-full shadow-2xl/50 shadow-white animate-toggle md:text-xl md:font-semibold lg:px-8">
                            Let's talk
                        </Button>
                    </Link>
                    
                    <nav className="flex gap-6">
                     {socialLink.map((item) => {
                      const Icon = item.icon
                      return(
                       <Link key={item.title} href={item.href} target="blank" rel="noopener noreferrer">
                          <Icon className="text-2xl shadow-2xl shadow-orange-100 md:text-3xl"/>
                        </Link>
                      )})
                     }
                  </nav>
                </section>
          </article>

          {/* projects section */}
          
     </div>
    
    )
}