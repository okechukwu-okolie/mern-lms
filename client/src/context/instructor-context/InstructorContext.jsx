import { useState } from "react";
import { createContext } from "react-router-dom"





export const InstructorContext = createContext(null)
export default function InstructorProvider({children}){

  const [loading, setLoading] = useState(true);
    return(
        <InstructorContext 
        value={{

        }}>
            {loading ? <h1 className='flex justify-center items-center min-h-screen text-5xl font-extrabold'>Loading.......</h1> : children}
        </InstructorContext>
    )
}