import React from "react";
// import styles from "../styles/LetsBuildFuture.module.css"

const LetsBuildFuture = () => {
  return (
    <div className="row mt-5 mb-5 d-sm-flex">
      <div className="col-md-6 pe-2 textCenter mb-1">
        <h2 style={{ maxWidth: 460,fontSize:"3rem" }}>
          Let's build the future of design, now.
        </h2>
        <p style={{ maxWidth: 340 }}>
          Create amazing tools and integrations fr 1 million users or customise
          Marvel for your team.
        </p>
        <div className="row flex-nowrap buttonGroup">
          <button type="button" className="btn btn-primary">
            Submit your app
          </button>
          <button type="button" className="btn btn-light ms-3">
            View API Docs
          </button>
        </div>
      </div>
      <div className="col-md-6 ps-2">
        <img src="/assets/illustration.png" alt="" className="fullWidthImage" />
      </div>
    </div>
  );
};

export default LetsBuildFuture;