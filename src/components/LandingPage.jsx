/*Importing dependencies*/
import React from "react";
import "../styles/landingPage.css";

/*landing page contruction*/
function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Welcome to my Store</h1>
      <p>
        This is a simple landing page created using create-react-app. Visit
        my store today!
      </p>
      <p>
        See location below...
      </p>
      <button>Click for more info</button>
    </div>
  );
}

export default LandingPage; //expoting landing page component