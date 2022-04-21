import React from "react";

const MappingFeed = (props) => {
  const renderFeed = props.postsState.map((val) => {
    return (
      <div key={val.id}>
        <h4>Firstname Lastname</h4>
        <p>{val.text}</p>
        <h5>25/07/2001</h5>
      </div>
    );
  });
  return <div>{renderFeed}</div>;
};

export default MappingFeed;
