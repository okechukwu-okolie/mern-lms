import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const FormControls = ({formControls = [], formData, setFormData}) => {

    function renderComponentByType(getControlItem){

      let element = null

      switch(getControlItem.componentType){
        case 'input':
          element = <Input
          id={getControlItem.name}
          name={getControlItem.name}
          placeholder={getControlItem.placeholder}
          type={getControlItem.type}
          />
          break;

           case 'select':
          element =<Select>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder={getControlItem.label}/>
            </SelectTrigger>
            <SelectContent>
             {
               getControlItem.options && getControlItem.options.length > 0 ? getControlItem.options.map(optionItem =><SelectItem key={optionItem.id} value={optionItem.id }></SelectItem>):null
             }
            </SelectContent>
          </Select>
          break;

           case 'textarea':
          element = <Textarea 
          id={getControlItem.name}
          name={getControlItem.name}
          placeholder={getControlItem.placeholder}
          />
          break;

           default:
          element = <Input
          id={getControlItem.name}
          name={getControlItem.name}
          placeholder={getControlItem.placeholder}
          />
          break;
      }
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
