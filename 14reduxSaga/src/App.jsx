import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./store/catSlice";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.cats.isLoading);
  const cats = useSelector((state) => state.cats.cats || []);
  const catImages = useSelector((state) => state.cats.catImages || []);

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  useEffect(() => {
    console.log("From App cats", cats);
    console.log("From App loading", isLoading);
    console.log("From App catImages", catImages);
  }, [cats, isLoading, catImages]);

  return (
    <>
      <div className="App">
        <h1>Cat Species Gallery</h1>
        <p>Images of various types of cats for viewing pleasure!</p>
        <div>{isLoading ? <p>Loading cats...</p> : null}</div>
      </div>

      <div className="Gallery">
        {cats.length > 0 ? (
          cats.map((cat) => (
            <div key={cat.id} className="row">
              <div className="column column-left">
                {catImages.length > 0 ? (
                  catImages
                    .filter((breed) => breed.name === cat.name)
                    .map((breed) => (
                      <img
                        key={breed.id}
                        src={breed.imageUrl}
                        alt={breed.name || "Cat"}
                        width="200"
                        height="200"
                      />
                    ))
                ) : (
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #ccc",
                    }}
                  >
                    <p style={{ color: "#888" }}>No Image</p>
                  </div>
                )}
              </div>
              <div className="column column-right">
                <h2>{cat.name}</h2>
                <h5>Temperament: {cat.temperament}</h5>
                <p>{cat.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No cats available at the moment.</p>
        )}
        <button>View More Cats</button>
      </div>
    </>
  );
}

export default App;
