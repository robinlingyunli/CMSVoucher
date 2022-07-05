import React, { useState } from 'react'
import "./app.css"
import {accessCode} from "./accesscode"


function App() {
  const [query, setQuery] = useState("");
  return (
    <div className='app'>
      <input type="text" placeholder='Search...' className="search" onChange={(e)=>setQuery(e.target.value)} />

      <table>
        <tr>
          <th>Name</th>
          <th>Expire Date</th>
        </tr>
        {accessCode.filter(code=>code.codeName.toLowerCase().includes(query)
          ).map((code) => (
          <tr>
            <th>
              {code.codeName}
            </th>
            <th>
              {code.expire}
            </th>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default App;
