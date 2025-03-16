import React from 'react';
import sociallogo from "../../assets/northen-hikers-logo.png";
import './SocialConnectsignin.css';
import dgoogle from '../../assets/googleimagelogo.webp';
import signoutimg from "../../assets/social-signout.png";
import closeicon from '../../assets/close-chat.png'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SocialConnectsignin = ({ auth, user , setSocialchat}) => {
  const signingWithGoogle = async (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className='socialConnectsignin'>
      <div className="socialConnectsignin-outer">
        <div className="socailConnect-header">
          <img src={sociallogo} alt="Northern Hikers Logo" className="head" />
          {user && (
            <img
              src={signoutimg}
              alt="Sign out"
              className="signout"
              onClick={() => auth.signOut()}
            />
          )}
          {!user && (
            <img
              src={closeicon}
              alt=""
              className="socialchatclose"
              onClick={() => setSocialchat(false)}
            />
          )}
        </div>
        <h3>COMMUNITY CHAT</h3>
        <h4>أبرز المعالم</h4>
      </div>
      {user ? (
        <p className='welcome-chat'> <span style={{ fontWeight: "bold" }}>Welcome {user.displayName}!</span> Welcome to Northern Hikers – Your Ultimate Hiking Community! 🌲🥾
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
        Hikers today and be part of a thriving </p>
      ) : (
        <div className="social-connect-siginbuttoncontainer">
          <div className="nh-signin-chat" onClick={signingWithGoogle}>
            <div className="google">
              <img src={dgoogle} alt="Google Sign-in Logo" />
            </div>
            <p>Sign in With Google</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialConnectsignin;


