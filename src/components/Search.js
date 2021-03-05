import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('programming')
  const [results, setResults] = useState([])

  // 2nd argument of useEffect is either 1) nothing, 2) empty array, 3) array with something
  useEffect(() => {
    const search = async () => {
        const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term
          }
        });
        setResults(data.query.search);
     };

     if (term && !results.length) {
       search();
     } else{
        const timeId = setTimeout(() => {
          if (term){
            search();
          }
        }, 500)
  
      //  clear previous timer and above sets new one
        return () => {
          clearTimeout(timeId)
        };
     }

     

  }, [term])

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
          style={{cursor: 'pointer'}}
          className="ui button"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
        </div>
      </div>
    )
  });

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
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
};

export default Search;