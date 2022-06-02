import React, { useState, useEffect } from "react";
import style from "./css/randomuser.module.css";

const RandomUser = () => {
  const url = "https://www.randomuser.me/api/";
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetchData(url);
  }, []);

  function fetchData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data.results[0]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Random User API.
      </h2>
      <div className={style.users}>
        <div className={style.user}>
          <h3>{`${person?.name.title}. ${person?.name.first} ${person?.name.last}`}</h3>
          <h3>Email: {person?.email}</h3>
          <p>Gender: {person?.gender}</p>
          <div className={style.user_img}>
            <img src={person?.picture.medium} alt="" />
            <button onClick={() => fetchData(url)}>Get New User</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomUser;
