import React, { useEffect, useState } from "react";

function App() {
  const [dogRandom, setDogRandom] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogRandom(data.message));
  }, []);

  if (!dogRandom) {
    return <p>Loading...</p>;
  } else {
    return <img src={dogRandom} alt="A Random Dog"></img>;
  }
}

export default App;
