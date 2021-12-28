import types from './types'

const getRandom = () => ({
  type: types.GET_RANDOM,
})

export const getComplete = () => ({
  type: types.GET_COMPLETE,
})

export const getCustom = () => ({
  type: types.GET_CUSTOM,
})

export const getFull = () => ({
  type: types.GET_FULL,
})

export const postFull = (data) => ({
  type: types.POST_FULL,
  payload: data
})

export const postCustom = (data) => ({
  type: types.POST_CUSTOM,
  payload: data
})

export const getCapabilities = () => ({
  type: types.CAPABILITIES,
})

export const updatePath = (path) => ({
  type: types.UPDATE_PATH,
  payload: path
})

export default getRandom;