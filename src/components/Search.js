import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('')

  // 2nd argument is either 1) nothing, 2) empty array, 3) array with something
  useEffect(() => {
    console.log('I run everytime term updates')
  }, [term])

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
          className="input"
          value={term}
          onChange={e => setTerm(e.target.value )} 
          />
        </div>
      </div>
    </div>
  )
};

export default Search;