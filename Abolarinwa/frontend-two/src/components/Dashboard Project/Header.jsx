import React from "react";

const Header = ({ details }) => {
  return (
    <section>
      {details.map((detail) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}>
          <div>
            <h2>{detail.title}</h2>
          </div>
          <div>
            <img src={detail.firstImg} alt="" width="20px" />
            <img src={detail.secondImg} alt="" width="20px" />
          </div>
          <div className="profile">
            <p>{detail.text}</p>
            <img src={detail.thirdImg} alt="" width="20px" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Header;
