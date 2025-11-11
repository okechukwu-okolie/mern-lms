import { Button  } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsTrigger,TabsList, TabsContent } from '@/components/ui/tabs'
import React from 'react'

const AddNewCoursePage = () => {
  return (
    <div className='container mx-auto p-4'>
    <div className="flex justify-between items-center">
      <h1 className='text-3xl font-extrabold mb-5'>Create a new Course</h1>
      <Button className='text-sm tracking-widest font-bold px-8'>SUBMIT</Button>
    </div>
    <Card>
      <CardContent>
        <div className='container mx-auto p-4'>
          <Tabs defaultValue='curriculum' className='space-y-4'>
            <TabsList>
              <TabsTrigger value='curriculum'>Curriculum</TabsTrigger>
              <TabsTrigger value='course-landing-page'>Course landing Page</TabsTrigger>
              <TabsTrigger value='settings'>Settings</TabsTrigger>
            </TabsList>
            <TabsContent value='curriculum'>

            </TabsContent>

            <TabsContent value='course-landing-page'>
              
            </TabsContent>

            <TabsContent value='settings'>
              
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default AddNewCoursePage
