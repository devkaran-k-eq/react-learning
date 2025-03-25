import { call, put, takeEvery, delay } from "redux-saga/effects";
import { getCatImageSuccess, getCatsSuccess } from "./catSlice";

function* worksGetCatsFetch() {
  try {

    yield delay(2000);

    const response = yield call(() =>
      fetch("https://api.thecatapi.com/v1/breeds")
    );

    console.log("Response.ok", response.ok);

    if (!response.ok) {
      throw new Error(`HTTP ERROR -----------> ${response.status}`);
    }

    const formatatJson = yield response.json();

    const formatData = formatatJson.slice(11, 20);

    yield put(getCatsSuccess(formatData));

    const browseImages = formatData.map((breed) => ({
      id: breed.id,
      name: breed.name,
      imageUrl: breed.reference_image_id
        ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
        : null,
    }));

    yield put(getCatImageSuccess(browseImages))
  } catch (error) {
    console.error("Error in Fetching Data", error.mesaage);
  }
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", worksGetCatsFetch);
}

export default catSaga;
