import React from "react";
import Feedback from "../components/feedback";
import NavBar from "./../components/NavBar";

export default function Cancel() {
  return (
    <div className="bg-gradient-to-r from-green-700/30 to-orange-700/30 h-screen w-full">
      <NavBar cartItems={[]} />
      <Feedback
        pass={false}
        Header={`Payment was Cancelled`}
        subHeader={`You will be redirected to the Home page`}
        btnText={`Go to Home Page`}
      />
    </div>
  );
}
