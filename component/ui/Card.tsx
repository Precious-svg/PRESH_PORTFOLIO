
"use client"
import Link from "next/link";
import Image from "next/image";
import { HtmlHTMLAttributes } from "react";

type CardProps = {
    imgUrl: string
    title: string,
    description: string,
    liveUrl: string
} & HtmlHTMLAttributes<HTMLDivElement>
export const Card = ({imgUrl, title, description, liveUrl, className, children, ...props} : CardProps) => {
    return(
        <div className={`h-96 w-80 bg-white/10 backdrop-blur-lg rounded-lg flex flex-col gap-2 hover:shadow-2xl/50 shadow-stone-50 mt-2 mb-4 hover:scale-105 transition transform`} {...props}>
            <div className="w-full h-1/2 rounded-t-lg">
                <Image src={imgUrl} alt={title} quality={100} width={100} height={100} className="w-full h-full rounded-t-lg"/>
            </div>
            <div className="flex flex-col gap-3 items-center py-2"> 
                <h4 className="text-orange-500 text-lg text-center">{title}</h4>
                <p className="text-center px-4 text-md md:text-lg">{description}</p>
                <Link href={liveUrl} target="blank" rel="noopener noreferer" className="text-blue-700 text-lg font-medium hover:text-blue-500 underline md:text-lg">
                  visit live link
                </Link>
            </div>
            {children}
        </div>

    )
}