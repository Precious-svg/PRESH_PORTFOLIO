
import Image from "next/image"
import ProfilePic from "@public/assets/images/profile-pic.jpeg"

export const ProfileCard = () => {
  return (
    
     <div className="w-full h-full rounded-full  shadow-2xl/50 shadow-orange-200 border-2 border-orange-700 flex justify-center items-center bg-stone-100">
        <Image src={ProfilePic} alt="Profile Picture" quality={100} className="w-[90%] h-[90%] rounded-full shadow-2xs shadow-stone-50"/>
     </div>
    
  )
}