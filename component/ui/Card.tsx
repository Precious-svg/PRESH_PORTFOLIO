
"use client"
import Link from "next/link";
import Image from "next/image";
import { HtmlHTMLAttributes } from "react";
import { usePathname } from "next/navigation";

type CardProps = {
    imgUrl: string
    title: string,
    description: string,
    liveUrl: string
} & HtmlHTMLAttributes<HTMLDivElement>
export const Card = ({imgUrl, title, description, liveUrl, className, children, ...props} : CardProps) => {
    
    return(
        <div className={`h-96 w-[94%] bg-white/10 backdrop-blur-lg rounded-lg flex flex-col gap-2 hover:shadow-2xl/50 shadow-stone-50 mt-2 mb-4 hover:scale-105 transition transform
          md:pb-4 md:h-128 md:w-112.5 lg:w-[95%]`} {...props}>
            <div className="w-full h-1/2 rounded-t-lg md:h-80">
                <Image src={imgUrl} alt={title} quality={100} width={100} height={100} className="w-full h-full rounded-t-lg"/>
            </div>
            <div className="flex flex-col gap-3 items-center md:h-48 pb-2"> 
                <h4 className="text-orange-500 text-lg text-center">{title}</h4>
                <p className="text-center px-4 text-md md:text-xl">{description}</p>
                <Link href={liveUrl} target="blank" rel="noopener noreferer" className="text-blue-700 text-lg font-medium hover:text-blue-500 underline md:text-2xl md:font-semibold">
                  visit live link
                </Link>
            </div>
            {children}
        </div>

    )
}