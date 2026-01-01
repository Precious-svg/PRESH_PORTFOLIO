import "./globals.css"
import { Metadata } from "next"
import { PropsWithChildren } from "react"

export const metaData: Metadata = {
    title: {
        template: "%s - Software Developer",
        default: "Welcome - Precious"
    },

    description: "Precious is a Software developer that builds high quality, scalable and accessible website and apps."
}

export default function RootLayout ({children}: PropsWithChildren){
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}