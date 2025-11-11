import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";
import { useState,createContext } from "react";





export const InstructorContext = createContext(null)
export default function InstructorProvider({children}){

//   const [loading, setLoading] = useState(true);
  const [courseLandingFormData,setCourseLandingFormData] = useState(courseLandingInitialFormData)
  const [courseCurricullumFormData,setCourseCurricullumFormData] = useState(courseCurriculumInitialFormData) 
  
  return(
        <InstructorContext.Provider 
        value={{
            courseLandingFormData,
            setCourseLandingFormData,
            courseCurricullumFormData,
            setCourseCurricullumFormData
        }}>
            {children}
        </InstructorContext.Provider>
    )
}

