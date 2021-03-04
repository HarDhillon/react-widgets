import React, { useState } from 'react';

const Accordion = ({ items }) => {

  // first item is the state, second is the function we call to change it
  const [activeIndex, SetActiveIndex] = useState(null) 

  const onTitleClick = (index) => {
    SetActiveIndex(index)
  };
 
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''

    return (
      // rather than div we return a react fragment to get rid of an extra div (for semantic ui styling)
      <React.Fragment key={item.title}>
        <div
        className={`title ${active}`}
        // arrow function so that it does not run on render, but ONLY on click
        onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return <div className="ui styled accordion">
    {renderedItems}
  </div>
}

export default Accordion;