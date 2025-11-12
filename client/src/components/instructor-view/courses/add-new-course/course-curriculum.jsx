import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { courseCurriculumInitialFormData } from "@/config";
import { InstructorContext } from "@/context/instructor-context/InstructorContext";
import React, { useContext } from "react";

const CourseCurricullum = () => {
  const { courseCurricullumFormData, setCourseCurricullumFormData } =
    useContext(InstructorContext);

  function handleNewLecture() {
    setCourseCurricullumFormData([
      ...courseCurricullumFormData,
      {
        ...courseCurriculumInitialFormData[0],
      },
    ]);
  }


  function handleCourseTitleChange(event,currentIndex){
    let copyCourseCurriculumFormData = [...courseCurricullumFormData]
    copyCourseCurriculumFormData[currentIndex] = {
      ...copyCourseCurriculumFormData[currentIndex],
      title: event.target.value
    }

    setCourseCurricullumFormData(copyCourseCurriculumFormData)
  }

  console.log(courseCurricullumFormData);
  return (
    <Card>
      <CardHeader>
        <CardTitle> Create Course Curricullum</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={handleNewLecture}>Add Lectures</Button>
        <div className="mt-4 space-y-4">
          {courseCurricullumFormData.map((curriculumItem, index) => (
            <div className="border p-5 rounded-md">
              <div className="flex gap-5 items-center">
                <h3 className="font-semibold">Lecture {index + 1}</h3>
                <Input
                  name={`title ${index + 1}`}
                  placeholder="Enter lecture title"
                  className="max-w-96"
                  onChange={()=>handleCourseTitleChange(event,index)}
                />
                <div className="flex items-center space-x-2">
                  <Switch checked={false} id={`freePreview ${index + 1}`} />
                  <Label htmlForm={`freePreview ${index + 1}`}>
                    Free Preview
                  </Label>
                </div>
              </div>
              <Card className="mt-6">
                <div>
                  <h1 className="font-bold px-2 mb-2 text-gray-700">
                    Input video file here
                  </h1>
                  <Input type="file" accept="video/*" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCurricullum;
