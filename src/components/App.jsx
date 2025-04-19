import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch dog image
  const fetchDogImage = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // UseEffect to fetch image on component mount
  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <img src={dogImage} alt="A Random Dog" />}
      <button onClick={fetchDogImage}>Fetch New Dog</button>
    </div>
  );
}

export default App;