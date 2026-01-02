"use client"
import { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   size: "sm" | "md" | "lg",
   variant: "primary" | "outline",
   state?: "disabled"
}

export const Button = ({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonProps) => {

    const baseStyles = "inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
    const variantStyles = {
        primary: "bg-orange-600 text-white hover:bg-orange-500",
        outline: "bg-stone-950 text-white hover:bg-stone-900"
    }

    const sizeStyles = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-4 py-3 text-md"
    }
   return(
    <button className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}>
        {children}
    </button>
   )
}