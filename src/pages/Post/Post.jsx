import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { getPosts } from "Actions/post.actions";

const Post = () => {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(posts);
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Pót </h1>
    </div>
  );
};

export default Post;
