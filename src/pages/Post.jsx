import axios from "axios";
import { useEffect, useState } from "react";
import "../scss/posts.scss";
const Post = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:4000${location.pathname}`)
      .then((data) => setData(data.data));
  }, []);
  console.log(data);
  return (
    <>
      <div className="postsContainer">
        <h2>{data.title}</h2>
        <p>{data.post}</p>
      </div>
    </>
  );
};

export default Post;
