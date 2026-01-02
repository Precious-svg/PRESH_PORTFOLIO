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
        setCurrentProjectIndex((prevIndex) => currentProjectIndex === 0 ? projectsData.length - 1 : currentProjectIndex - 1)
    }
  //  for large screens

  const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 1024

 const visibleCount = isLargeScreen ? 2 : 1

  const visibleProjects = Array.from({ length: visibleCount }, (_, i) => {
      return projectsData[(currentProjectIndex + i) % projectsData.length]
   })

    return (
        <div className="w-full pb-4 relative md:w-[90%] mx-auto lg:w-full">
            <h3 className="font-semibold text-2xl text-center py-2 md:text-3xl">My <span className="text-orange-500">Portfolio</span></h3>
            <section  className="w-[80%] flex justify-center pt-2 mx-auto lg:gap-8 xl:gap-12 lg:w-[78%]">
                {visibleProjects.map((project) => (
                     <Card key={project.id}
                     imgUrl={project.imgUrl}
                     title={project.title}
                     liveUrl={project.liveUrl}
                     description={project.description}/>
                ))}
               
            </section>

             <div className="flex justify-between ">
                <div className="bg-white/10 flex justify-center items-center backdrop-blur-md w-9 h-11 rounded-3xl absolute top-1/3 left-5 mt-14 md:left-30" onClick={handlePrevious}>
                    <MdNavigateBefore size={40}/>
                </div>
                <div className="bg-white/10 flex justify-center items-center backdrop-blur-md w-9 h-11 rounded-3xl absolute top-1/3 right-5 mt-14 md:right-30" onClick={handleNext}>
                    <MdNavigateNext  size={35}/>
                </div>
             </div>
        </div>
        
    )
}