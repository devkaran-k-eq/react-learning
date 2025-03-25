import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./components/Loading";
import Gallery from "./components/Gallery";
import { getCatsFetch } from "./store/catSlice";
import "./App.css";

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
    {console.log("cats", cats, "catImages", catImages)}
      {isLoading ? <Loading /> : (<Gallery cats={cats} catImages={catImages} />)}
    </>
  );
}

export default App;
