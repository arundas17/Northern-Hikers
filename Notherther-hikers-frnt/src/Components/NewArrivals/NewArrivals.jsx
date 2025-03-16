import React from "react";
import Header from "../Header/Header";
import Balance from "../Balance/Balance";
import IncomExp from "../IncomeExp/IncomExp";
import TransactionList from "../TransctionList/TransactionList";
import AddnewList from "../AddnewList/AddnewList";
import closeicon from "../../assets/close-chat.png";
import "./NewArrivals.css";

import { GlobalProvider } from "../../Context/GlobalState";
const NewArrivals = ({setExptracker}) => {
  return (
    <div>
      <GlobalProvider>
        <div className="blockchain-main">
          <div className="blockchain-maincontainer">
          <div>
            <img
              src={closeicon}
              alt=""
              className="socialchatclose"
              onClick={() => setExptracker(false)}
            />
          </div>
          <div className="blockchainexp">
            <Header />
            <div className="blockchainexp-container">
              <Balance />
              <IncomExp />
              <TransactionList />
              <AddnewList />
            </div>
          </div>
        </div>
          </div>
      </GlobalProvider>
    </div>
  );
};

export default NewArrivals;
