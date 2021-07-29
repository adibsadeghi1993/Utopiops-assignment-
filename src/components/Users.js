import "./users.css";

import Posts from "./Posts";

const Users = ({ users, userPosts, postHandler ,user}) => {
  return (
    <div className="users-posts">
      <div className="allUser">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="singleUser"
              onClick={() => postHandler(user.id)}
            >
              <h3>userName : {user.name}</h3>
              <h3> user: {user.id}</h3>
            </div>
          );
        })}
      </div>
      <div className="posts">
        <h2 className="postsTitle">{user===0 ?"please choose your user to show you his posts" :`posts of user:${user}`}</h2>
        {userPosts.map((item) => {
          return <Posts post={item} key={item.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Users;
