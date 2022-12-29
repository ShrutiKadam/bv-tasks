import React from "react";

const ShowCaseYourApp = () => {
  return (
    <div className="container showCaseApp">
    <div className="row topMargin">
    <div className="col-6 hideOnWeb">
        <img src="/assets/showcase.png" alt="" className="fullWidthImage mb-5" style={{width:"200%"}}/>
      </div>
      <div className="col-md-6">
        <h2>Showcase your app in our integrations directory</h2>
        <p style={{ maxWidth: "475px" }}>
          {"Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life."}
        </p>
        <div className="row flex-nowrap buttonGroup btnBlock">
          <button type="button" className="btn btn-light margin">
            Become a partner
          </button>
          <button type="button" className="btn text-white border-white ms-3 margin">
            View Integrations
          </button>
        </div>
      </div>
      <div className="col-6 hideOnSm">
        <img src="/assets/showcase.png" alt="" className="fullWidthImage" />
      </div>
    </div>
    </div>
  );
};

export default ShowCaseYourApp;
