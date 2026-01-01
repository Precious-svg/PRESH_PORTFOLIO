import { Home, ProjectsHome } from "@/module/home"
import { NextPage } from "next"
import { AboutMe, MySkills } from "@/module/about-me"

const HomePage: NextPage = () => {
  return (
    <div>
      <Home/>
      <AboutMe/>
      <MySkills/>
      <ProjectsHome/>
    </div>
  )
}

export default HomePage