import react from "react";
import CatCard from "./CatCard";

export default function Gallery({ cats, catImages }) {
  if (cats.length === 0)
    return <p> No Cats Available at this moment 〈๑꒡ᆽ꒡๑〉</p>;
  return (
    <>
      <div className="App">
        <h1>Cat Spicies</h1>
        <p>Here are many types of spicies which will melt your heart!!</p>
        <hr />
      </div>
      <div className="Gallery">
        {cats.map((cat) => {
          return <CatCard key={cat.id} cat={cat} catImages={catImages} />;
        })}

        <button>More Cats</button>
        {console.log("Cats ---------------->", cats)}
      </div>
    </>
  );
}
