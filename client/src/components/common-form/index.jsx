import React from 'react'

const CommonForm = () => {
  return (
   <form onSubmit={handleSubmit}>
{/* render form controls here */}
<Button type='submit'>{buttonText || "Submit"}</Button>
   </form>
  )
}

export default CommonForm
