const initialState = [];


export default function plantinfo(state=initialState, action) {
  let plantList = state.slice();

  switch (action.type) {


  case 'DELETE_DATA':
    plantList.splice(action.index, 1);
    return plantList;


  case 'FETCH_DATA':
    state.id = -1*state.id;
    return [...state, ...action.plantinfo];

    default:
      return state;
      

  }

}