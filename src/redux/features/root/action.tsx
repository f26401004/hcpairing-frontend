type action = {
  type: string,
  payload: any
}

export const setSearchType = (payload: string): action => ({
  type: 'SET_SEARCH_TYPE',
  payload
})

export const addSelectedTag = (payload: string): action => ({
  type: 'ADD_SELECTED_TAG',
  payload
})

export const removeSelectedTag = (payload: string): action => ({
  type: 'REMOVE_SELECTED_TAG',
  payload
})
