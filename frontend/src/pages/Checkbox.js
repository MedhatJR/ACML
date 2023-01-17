
import React from "react";
import { useState } from "react";
const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          // ...
          onChange={() => setIsChecked((prev) => !prev)}
        />
        {/* ... */}
      </label>
      <p>{isChecked ? "Selected" : "Unchecked"}</p>
    </div>
  );
};


export default Checkbox;