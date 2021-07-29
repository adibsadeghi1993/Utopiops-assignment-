import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Edit from "./components/Edit";
import axios from "axios";
import React, { useState, useEffect } from "react";

import Users from "./components/Users";
import Home from "./components/Home";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(0);
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const postHandler = (id) => {
    console.log(id);
    const allposts = [...posts];
    const userposts = allposts.filter((post) => {
      return post.userId === id;
    });

    setUser(id)

    setUserPosts(userposts);
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div >
     
      <Switch>
        <Route
          path="/users/edit/:id"
          render={(props) => (
            <Edit
              userPosts={userPosts}
              setUserPosts={setUserPosts}
              {...props}
            />
          )}
        />

        <Route
          path="/users"
          exact
          render={(props) => (
            <Users
              {...props}
              user={user}
          
              postHandler={postHandler}
              users={users}
              userPosts={userPosts}
            />
          )}
        />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
