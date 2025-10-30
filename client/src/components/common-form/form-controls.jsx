import React from 'react'
import { Label } from '../ui/label'

const FormControls = ({formControls = [], formData, setFormData}) => {

    function renderComponentByType(){

    }

  return (
    <div className='flex flex-col gap-3'>
      {
        formControls.map(controlItems=> 
            <div key={controlItems.name}>
                <Label htmlFor ={controlItems.name}>{controlItems.label}</Label>
            </div>
        )
      }
    </div>
  )
}

export default FormControls
