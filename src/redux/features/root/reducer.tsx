type action = {
  type: string,
  payload: any
}

const rootState = {
  searchType: 'healthcare-provider'
}

export default (state = rootState, actionInstance: action) => {
  switch (actionInstance.type) {
    case 'SET_SEARCH_TYPE': {
      return {
        ...state,
        searchType: actionInstance.payload
      }
    }
    default:
      return state
  }
}