import React from "react";
import BodySection from "./BodySection";
import RewardsSection from "./RewardsSection";
import './Body.css'
import BottomNav from "./BottomNav";
import BottomMenu from "./BottomMenu";

function Body() {
  return (
    <div className="body">
      <RewardsSection />
      <BodySection
        layout={0}
        img={"/res/crisp-mornings.jpg"}
        title={"Perfectly pumpkin"}
        details={
          "Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold Brew."
        }
        buttonName={"Order now"}
      />
      <BodySection
        layout={1}
        img={"/res/pumpkin-spice.jpg"}
        title={"Pairs well with crisp mornings"}
        details={
          "Discover the nondairy layers of Apple Crisp Oatmilk Macchiato, now with Starbucks® Blonde Espresso."
        }
        buttonName={"Learn more"}
      />
      <BodySection
        layout={0}
        img={"/res/spice-up-fall.jpg"}
        title={"Spice up your fall"}
        details={
          "Warm your senses with the delightfully creamy Chai Tea Latte. Try it hot or iced."
        }
        buttonName={"Learn more"}
      />
      <div className="terms">
        <p>
          *Excludes taxes and gratuities. At participating stores. Some
          restrictions apply. 150 Stars deposited after first qualifying
          Starbucks purchase. Flights purchased close to departure may not earn
          double Stars. Stars may not be earned on purchases of alcohol,
          Starbucks Cards and Starbucks Card reloads. For details, visit{" "}
          <a href="https://www.deltastarbucks.com/terms">
            deltastarbucks.com/terms
          </a>
        </p>
      </div>
      <BottomNav/>
      <BottomMenu/>
    </div>
  );
}

export default Body;
