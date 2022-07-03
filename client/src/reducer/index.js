const initialState = {
  dogs: [],
  backupDogs: [],
  temperaments: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_DOGS':
      return {
        ...state,
        dogs: action.payload,
        backupDogs: action.payload,
      };
    case 'ADD_DOG':
      return {
        ...state,
      };
    case 'CLEAN_STATE':
      const detailC = action.payload==='detail'?[]:state.detail;
      const dogsC = action.payload==='dogs'?[]:state.backupDogs;
      return {
        ...state,
        detail: detailC,
        dogs: dogsC
      }
    case 'FILTER_TEMPERAMENT':
      const allDogs = state.dogs;
      let temperFiltered =[]
      temperFiltered = action.payload === "all" ? state.backupDogs :
      temperFiltered = allDogs.filter(el => {
        if(el.hasOwnProperty('temperament')) return el.temperament.includes(action.payload)
        let temps = el.temperaments.map(el => el.name);
        return temps.includes(action.payload);
      })
      if(!temperFiltered.length) {
        temperFiltered=temperFiltered.concat(allDogs, "Not filtered breeds with that temperament")
      }
      return {
        ...state,
        dogs: temperFiltered,
      };
    case 'GET_TEMPERAMENTS':
      return {
        ...state,
        temperaments: action.payload,
      };
    case 'RELOAD_FILTERED':
      const filterDog = action.payload.slice(0,action.payload.length-1)
    return {
      ...state,
      dogs: filterDog,
    };
    case 'SEARCH_BY_NAME':
      return {
        ...state,
        dogs: action.payload,
      };
    case 'FILTER_CREATED':
      const db = state.backupDogs;
       const createdFilter =
        action.payload === "CREATED"
          ? db.filter((el) => el.createdInDb)
          : db.filter((el) => !el.createdInDb);
      return {
        ...state,
        dogs: action.payload === "ALL" ? state.backupDogs : createdFilter,
      };
    case 'GET_DETAIL':
      return {
        ...state,
        detail: action.payload,
      };
    case 'FILTER_BY_VALUE':
      const info = state.dogs;
      const sortedArr =
        action.payload === "AZ"
          ? info.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : action.payload === "ZA"
          ? info.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            })
          : action.payload === "HIGH"
          ? info.sort(function (a, b) {
              if (
                Number(a.weight.split("-")[0]) > Number(b.weight.split("-")[0])
              ) {
                return -1;
              }
              if (
                Number(b.weight.split("-")[0]) > Number(a.weight.split("-")[0])
              ) {
                return 1;
              }
              return 0;
            })
          : info.sort(function (a, b) {
              if (
                Number(a.weight.split("-")[0]) > Number(b.weight.split("-")[0])
              ) {
                return 1;
              }
              if (
                Number(b.weight.split("-")[0]) > Number(a.weight.split("-")[0])
              ) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedArr,
      };
    default:
      return state;
  }
}

export default rootReducer;
