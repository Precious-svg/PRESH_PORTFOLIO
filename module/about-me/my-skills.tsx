import { NextPage } from "next";
import { skillsPercent } from "@/data/skillsRange";

export const MySkills: NextPage = () => {
    return(
         <article className="w-full py-7">
            <h3 className="font-semibold text-2xl text-center md:text-3xl">My <span className="text-orange-500">Skills</span></h3>
            <section className="w-[80%] flex flex-col items-center gap-2 py-4 mx-auto md:gap-4" >
                {skillsPercent.map((item) => (
                    <div className="w-72 flex flex-col items-center md:w-[90%]" key={item.title}>
                        <h4 className="text-white tracking-wide py-2 self-start md:text-xl">{item.title}</h4>
                        <div className="bg-stone-100 w-full rounded-xl h-3 md:h-5">
                            <div className={`bg-orange-600 rounded-xl h-full`} style={{width:`${item.percent}%`}}></div>
                        </div>
                    </div>
                ))}
            </section>
         </article>

    )
}