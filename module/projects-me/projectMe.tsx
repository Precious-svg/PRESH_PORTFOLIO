"use client"
import { NextPage } from "next";
import { projectsData } from "@/data/projectsData";
import { Card } from "@/component/ui/Card";
import { usePathname } from "next/navigation";

export const ProjectMe: NextPage = () => {
    const pathName = usePathname()
    return (
        <div className={`w-full pb-7 flex flex-col gap-4 items-center justify-center px-2  bg-stone-950  ${pathName === "/projects" ? " pt-14" : "pt-3"}`}>
            <div className="flex flex-col items-center">
                <h4 className="font-semibold text-2xl pt-2 text-center">
                    My <span className="text-orange-500">Portfolio</span>
                </h4>
                <p className="text-left tracking-wide px-4">Below are some selected projects that I have worked on with amzaing, talented and intelligent.
                    Get in touch to turn your ideas into real problem-solving projects.
                </p>
            </div>

            <div className="w-[90%] flex flex-col items-center gap-4 mx-auto ">
                {projectsData.map((item) => (
                    <Card key={item.id} imgUrl={item.imgUrl} title={item.title} description={item.description} liveUrl={item.liveUrl}/>
                ))}
            </div>
        </div>
    )
}