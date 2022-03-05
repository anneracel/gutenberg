import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);
  const [state, setState] = useState ({
    startYear: 0,
    endYear: 0
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  

  //console.log(currentUser.id);

  // Load data from https://jsonplaceholder.typicode.com/albums?userId=${user.id}

  return (
    <div className="App">
      <div>
      <form>
        <label>
          Start Year:
          <input
            type="text"
            name="startYear"
            value={state.startYear}
            onChange={handleChange}
            />
        </label><p/>
        <label>
          End Year:
          <input
            type="text"
            name="endYear"
            value={state.endYear}
            onChange={handleChange}
            />
        </label>
      </form>
      </div>
    </div>
  );
}

export default App;