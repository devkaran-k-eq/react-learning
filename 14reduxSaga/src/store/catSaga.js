import { call, put, takeEvery} from "redux-saga/effects"
import {getCatsSuccess, getCatImageSuccess} from  "./catSlice"



function* worksGetCatsFetch() {
    try {
      const response = yield call(() =>
        fetch('https://api.thecatapi.com/v1/breeds')
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const formattedCosts = yield response.json();
      const formatCatsShort = formattedCosts.slice(0, 10);
      console.log("formatCatsShort", formatCatsShort);
      
      yield put(getCatsSuccess(formatCatsShort));

      const breedWithImages = formatCatsShort.map( (breed) => ({
        id: breed.id,
        name: breed.name,
        imageUrl: breed.reference_image_id ? (`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`) : null
      }))

      yield put(getCatImageSuccess(breedWithImages));


      console.log("formatCatsShort", put(getCatsSuccess(formatCatsShort)));

    } catch (error) {
      console.error('Error fetching cats:', error.message);
      // Optionally, dispatch an error action here
    }
  }

function * catSaga(){
    yield takeEvery('cats/getCatsFetch', worksGetCatsFetch)
}

export default catSaga;