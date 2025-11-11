import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { InstructorContext } from '@/context/instructor-context/InstructorContext'
import React, { useContext } from 'react'

const CourseCurricullum = () => {
  const {courseCurricullumFormData,setCourseCurricullumFormData} = useContext(InstructorContext)
  return <Card>
    <CardHeader>
      <CardTitle> Create Course Curricullum</CardTitle>
    </CardHeader>
    <CardContent>
      <Button>Add Lectures</Button>
    </CardContent>
  </Card>
}

export default CourseCurricullum
