export const signUpFormControls = [
    {
        name:'userName',
        label:'User Name',
        placeholder:'Enter your username',
        type:'text',
        componentType:'input'
    },
     {
        name:'userEmail',
        label:'User Email',
        placeholder:'Enter your email',
        type:'email',
        componentType:'input'
    },
     {
        name:'password',
        label:'User Password',
        placeholder:'Enter your password',
        type:'password',
        componentType:'input'
    },
]
      

export const signInFormControls = [
   
     {
        name:'userEmail',
        label:'User Email',
        placeholder:'Enter your email',
        type:'email',
        componentType:'input'
    },
     {
        name:'password',
        label:'User Password',
        placeholder:'Enter your password',
        type:'password',
        componentType:'input'
    },
]


export const initialSignInFormData = {
    userEmail: "",
    password: "",
}


export const initialSignUpFormData = {
    userName:'',
    userEmail: "",
    password: "",
}

export const authState =  {
    authenticate: false,
    user: null,
  }

 

  export const mySignUpFormControls = [
    {
        name:'userName',
        label:'User Name',
        placeholder:'Enter your username',
        type:'text',
        componentType:'input'
    },
     {
        name:'userEmail',
        label:'User Email',
        placeholder:'Enter your email',
        type:'email',
        componentType:'input'
    },
     {
        name:'password',
        label:'User Password',
        placeholder:'Enter your password',
        type:'password',
        componentType:'input'
    },
     {
        name:'textarea',
        label:'User Message',
        placeholder:'Enter your message here.',
        type:'textarea',
        componentType:'textarea'
    },
]

export const myInitialSignUpFormData = {
    userEmail: "",
    password: "",
    message: "",
    username:''
}