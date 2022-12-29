import React from "react";
// import styles from "../styles/LetsBuildFuture.module.css"

const LetsBuildFuture = () => {
  return (
    <div className="container md-ms-3">
    <div className="row mt-5 mb-5 d-sm-flex">
      <div className="col-md-6 pe-2 textCenter mb-1">
        <h2 className="hideOnSm" style={{ maxWidth: 460,fontSize:"3rem" }}>
          {"Let's build the future of design, now."}
        </h2>
        <h2 className="hideOnWeb"  style={{ fontSize:"2rem" }}>
          {"Let's build the future of design, together"}
        </h2>
        <p className="hideOnSm"  style={{ maxWidth: 412 }}>
          Create amazing tools and integrations for 1 million users or customise
          Marvel for your team.
        </p>
        <p  className="hideOnWeb"  style={{ maxWidth: 412 }}>
          Create amazing tools and integrations for 2 million users or customise
          Marvel for your own team.
        </p>
        <div className="row flex-nowrap buttonGroup hideOnSm">
          <button type="button" className="btn text-white" style={{backgroundColor:"#1FB6FF"}}>
            Submit your app
          </button>
          <button type="button" className="btn btn-light ms-3">
            View API Docs
          </button>
        </div>
        <div className="row d-md-none flex-nowrap buttonGroup">
          <button type="button" className="btn btn-light">
            View the docs
          </button>
          <button type="button" className="btn text-white border-white ms-3 me-3">
            Manage your apps
          </button>
        </div>
      </div>
      <div className="col-md-6 mt-5 ps-2">
        <img src="/assets/illustration.png" alt="" className="fullWidthImage" />
      </div>
    </div>
    </div>
  );
};

export default LetsBuildFuture;
