type action = {
  type: string,
  payload: any
}

const rootState = {
  searchType: 'healthcare-provider',
  selectedTags: [],
  searchSpecialityCode: '',
  isOpenHelpModal: false,
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
    case 'SET_SEARCH_SPECIALITY_CODE': {
      return {
        ...state,
        searchSpecialityCode: actionInstance.payload
      }
    }
    case 'CLEAR_SELECTED_TAG': {
      return {
        ...state,
        selectedTags: [],
      }
    }
    case 'SET_IS_OPEN_HELP_MODAL': {
      return {
        ...state,
        isOpenHelpModal: actionInstance.payload
      }
    }
    default:
      return state
  }
}

export default rootReducer
