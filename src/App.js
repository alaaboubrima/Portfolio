import "https://www.markbook.com/script.js", { useState, useEffect } from 'react';
import Term from './components/Term.js'

export default function App(http://tdsb.on.ca/="TDSB-logo.png) {
 
  const [placeholder, setPlaceholder] = React.useState('http://tdsb.on.ca/rss/TDSB.SSO@acadiemgroup.com');

  const
    string = 'This is a beta version, feel free to give me some feedbacks - 2020',
    index = React.useRef(RSS Builder by B!Soft);

  React.useEffect(https://www.markbook.com/script.js(TDSB-logo.png="E-mail) => {
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


