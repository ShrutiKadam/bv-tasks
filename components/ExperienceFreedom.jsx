import React from "react";
import styles from "../styles/expFreedom.module.css";
const ExperienceFreedom = () => {
  return (
    <div className="row" style={{ marginTop: "150px" }}>
      <div className="row text-center mb-5" style={{ maxWidth: "330px;" }}>
        <h2 className="mb-0">Experience the freedom to build </h2><br/> <h2 className="mt-0">features, right away.</h2>
        <p className="mb-0">
          You can now harness components of our platform and build powerful </p> <br/>
         <p> integrations for our 2 million users - or simply just for your team.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <div className="row">
          <img src="./assets/apiTeam.png" alt="" />
        </div>
        <div className="row">
          <h4>Dedicated API Team</h4>
        </div>
        <div className="row">
          <p>
            Our tean are available for user's questions via our Slack Developer
            community and Email
          </p>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <div className="row">
          <img src="./assets/graphQL.png" alt="" />
        </div>
        <div className="row">
          <h4>Our API uses Graph QL</h4>
        </div>
        <div className="row">
          <p>
            No handling server side. Get many API's responses in a single
            request.
          </p>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <div className="row">
          <img src="./assets/superchargeWorkflow.png" alt="" />
        </div>
        <div className="row">
          <h4>Supercharge your workflow</h4>
        </div>
        <div className="row">
          <p>
            Automate workflows, integrate and analyse data and take Marvel to
            the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceFreedom;
