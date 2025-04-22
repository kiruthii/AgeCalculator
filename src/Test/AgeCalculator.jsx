import React, { useState } from "react";

const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

   

    setAge(calculatedAge);
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Age Calculator</h3>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />  <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <h5>The age is: {age}</h5>}
    </div>
  );
};

export default AgeCalculator;










   // const m = today.getMonth() - birthDate.getMonth();

    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //   calculatedAge--;
    // }