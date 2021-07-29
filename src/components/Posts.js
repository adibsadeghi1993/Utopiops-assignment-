import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Posts = ({ post }) => {
  
  const { title,id } = post;
 
  return (
   
      <div className="post">
        <h3>{title}</h3>
       <Link to={`/users/edit/${id}`}>
       <button className="editBtn">Edit</button>
       </Link>
      </div>
   
  );
};

export default Posts;
