import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Navright from "./Components/Navright/Navright";
import Navleft from "./Components/Navleft/Navleft";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/Banner/Banner";
import Quickinfo from "./Components/Quickinfo/Quickinfo";
import Hilites from "./Components/Highlights/Hilites";
import Wolfpack from "./Components/Wolfpack/Wolfpack";
import Valhighlights from "./Components/Valhighlites/Valhighlights";
import Socail from "./Components/Social/socail";
import SocialConnectsignin from "./Components/SocialConnect-signin/socialConnectsignin";
import Customercare from "./Components/CoutmerCare/Customercare";
import HeelBlend from "./Components/HeelBlend/HeelBlend";
import NewArrivals from "./Components/NewArrivals/NewArrivals";
import NhFooter from "./Components/Nh-footer/NhFooter";
import Arrivals from "./Components/Arrivals/Arrivals";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE745RRT1hjG6wUV6o_AQAzxgZcOtqLDg",
  authDomain: "northernhikerschat.firebaseapp.com",
  projectId: "northernhikerschat",
  storageBucket: "northernhikerschat.firebasestorage.app",
  messagingSenderId: "868237415220",
  appId: "1:868237415220:web:49833b2568ecb76e62cb61",
  measurementId: "G-D61VJZH2L5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [quick, setQuick] = useState(false);
  const [social, setSocial] = useState(false);
  const [socialchat, setSocialchat] = useState(false);
  const [jaz, setJaz] = useState(false);
  const [heelblend, setHeelblend] = useState(false);
  const [expTracker, setExptracker] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <div className="nothern-hikers">
      <div className="northern-hikers-container">
        <div className="nothern-hikers-navconatiner">
          {quick ? <Quickinfo setQuick={setQuick} /> : <></>}
          {social ? <Socail setSocial={setSocial} /> : <></>}
          {jaz ? <Customercare setJaz={setJaz} /> : <></>}
          {heelblend ? <HeelBlend setHeelBlend={setHeelblend} /> : <></>}
          {expTracker? <NewArrivals setExptracker={setExptracker}/>:<></>}
          <Navbar />
          <Navright
            setQuick={setQuick}
            setSocial={setSocial}
            setSocialchat={setSocialchat}
          />
          <Navleft setJaz={setJaz} setHeelBlend={setHeelblend} />
        </div>
      </div>
      <Banner />
      <div className="nh-apartBanner northern-hikers-container">
        
        <Arrivals setExptracker={setExptracker}/>
        <Valhighlights />
       
      </div>
      <Wolfpack />
      <div className="nh-apartBanner northern-hikers-container">
        <Hilites />
        {socialchat ? (
          <SocialConnectsignin
            setSocialchat={setSocialchat}
            auth={auth}
            user={user}
          />
        ) : (
          <></>
        )}
      </div>
      <NhFooter/>
    </div>
  );
}

export default App;
