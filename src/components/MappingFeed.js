import React, { useEffect, useState } from "react";
import users from "../server/server";
import post from "../server/server";

const MappingFeed = (props) => {
  const [Users, setUsers] = useState([]);
  const [LoggedIn] = useState(1);
  /*const [EditPost, setEditPost] = useState({
    text: "",
    id: 1,
    userId: LoggedIn,
  });*/

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

  /*const editPost = (id) => {
    post.put(`/post/${id}`, EditPost).then((res) => {
      console.log(res);
    });
  };*/

  const mergeObjects = props.postsState.map((val) => {
    var merge = {};
    Users.map((value) => {
      if (val.userId === value.id) {
        return (merge = {
          firstName: value.firstName,
          lastName: value.lastName,
        });
      } else {
        return null;
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
            LoggedIn === val.userId ? "deleteButton" : "deleteButtonNone"
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

/* <button
          className={LoggedIn === val.userId ? "editButton" : "editButtonNone"}
          onClick={() => setShowInput((prevState) => !prevState)}
        >
          EDIT
        </button>
        <div className={ShowInput === true ? "showInput" : "showInputNone"}>
          <input
            onChange={(event) => {
              setEditPost({ text: event.target.value });
            }}
          />
          <button onClick={() => editPost(val.id)}>CHANGE</button>
        </div> */
