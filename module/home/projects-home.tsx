"use client"
import { NextPage } from "next"
import { useState } from "react"
import { Card } from "@/component/ui/Card"
import { projectsData } from "@/data/projectsData"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
export const ProjectsHome: NextPage = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
    const currentProject = projectsData[currentProjectIndex]

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const handlePrevious = () => {
        setCurrentProjectIndex((prevIndex) => currentProjectIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    return (
        <div className="w-full pb-4 relative">
            <h3 className="font-semibold text-2xl text-center py-2">My <span className="text-orange-500">Portfolio</span></h3>
            <section  className="w-full flex justify-center pt-2">
                <Card key={currentProject.id}
                 imgUrl={currentProject.imgUrl}
                 title={currentProject.title}
                 liveUrl={currentProject.liveUrl}
                 description={currentProject.description}/>
            </section>

             <div className="flex justify-between ">
                <div className="bg-white/10 flex justify-center items-center backdrop-blur-md w-9 h-11 rounded-3xl absolute top-1/3 left-2 mt-12" onClick={handlePrevious}>
                    <MdNavigateBefore size={35}/>
                </div>
                <div className="bg-white/10 flex justify-center items-center backdrop-blur-md w-9 h-11 rounded-3xl absolute top-1/3 right-2 mt-12" onClick={handleNext}>
                    <MdNavigateNext  size={35}/>
                </div>
             </div>
        </div>
        
    )
}