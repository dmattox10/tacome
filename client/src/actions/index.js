import types from './types'

const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});

export const incrementAsync = error => ({
  type: types.INCREMENT_ASYNC,
});

const getRandom = () => ({
  type: types.GET_RANDOM,
})

export const getComplete = (data) => ({
  type: types.GET_COMPLETE,
  data
})

export const getCustom = (error) => ({
  type: types.GET_CUSTOM,
})

export const getFull = (error) => ({
  type: types.GET_FULL,
})

export const postFull = (data) => ({
  type: types.POST_FULL,
  data
})

export const postCustom = (data) => ({
  type: types.POST_CUSTOM,
  data
})

export default getRandom;