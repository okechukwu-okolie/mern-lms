import React from 'react'

const RequiredForm = ({mySignUpFormControls = [],signUp,setSignUp}) => {

  const formStructure =(formArray)=>{

    let element = null
    // switch (formArray.componentType) {
    //   case "input":
    //     element = (
    //       <input
    //         id={formArray.name}
    //         name={formArray.name}
    //         placeholder={formArray.placeholder}
    //         type={formArray.type}
    //         value={signUp.name}
    //         onChange={(e) => setSignUp({ ...signUp, name: e.target.value })}
    //       />
    //     );
    //     break;

    //     case "input":
    //     element = (
    //       <input
    //         id={formArray.name}
    //         name={formArray.name}
    //         placeholder={formArray.placeholder}
    //         type={formArray.type}
    //         value={signUp.password}
    //         onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
    //       />
    //     );
    //     break;

    //   case "textarea":
    //     element = (
    //       <textarea
    //         id={formArray.name}
    //         name={formArray.name}
    //         placeholder={formArray.placeholder}
    //         value={signUp.textarea}
    //         onChange={(e) => setSignUp({ ...signUp, textarea: e.target.value })}
    //       />
    //     );
    //     break;

    //   // case "textarea":
    //   //   element = (
    //   //     <textarea
    //   //       id={formArray.name}
    //   //       name={formArray.name}
    //   //       placeholder={formArray.placeholder}
    //   //       value={signUp.textarea}
    //   //       onChange={(e) => setSignUp({ ...signUp, textarea: e.target.value })}
    //   //     />
    //   //   );
    //   //   break;
    
    //   default:
    //     element = (
    //       <input
    //         id={formArray.name}
    //         name={formArray.name}
    //         placeholder={formArray.placeholder}
    //         type={formArray.type}
    //         value={signUp.name}
    //         onChange={(e) => setSignUp({ ...signUp, name: e.target.value })}
    //       />
    //     );
    //     break;
    // }

    // return element
      switch (formArray.componentType) {
      case "input":
        element = (    
          <input
            id={formArray.name}
            name={formArray.name}
            placeholder={formArray.placeholder}
            type={formArray.type}
            value = {signUp.name}
            onChange={(e)=>setSignUp(
              {
              ...signUp,
              [formArray.name]: e.target.value
            }
          )}
          />
        );
        break;

      // case "select":
        element = (
          <select 
          onValueChange={(value)=> setSignUp(
            {
              ...signUp,
              [formArray.name]: value
            }
          )}
          value={signUp.name}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={formArray.label} />
            </SelectTrigger>
            <SelectContent>
              {formArray.options && formArray.options.length > 0
                ? formArray.options.map(optionItem => (
                    <SelectItem
                      key={optionItem.id}
                      value={optionItem.id}
                    >{optionItem.label}</SelectItem>
                  ))
                : null}
            </SelectContent>
          </select>
        );
        break;

      case "textarea":
        element = (
          <textarea
            id={formArray.name}
            name={formArray.name}
            placeholder={formArray.placeholder}
             value = {signUp.name}
            onChange={(e)=>setSignUp(
              {
              ...signUp,
              [formArray.name]: e.target.value
            }
          )}
          />
        );
        break;

      default:
        element = 
          <Input
            id={formArray.name}
            name={formArray.name}
            placeholder={formArray.placeholder}
            type={formArray.type}
            value = {signUp.name}
            onChange={(e)=>setSignUp(
              {
              ...signUp,
              [formArray.name]: e.target.value
            }
          )}
          />
        ;
        break;
    }
    return element
  }
  
  
  
  return (
    <div >
      {mySignUpFormControls.map((formArray)=>(
        <div key={formArray.name} className="flex flex-col gap-2 m-5">
          <label htmlFor={formArray.name} className="font-bold">{formArray.label}</label>
          {formStructure(formArray)}
        </div>
      ))
    }
     
    </div>
  )
}

export default RequiredForm
