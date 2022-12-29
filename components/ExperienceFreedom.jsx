import React from "react";
const ExperienceFreedom = () => {
  return (
    <div className="row topMargin">
      <div className="row text-center mb-5 mt-4" style={{ maxWidth: "330px;" }}>
        <h2 className="mb-0 hideOnSm">Experience the freedom to build <br/>features, right away.</h2>
        <h2 className="mb-4 hideOnWeb showOnSm">Experience the freedom to <br/> build features, right away.</h2>
        <p className="mb-0 hideOnSm">
          You can now harness components of our platform and build powerful <br/>
          integrations for our 1 million users - or simply just for your team.
        </p>
        <p className="mb-0 hideOnWeb showOnSm">
          You can now harness components of our platform and build powerful
          integrations for our 2 million users - or simply just for your team.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <div className="row mb-5 mt-5">
          <img src="./assets/apiTeam.png" alt="" />
        </div>
        <div className="row">
          <h4>Dedicated API Team</h4>
        </div>
        <div className="row">
          <p className="text-muted hideOnSm">
           {" Our team are available for user's questions via our Slack Developer community and Email."}
          </p>
          <p className="text-muted hideOnWeb">
           {" Our team are available to answer questions via our Slack Developer Community and Email."}
          </p>
          
        </div>
      </div>

      <div className="col-md-4 text-center">
        <div className="row mb-5 mt-5">
          <img src="./assets/graphQL.png" alt="" />
        </div>
        <div className="row">
          <h4>Our API uses Graph QL</h4>
        </div>
        <div className="row">
          <p className="text-muted hideOnSm">
           {"No handling server side. Get many API's responses in a single request."}
          </p>
          <p className="text-muted hideOnWeb">
           {"Giving you the flexibility to select all the data you need with single request."}
          </p>
          
        </div>
      </div>
   
     
      <div className="col-md-4 text-center">
        <div className="row mb-5 mt-5">
          <img src="./assets/superchargeWorkflow.png" alt="" />
        </div>
        <div className="row">
          <h4>Supercharge your workflow</h4>
        </div>
        <div className="row">
          <p className="text-muted hideOnSm">
           {"Automate workflows, integrate and analyse data and take Marvel to the next level."}
          </p>
          <p className="text-muted hideOnWeb">
           {"Automate workflows, extract designs and analyse data to take Marvel to the next level."}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default ExperienceFreedom;
