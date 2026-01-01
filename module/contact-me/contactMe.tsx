"use client"
import { NextPage } from "next";
import { Button } from "@/component/ui/Button";
import { useForm } from "react-hook-form";

type ContactFormProps = {
    fullName: "string",
    email: "string",
    message: "string"
}
   
export const ContactMe: NextPage = () => {
   const {register, handleSubmit, formState: {errors},} = useForm<ContactFormProps>()
   const onSubmit = (data: ContactFormProps) => {
       
   }
    return (
        <div className="bg-stone-950 pt-20 pb-7 px-2 w-full">
            
            <section className="backdrop-blur-md bg-white/10 w-[95%] mx-auto rounded-2xl shadow-2xl/50 shadow-orange-500 p-2 hover:scale-105 transition transform">
                <div>
                    <h3 className="text-center text-2xl font-semibold py-2">Contact <span className="text-orange-500">Me</span></h3>
                    <p className="text-center font-medium text-md p-2 tracking-wide ">Let's make your project your reality. Feel free to contact me at anytime.</p>
                </div>
                <form className="w-full flex flex-col gap-4 items-center justify-center py-4">
                    <div className="w-full flex flex-col items-center ">
                        <input type="text" {...register("fullName", {required: "Your full name is required!"})}
                         placeholder="Enter your Full Name" className="rounded-xl bg-stone-100 px-6 w-72 py-2 border-2 border-orange-600 mx-auto text-black"
                        />
                        {errors.fullName && (<p className="text-md text-red-500 font-medium pt-2 text-left">{errors.fullName.message}</p>)}
                    </div>
                    <div className="w-full flex flex-col items-center ">
                        <input type="email" {...register("email", {required: "Your email address is required!", pattern:{
                            value: /^\S+@\S+$/i,
                            message: "Invalid email",
                        }})}
                         placeholder="Enter your email" className="rounded-xl bg-stone-100 px-6 w-72 py-2 border-2 border-orange-600 mx-auto text-black"
                        />
                        {errors.email && (<p className="text-md text-red-500 font-medium pt-2 text-left">{errors.email.message}</p>)}
                    </div>
                    <div className="w-full flex flex-col items-center ">
                        <textarea {...register("message", {required: "Please enter your message!"})} placeholder="Enter your message"
                         className="rounded-xl bg-stone-100 px-6 w-72 py-4 border-2 border-orange-600 mx-auto text-black h-56"
                        >

                        </textarea>
                        {errors.message && (<p className="text-md text-red-500 font-medium pt-2 text-left">{errors.message.message}</p>)}
                    </div>
                </form>
                <div className="w-72 mx-auto">
                    <Button type="submit" size="md" variant="primary" className="rounded-md mb-4">Send Message</Button>
                </div>
            </section>
        </div>
    )
}