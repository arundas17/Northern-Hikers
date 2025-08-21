import React from "react";
import "./NhFooter.css";
import insta from "../../assets/intagram.png";
import facebook from "../../assets/facebook.png";
import pintrest from "../../assets/pintrest.png";
import youtube from "../../assets/youtube.png";
import webio from "../../assets/weibio.png";
import random from "../../assets/random.png";
import delivery from "../../assets/delivery.png";
import x from "../../assets/x.png";
import ch from "../../assets/ch.png";
import snap from "../../assets/snap.png";
import sportify from "../../assets/sportify.png";
import line from "../../assets/line.png";
import apple from "../../assets/apple.png";
import earth from "../../assets/android.png";
import locator from "../../assets/location.png";
import android from "../../assets/earth2.png";

const NhFooter = () => {
  const customerCare = [
    { path: "/", display: "May we help you?" },
    { path: "/", display: "Contact Us" },
    { path: "/", display: "Travel world updates" },
    { path: "/", display: "Book a healblend" },
    { path: "/", display: "Alpine seekers" },
    { path: "/", display: "FAQ" },
  ];

  const mountainPioneers = [
    { path: "/", display: "World of Northern Hikers" },
    { path: "/", display: "Creating Shared Value" },
    { path: "/", display: "Integrity Helpline" },
    { path: "/", display: "Corporate Information" },
    { path: "/", display: "Careers" },
  ];

  const termsAndConditions = [
    { path: "/", display: "Terms and Conditions of Use" },
    { path: "/", display: "Terms and Conditions of Travel" },
    { path: "/", display: "Privacy Policy" },
    { path: "/", display: "DPO" },
  ];

  return (
    <div className="Nh-footer">
      <div className="barrier"></div>
      <div className="Nh-newsletter">
        <h4>Sign up to receive the Northern Hikers newsletter</h4>
        <form action="">
          <input type="text" placeholder="insert your mail" />
          <button>SIGN UP</button>
        </form>
      </div>
      <div className="barrier"></div>
      <div className="Nh-footer-wrapper">
        <div className="customer-care">
          <h4>Customer Care</h4>
          <ul>
            {customerCare.map((item) => (
              <li key={item.display}> 
                <a href={item.path}>{item.display}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="company">
          <h4>Mountain Pioneers</h4>
          <ul>
            {mountainPioneers.map((item) => (
              <li key={item.display}>
                <a href={item.path}>{item.display}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="legal-area">
          <h4>Legal Area</h4>
          <ul>
            {termsAndConditions.map((item) => (
              <li key={item.display}>
                <a href={item.path}>{item.display}</a>
              </li>
            ))}
          </ul>
          <button className="nh-cookies-button">COOKIES SETTINGS</button>
        </div>

        <div className="follow-us">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="/">
                <img src={insta} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={pintrest} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={youtube} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={webio} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={random} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={delivery} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={x} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={ch} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={snap} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={sportify} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={line} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="barrier"></div>
      <div className="Nh-footer-endcard">
        <div className="Nh-footer-locator">
          <div>
            <img src={locator} alt="" />
            <a href="">AUTHERS LOCATOR</a>
          </div>
          <div>
            <img src={android} alt="" />
            <a href="">IN</a>
          </div>
        </div>
        <div className="barrier"></div>

        <div className="Nh-footer-downloadapp">
          <h4>DOWLOAD THE APP</h4>
          <img src={apple} alt="" />
          <img src={earth} alt="" />
        </div>
        <div className="barrier"></div>
        <div className="Nh-footer-Emptygap"></div>
        <div className="barrier"></div>
        <div className="Nh-footer-copyright">
          <p>
            Powered by Northern Hikers{" "}
            <span>
              Copyright 2025 Northern Hikers S.p.A. - All rights reserved - NHAV
              05412951005
            </span>
            Vendor information
          </p>
        </div>
        <div className="barrier"></div>
      </div>
    </div>
  );
};

export default NhFooter;
