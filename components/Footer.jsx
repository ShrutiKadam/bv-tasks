import React from "react";

const Footer = () => {
  return (
    <div className="row" style={{ marginTop: "150px", marginBottom:"3rem" }}>
      <div className="col-md-2">
        <img src="/assets/logo-white.svg" alt="" height={80} width={80} />
      </div>
      <div className="col-md-2 overview col-xs-6">
        <h5>Overview</h5>
        <ul className="list-unstyled">
          <li className="my-2 text-muted">
            <a>Why Marvel</a>
          </li>
          <li className="my-2 text-muted">
            <a>Enterprise</a>
          </li>
          <li className="my-2 text-muted">
            <a>Pricing</a>
          </li>
          <li className="my-2 text-muted">
            <a>Request a demo</a>
          </li>
          <li className="my-2 text-muted">
            <a>Explore</a>
          </li>
          <li className="my-2 text-muted">
            <a>Apps</a>
          </li>
          <li className="my-2 text-muted">
            <a>Developer API</a>
          </li>
        </ul>
      </div>

      <div className="col-md-2 col-xs-6 halfWidthOnSm">
        <h5>Features</h5>
        <ul className="list-unstyled">
          <li className="my-2 text-muted">
            <a>Wireframing</a>
          </li>
          <li className="my-2 text-muted">
            <a>Design</a>
          </li>
          <li className="my-2 text-muted">
            <a>Prototyping</a>
          </li>
          <li className="my-2 text-muted">
            <a>Collaboration</a>
          </li>
          <li className="my-2 text-muted">
            <a>Handoff</a>
          </li>
          <li className="my-2 text-muted">
            <a>Integrations</a>
          </li>
          <li className="my-2 text-muted">
            <a>Sketch Plugin</a>
          </li>
        </ul>
      </div>
      <div className="col-md-2 col-sm-6 halfWidthOnSm">
        <h5>Support</h5>
        <ul className="list-unstyled">
          <li className="my-2 text-muted">
            <a>Help Center</a>
          </li>
          <li className="my-2 text-muted">
            <a>Terms of Service</a>
          </li>
          <li className="my-2 text-muted">
            <a>Privacy</a>
          </li>
          <li className="my-2 text-muted">
            <a>Security</a>
          </li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-6 halfWidthOnSm">
        <h5>Marvel</h5>
        <ul className="list-unstyled">
          <li className="my-2 text-muted">
            <a>Blog</a>
          </li>
          <li className="my-2 text-muted">
            <a>Our Team</a>
          </li>
          <li className="my-2 text-muted">
            <a>Contact Us</a>
          </li>
          <li className="my-2 text-muted">
            <a>Success Stories</a>
          </li>
          <li className="my-2 text-muted">
            <a>Brand Guidelines</a>
          </li>
        </ul>
      </div>
      <div className="col-md-2 col-sm-6 halfWidthOnSm">
        <h5>Follow</h5>
        <ul className="list-unstyled">
          <li className="my-2 text-muted">
            <a>Twitter</a>
          </li>
          <li className="my-2 text-muted">
            <a>Dribble</a>
          </li>
          <li className="my-2 text-muted">
            <a>Facebook</a>
          </li>
          <li className="my-2 text-muted">
            <a>Github</a>
          </li>
          <li className="my-2 text-muted">
            <a>Workable</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
