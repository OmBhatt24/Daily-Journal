import { useEffect, useState } from "react";
// import initialData from "./data/initialData.js";
import "../scss/home.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="homeContainer">
      {data.map((d, index) => (
        <>
          <h2 key={index}>{d.title}</h2>
          <p>{d.post.slice(0, 180)} ...</p>
          <Button variant="outlined">
            <Link to={"/posts/" + d._id} style={{ textDecoration: "none" }}>
              Read More
            </Link>
          </Button>
        </>
      ))}

      {/* <h2>{initialData.heading}</h2> */}
      {/* <p>{initialData.data.forEach((line) => line)}</p> */}
    </div>
  );
};

export default Home;
