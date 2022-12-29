import React from "react";

const ManagingPrototype = () => {
  return (
    <div className="row topMargin">
      <div className="col-md-6">
        <img
          className="me-2"
          src="./assets/botbot.png"
          alt=""
          style={{ width: "90%" }}
        />
      </div>
      <div className="col-md-6">
        <h2 className="hideOnSm mt-0" style={{ maxWidth: "475px;" }}>
          A Slack-bot for creating and managing prototypes
        </h2>
        <h2 className="hideOnWeb showOnSm mt-5 mb-3">BotBot - Slack Bot for creating and managing prototypes</h2>
        <p className="hideOnSm" style={{maxWidth: "475px"}}>
         {" Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life"}
        </p>
        <p className="hideOnWeb showOnSm" style={{maxWidth: "475px"}}>Check out our API example BotBot, a bot for creating, viewing and managing prototypes by simply using Slash Commands in Slack. Grab the code and make your own bot!</p>
        <div className="row hideOnSm flex-nowrap buttonGroup hideOnSm">
          <button type="button" className="btn btn-light">
            Become a partner
          </button>
          <button type="button" className="btn btn-dark ms-3">
            View Integrations
          </button>
        </div>

        <div className="row hideOnWeb flex-nowrap buttonGroup btnAlign">
          <button type="button" className="btn btn-light text-muted margin">
            View on Github
          </button>
          <button type="button" className="btn text-white border-white margin">
            Try the demo
          </button>
        </div>
      </div>

    </div>
  );
};

export default ManagingPrototype;
