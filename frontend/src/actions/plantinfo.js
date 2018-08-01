export const fetchData = () => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch("/api/plantinfo/", {headers, method: "GET"})
      .then(res => res.json())
      .then(plantinfo => {
        return dispatch({
          type: 'FETCH_DATA',
          plantinfo
        })
      })
  }
}


export const deleteData = index => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let dataId = getState().plantinfo[index].id;

    return fetch(`/api/plantinfo/${dataId}/`, {headers, method: "DELETE"})
      .then(res => {
        if (res.ok) {
          return dispatch({
            type: 'DELETE_DATA',
            index
          })
        }
      })
  }
}