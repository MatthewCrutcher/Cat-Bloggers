import React, { useEffect, useState } from "react";
import users from "../server/server";

function EmailDuplication(props) {
  const [Alert, setAlert] = useState(false);

  useEffect(() => {
    const emailApiCall = async () => {
      try {
        const res = await users.get("/users");
        const response = res.data;
        emailMap(response);
      } catch (error) {
        console.log(error);
      }
    };

    emailApiCall();
  }, [props]);

  const emailMap = (res) => {
    if (Alert === false) {
      res.map((val) => {
        if (props.email === val.email) {
          setAlert(true);
          console.log("Email is taken");
        } else {
          console.log("All Good");
          setAlert(false);
        }
      });
    } else {
      console.log("loop closed");
    }
  };

  return (
    <div>{Alert === true ? <h3>Email is already signed up</h3> : null}</div>
  );
}

export default EmailDuplication;
