import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import { useState } from "react";
import "../scss/compose.scss";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  post: "",
};

const Compose = () => {
  const [state, setState] = useState(initialState);
  const { title, post } = state;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:4000/compose", { title, post })
      .then(() => console.log("done"))
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
    e.preventDefault();
  };
  return (
    <div className="composeContainer">
      <h1>Compose</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Textarea
            className="form-control"
            placeholder="Write Title here…"
            id="title"
            value={title}
            size="lg"
            sx={{ fontSize: "1.5rem" }}
            onChange={(event) =>
              setState((prev) => ({ ...prev, title: event.target.value }))
            }
            minRows={1}
            name="title"
          ></Textarea>
          <label htmlFor="post">Post</label>
          <Textarea
            placeholder="Write Post here…"
            id="post"
            name="post"
            value={post}
            onChange={(event) =>
              setState((prev) => ({ ...prev, post: event.target.value }))
            }
            minRows={10}
            maxRows={20}
            endDecorator={
              <Typography level="body3" sx={{ ml: "auto", fontSize: "1rem" }}>
                {post.length} character(s)
              </Typography>
            }
            sx={{ fontSize: "1.5rem" }}
          />
        </div>
        <Button variant="contained" color="primary" size="large" type="submit">
          Publish
        </Button>
      </form>
    </div>
  );
};

export default Compose;
