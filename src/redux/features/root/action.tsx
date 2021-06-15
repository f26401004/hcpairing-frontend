type action = {
  type: string,
  payload: any
}

export const setSearchType = (payload: string): action => ({
  type: 'SET_SEARCH_TYPE',
  payload
})
