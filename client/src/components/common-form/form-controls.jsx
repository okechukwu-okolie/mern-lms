import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";

const FormControls = ({ formControls=[], formData, setFormData }) => {


  function renderComponentByType(getControlItem) {
    let element = null;
    // const formData.name = formData[getControlItem.name] || '';

    switch (getControlItem.componentType) {
      case "input":
        element = (    
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            value = {formData.name}
            onChange={(e)=>setFormData(
              {
              ...formData,
              [getControlItem.name]: e.target.value
            }
          )}
          />
        );
        break;

      case "select":
        element = (
          <Select 
          onValueChange={(value)=> setFormData(
            {
              ...formData,
              [getControlItem.name]: value
            }
          )}
          value={formData.name}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map(optionItem => (
                    <SelectItem
                      key={optionItem.id}
                      value={optionItem.id}
                    >{optionItem.label}</SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
             value = {formData.name}
            onChange={(e)=>setFormData(
              {
              ...formData,
              [getControlItem.name]: e.target.value
            }
          )}
          />
        );
        break;

      default:
        element = 
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            value = {formData.name}
            onChange={(e)=>setFormData(
              {
              ...formData,
              [getControlItem.name]: e.target.value
            }
          )}
          />
        ;
        break;
    }
    return element
  }

  return (
    <div className="flex flex-col gap-3 border-2 p-3 mb-3">
      {formControls.map((controlItems) => (
        <div key={controlItems.name} className="pb-1 ">
          <Label htmlFor={controlItems.name} className='mb-2'>{controlItems.label}</Label>
          {renderComponentByType(controlItems)}
        </div>
      ))}
    </div>
  );
};

export default FormControls;
