import React from "react";

const ShowCaseYourApp = () => {
  return (
    <div className="row" style={{ marginTop: "150px" }}>
      <div className="col-md-6">
        <h2>Showcase your app in our integrations directory</h2>
        <p style={{ maxWidth: "365px" }}>
          Building something special? We're always looking to work with partners
          who wants to help the world bring their ideas to life
        </p>
        <div className="row flex-nowrap">
          <button type="button" className="btn btn-light">
            Become a partner
          </button>
          <button type="button" className="btn btn-dark ms-3">
            View Integrations
          </button>
        </div>
      </div>
      <div className="col-6">
        <img src="./assets/showcase.png" alt="" className="fullWidthImage" />
      </div>
    </div>
  );
};

export default ShowCaseYourApp;
