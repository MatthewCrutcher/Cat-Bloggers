import React, { useEffect, useState } from "react";
import users from "../server/server";
import post from "../server/server";

const MappingFeed = (props) => {
  const [Users, setUsers] = useState([]);
  const [LoggedIn, setLoggedIn] = useState(1);

  useEffect(() => {
    const usersApiCall = async () => {
      try {
        const res = await users.get("/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    usersApiCall();
  }, []);

  const deletePost = (id) => {
    post.delete(`/post/${id}`).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };

  const mergeObjects = props.postsState.map((val) => {
    var merge = {};
    Users.map((value) => {
      if (val.userId === value.id) {
        merge = {
          ...merge,
          firstName: value.firstName,
          lastName: value.lastName,
        };
      }
    });
    return (
      <div key={val.id}>
        <h4>
          {merge.firstName} {merge.lastName}
        </h4>
        <p>{val.text}</p>
        <h5>25/07/2001</h5>
        <button
          className={
            LoggedIn === val.userId ? "deleteButton" : "deleteButtonNull"
          }
          onClick={() => deletePost(val.id)}
        >
          DELETE
        </button>
      </div>
    );
  });

  return <div>{mergeObjects}</div>;
};

export default MappingFeed;
