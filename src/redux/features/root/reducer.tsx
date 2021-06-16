type action = {
  type: string,
  payload: any
}

const rootState = {
  searchType: 'healthcare-provider',
  selectedTags: [],
}

const rootReducer = (state = rootState, actionInstance: action) => {
  switch (actionInstance.type) {
    case 'SET_SEARCH_TYPE': {
      return {
        ...state,
        searchType: actionInstance.payload
      }
    }
    case 'ADD_SELECTED_TAG': {
      return {
        ...state,
        selectedTags: [...state.selectedTags, actionInstance.payload],
      }
    }
    case 'REMOVE_SELECTED_TAG': {
      return {
        ...state,
        selectedTags: state.selectedTags.filter((target: string): boolean => {
          return target !== actionInstance.payload
        })
      }
    }
    default:
      return state
  }
}

export default rootReducer
