
import React from 'react'

const toggle = (props) => {
  console.log(props.toggle);
  
      if(props.toggle){
        return <div className='toggle'>
          Toggle section
          </div>
      }
      return '';
}

export default toggle;
