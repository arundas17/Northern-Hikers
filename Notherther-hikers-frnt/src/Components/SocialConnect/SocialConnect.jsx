import React from "react";
import "./SocialConnect.css";
import sociallogo from "../../assets/northen-hikers-logo.png";

const SocialConnect = () => {
  return (
    <div className="socailConnect">
      <div className="socialconnect-container">
        <div className="socailConnect-header">
          <div className="socailConnect-logo">
            <img src={sociallogo} alt="" className="head" />
            <img src={signoutimg} alt="" className="signout" onClick={()=>auth.signOut()}/>
          </div>
          </div>
          <h3>COMMUNITY CHAT</h3>
          <h4>أبرز المعالم</h4>
          <p className="socilconnect-intro">
            Welcome to Northern Hikers – Your Ultimate Hiking Community! 🌲🥾
            Northern Hikers is the go-to chat app for outdoor enthusiasts,
            nature lovers, and adventure seekers. Whether you're a seasoned
            trekker or just starting your hiking journey, our app connects you
            with like-minded explorers to share experiences, plan group hikes,
            and discover the best trails near you. 🌟 Features: Live Chat &
            Groups – Connect with fellow hikers in real time and join
            topic-based groups. Trail Recommendations – Share and find the best
            hiking routes in your area. Event Planning – Organize group hikes
            and meet new hiking buddies. Gear & Safety Tips – Exchange advice on
            equipment, survival tips, and weather conditions. Join Northern
            Hikers today and be part of a thriving community that shares your
            passion for the great outdoors! 🌿🏔️
          </p>
      </div>
    </div>
  );
};

export default SocialConnect;
