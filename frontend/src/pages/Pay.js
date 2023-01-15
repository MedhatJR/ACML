import { useState } from "react";

// import spatula from './assets/spatula.jpg';
import StripeContainer from "./StripeContainer";

function Pay() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h3>Please enter you card details</h3>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>{}</h3>
          {/*  <img src={spatula} alt='Spatula' /> */}
          <button onClick={() => setShowItem(true)}>Purchase Course</button>
        </>
      )}
    </div>
  );
}

export default Pay;
