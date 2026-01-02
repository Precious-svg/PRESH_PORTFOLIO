"use client"
import { NextPage } from "next";
import { projectsData } from "@/data/projectsData";
import { Card } from "@/component/ui/Card";
import { usePathname } from "next/navigation";

export const ProjectMe: NextPage = () => {
    const pathName = usePathname()
    return (
        <div className={`w-full pb-7 flex flex-col gap-4 mx-auto items-center justify-center px-2  bg-stone-950  ${pathName === "/projects" ? " pt-14" : "pt-3"}`}>
            <div className="flex flex-col items-center md:pt-4">
                <h4 className="font-semibold text-2xl pt-2 text-center md:text-3xl">
                    My <span className="text-orange-500">Portfolio</span>
                </h4>
                <p className="text-left tracking-wide px-4 md:text-xl md:py-2">Below are some selected projects that I have worked on with amazing, talented and intelligent.
                    Get in touch to turn your ideas into real problem-solving projects.
                </p>
            </div>

            <div className="w-[90%] flex flex-col items-center gap-4 mx-auto lg:w-[95%] lg:grid lg:grid-cols-2 lg:gap-1 lg:justify-items-center">
                {projectsData.map((item) => (
                    <Card key={item.id} imgUrl={item.imgUrl} title={item.title} description={item.description} liveUrl={item.liveUrl}/>
                ))}
            </div>
        </div>
    )
}