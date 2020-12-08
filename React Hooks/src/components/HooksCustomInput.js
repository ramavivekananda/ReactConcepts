import React, { useState } from 'react'

function HooksCustomInput(initialValue ='', type) {
   const [inputValue, setValue] = useState(initialValue);
   const [inputType, setInputType] = useState(type);

   const reset = ()=> {
       setValue(initialValue);
   }

   const bindValue = {
       value:inputValue,
       onChange : e => {
        setValue(e.target.value)
       },
       type:inputType
   }

   return [inputValue, bindValue, reset];

}

export default HooksCustomInput
