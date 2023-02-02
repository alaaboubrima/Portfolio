import React, { useState, useEffect } from 'react';
import Term from './components/Term.js'

export default function App() {
 
  const [placeholder, setPlaceholder] = React.useState('');

  const
    string = 'This is a beta version, feel free to give me some feedbacks - 2020',
    index = React.useRef(0);

  React.useEffect(() => {
    function tick() {
      setPlaceholder(prev => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length-1) {
      let addChar = setInterval(tick, 50);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  


  return (
    
      
  

    <div className='container'>
            
            <span className='span1'>
      {placeholder}< span className="hh">&#11035;&#11035;&#11035;</span>
    </span>

      <Term />
    </div>
  )
}


