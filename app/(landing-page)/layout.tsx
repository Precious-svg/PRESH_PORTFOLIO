import { NavBar } from "@/component/layout";

export default function RootLayout ({children}: {children: React.ReactNode}) {
    return (
      <>
       <NavBar/>
       <main>
          {children}
       </main>
      </>
    )
}