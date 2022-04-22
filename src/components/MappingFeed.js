import React, { useEffect, useState } from "react";
import users from "../server/server";

const MappingFeed = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      const usersApiCall = async () => {
        const res = await users.get("/users");
        setUsers(res.data);
      };
      usersApiCall();
    } catch (error) {
      console.log(error);
    }
  });

  const renderFeed = props.postsState.map((val) => {
    return (
      <div key={val.id}>
        <h4>{val.userId}</h4>
        <p>{val.text}</p>
        <h5>25/07/2001</h5>
      </div>
    );
  });
  return <div>{renderFeed}</div>;
};

export default MappingFeed;
