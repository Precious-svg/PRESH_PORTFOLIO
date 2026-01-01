import { NextPage } from "next"
import { ProfileCard } from "./profileCard"
import { Button } from "@/component/ui/Button"
import { socialLink } from "@/data/headerData"
import Link from "next/link"
export const Home : NextPage = () => {
    return (
        
      <div className="flex flex-col justify-center items-center gap-5 w-[90%] px-2 pt-14 pb-7 bg-stone-950 mx-auto">
          <div className="w-80 h-80"><ProfileCard/></div>
            <article className="flex flex-col gap-3">
               <h2 className="font-semibold text-xl">Hello!</h2>
                <p className="font-semibold text-xl flex gap-2">I am <span className="font-medium text-orange-500">Precious Ogwezhi</span></p>
                <h4 className="font-semibold text-lg">Software Developer</h4>
                <p className="tracking-wide">Passionate about building real-world web apps -- from intuitive frontend interfaces to functional backend logic.
                     Experienced with React, Vue/Nuxt, Tailwind CSS, and Node.js, with hands-on experience building dashbaords, APIs,
                     authentification, and full stack features.
                </p>

                <section className="w-full flex justify-between gap-2 items-center py-2">
                    <Link href="/contact">
                        <Button size="md" variant="primary" className="rounded-full shadow-2xl/50 shadow-white animate-toggle">
                            Let's talk
                        </Button>
                    </Link>
                    
                    <nav className="flex gap-6">
                     {socialLink.map((item) => {
                      const Icon = item.icon
                      return(
                       <Link key={item.title} href={item.href} target="blank" rel="noopener noreferrer">
                          <Icon className="text-2xl shadow-2xl shadow-orange-100"/>
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