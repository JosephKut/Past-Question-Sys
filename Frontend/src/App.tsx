import axios from "axios";
import { useState,useEffect } from "react";

function App() {
  const [array, setArray] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000");
    setArray(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return <div>
          <h1>Blog Posts</h1>
          <p>{array}</p>
        </div>
}

export default App
