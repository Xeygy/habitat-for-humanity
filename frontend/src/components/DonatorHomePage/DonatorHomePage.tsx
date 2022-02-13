import React from "react";
import { useNavigate } from "react-router-dom";
import DonatorNavbar from "../DonatorNavbar/DonatorNavbar";
import gift from "./../../images/gift.png";
require("./DonatorHomePage.css")

const DonatorHomePage = (): JSX.Element => {
    let navigate = useNavigate();

    const routeChange = () : void => {
        let donateLocationPath = 'Donate/Location';
        navigate(donateLocationPath);
    }

    return (
        <body id="donatePage">
            <DonatorNavbar />
            <div id="giftBox">
                <img id="donatePageGift" src={gift} alt="gift" />
                <h1 id="donatePageHeader">Welcome, make a donation!</h1>
                <p id="donatePageDesc">To schedule a pickup or drop off your donation, click below to enter information about the item for our staff to review.</p>
                <button id="donatePageButton" onClick={routeChange}>Make a Donation</button>
            </div>
        </body>
    )
}

export default DonatorHomePage;