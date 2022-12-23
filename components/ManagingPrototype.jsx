import React from "react";

const ManagingPrototype = () => {
  return (
    <div className="row" style={{ marginTop: "150px" }}>
      <div className="col-md-6">
        <img
          className="me-2"
          src="./assets/botbot.png"
          alt=""
          style={{ width: "90%" }}
        />
      </div>
      <div className="col-md-6">
        <h2 style={{ maxWidth: "320px;" }}>
          A Slack-bot for creating and managing prototypes
        </h2>
        <p>
         {" Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life"}
        </p>
        <div className="row flex-nowrap buttonGroup">
          <button type="button" className="btn btn-light">
            Become a partner
          </button>
          <button type="button" className="btn btn-dark ms-3">
            View Integrations
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagingPrototype;
