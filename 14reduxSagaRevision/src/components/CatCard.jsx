import React from "react";

export default function CatCard({ cat, catImages }) {
  const matchingImage = catImages.find((image) => {
    console.log("image.name",image.name)
    console.log("cat.name", cat.name);
    
    return (image.name === cat.name)
}
);
  console.log("matchingImage", matchingImage, catImages, cat);
  
  return (
    <div className="row">
      <div className="column column-left">
        {matchingImage ? (
          <img
            src={matchingImage.imageUrl}
            alt={matchingImage.name || "cat"}
            width="200"
            height="200"
          />
        ) : (
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#f0f0f0",
              display: "flex",
              border: "1px solid #ccc",
            }}
          >
            <p style={{ color: "#888" }}>No Image</p>
          </div>
        )}
      </div>
      <div className="column column-right">
        <h2>{cat.name}</h2>
        <h5>Teperament: {cat.temperament}</h5>
        <p>{cat.description}</p>
      </div>
    </div>
  );
}
