import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append("file", image);
    axios
      .post("http://localhost:3001/upload", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/getImage")
      .then((res) => setFile(res.data[0].image))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <img src={"http://localhost:3001/images/" + file} alt="image" />
    </div>
  );
}

export default App;
