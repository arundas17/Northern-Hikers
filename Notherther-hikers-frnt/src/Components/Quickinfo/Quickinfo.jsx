import React from "react";
import "./Quickifo.css";

const Quickinfo = ({ setQuick }) => {
  return (
    <div className="quick-info">
      <div className="quick-info-head">
        <h1>NORTHERN HIKERS</h1>
        <div className="quick-info-mainhead">
          <h3>
            Northern Hikers is a platform designed to help people plan and
            contribute to hiking adventures in various locations.
          </h3>
          <button onClick={() => setQuick(false)}>Back to Home</button>
        </div>
       
      </div>

      <hr />
      <div className="quick-info-details">
        <ul>
          <li>
            <span>Planning Tool:</span>
            Provides resources and tools to assist users in organizing their
            hiking trips, including trail information, route suggestions, and
            gear recommendations.
          </li>
          <li>
            <span>Community Hub:</span>
            Fosters a community of hiking enthusiasts where users can share
            their experiences, tips, and advice.
          </li>
          <li>
            <span>Collaborative Content:</span>
            Encourages user contributions, allowing hikers to submit their own
            trail reviews, photos, and videos.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Quickinfo;
