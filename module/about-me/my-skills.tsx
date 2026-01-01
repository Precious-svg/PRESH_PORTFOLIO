import { NextPage } from "next";
import { skillsPercent } from "@/data/skillsRange";

export const MySkills: NextPage = () => {
    return(
         <article className="w-full py-7">
            <h3 className="font-semibold text-2xl text-center">My <span className="text-orange-500">Skills</span></h3>

            <section className="w-[80%] flex flex-col gap-2 py-4 mx-auto" >
                {skillsPercent.map((item) => (
                    <div className="w-full" key={item.title}>
                        <h4 className="text-white tracking-wide py-2">{item.title}</h4>
                        <div className="bg-stone-100 w-72 rounded-xl h-3">
                            <div className={`bg-orange-600 rounded-xl h-full`} style={{width:`${item.percent}%`}}></div>
                        </div>
                    </div>
                ))}
            </section>
         </article>

    )
}