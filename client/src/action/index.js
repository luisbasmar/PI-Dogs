import axios from "axios";
import {setDogName} from '../helpers'

export function getDogs() {
  return async function (dispatch) {
    try{
      var json = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: 'GET_DOGS',
        payload: json.data,
      });
    }catch(err){
        console.log(err)
     }
  };
}
export function getDetail(id) {
  return async (dispatch) => {
    try{
      const json = await axios.get(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: 'GET_DETAIL',
        payload: json.data,
      });
    }catch(err){
      console.log(err)
    }
  };
}
export function getTemperaments() {
  return async (dispatch) => {
    try{
      let json = await axios.get("http://localhost:3001/temperament");
      return dispatch({
        type: 'GET_TEMPERAMENTS',
        payload: json.data,
      });
    }catch(err){
      console.log(err)
  }
  };
}
// export const searchByName = (name) => {
//   return async (dispatch) => {
//     const json = await axios.get(`http://localhost:3002/dogs?name=${name}`);
//     return dispatch({
//       type: SEARCH_BY_NAME,
//       payload: json.data,
//     });
//   };
// };
export const searchByName = (name) => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/dogs?name=${name}`)
    .then((data) => {
      return dispatch({
        type: 'SEARCH_BY_NAME',
        payload: data.data,
      })
    })
    .catch((err)=>{
      console.log(err)
      // return dispatch({
      //   type: 'SEARCH_BY_NAME',
      //   payload: err.error,
      // })
    })
  }
}

export const addDog = ({
  name,
  heightMin,
  heightMax,
  weightMin,
  weightMax,
  yearsMin,
  yearsMax,
  image,
  temperament,
}) => {
  
  return async (dispatch) => {
    await axios.post("http://localhost:3001/dogs/", {
      name: setDogName(name),
      height: heightMin + " - " + heightMax,
      weight: weightMin + " - " + weightMax,
      lifeSpan: yearsMin + " - " + yearsMax + " years",
      image,
      temperament
    });
    dispatch({
      type: 'ADD_DOG',
    });
  };
};

export function filterCreated(payload) {
  return {
    type: 'FILTER_CREATED',
    payload,
  };
}

export function filterByTemperament(payload) {
  return {
    type: 'FILTER_TEMPERAMENT',
    payload,
  };
}

export function filterByValue(payload) {
  return {
    type: 'FILTER_BY_VALUE',
    payload,
  };
}

export function cleanState(payload) {
  return {
    type: 'CLEAN_STATE',
    payload,
  };
}

export function reloadFiltered(payload) {
  return {
    type: 'RELOAD_FILTERED',
    payload,
  };
}