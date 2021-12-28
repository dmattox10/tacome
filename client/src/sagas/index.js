import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios"
import { getCapabilities } from "../actions";

const baseURL = process.env.REACT_APP_BASE_URL || 'https://tacotaco.danielmattox.com/taco'
// const navigate = useNavigate()

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest('GET_RANDOM', randomSaga)
  yield takeLatest('GET_CUSTOM', customSaga)
  yield takeLatest('GET_FULL', fullSaga)
  yield takeLatest('GET_COMPLETE', completeSaga)
  yield takeLatest('POST_CUSTOM', postCustomSaga)
  yield takeLatest('POST_FULL', postFullSaga)
  yield takeLatest('CAPABILITIES', getCapSaga)
}

function fetchRandom() {
  return axios({
    method: 'get',
    url: `${baseURL}/random`
  })
}

function* randomSaga() {
  try {
    const response = yield call(fetchRandom)
    const taco = response.data.taco

    yield put ({ type: 'API_CALL_SUCCESS', taco })
    // navigate('/Taco')
  } catch (error) {
    yield put ({ type: 'API_CALL_FAILURE', error })
  }
}

function fetchCustom(data) {
  let queryString = ''
  for (const [key,value] of Object.entries(data)) {
    queryString+=`${key}=${value}&`
  }
  return axios({
    method: 'get',
    url: `${baseURL}/custom?${queryString}`
  })
}

function* customSaga(action) {// may need action as parameter
  try {
    const response = yield call(fetchCustom, action.data)
    const taco = response.data.taco

    yield put ({ type: 'API_CALL_SUCCESS', taco })
    // navigate('/Taco')
  } catch (error) {
    yield put ({ type: 'API_CALL_FAILURE', error })
  }
}

function fetchComplete(id=null) {
  let queryString = ''
  if (id) {
    queryString = `?id=${id}`
  }
  return axios({
    method: 'get',
    url: `${baseURL}/complete${queryString}`
  })
}

function* completeSaga(action) {// may need action as parameter
  try {
    const response = yield call(fetchComplete, action.id)
    const taco = response.data.taco

    yield put ({ type: 'API_CALL_SUCCESS', taco })
    // navigate('/Taco')
  } catch (error) {
    yield put ({ type: 'API_CALL_FAILURE', error })
  }
}

function fetchFull(id=null) {
  let queryString = ''
  if (id) {
    queryString = `?id=${id}`
  }
  return axios({
    method: 'get',
    url: `${baseURL}/full${queryString}`
  })
}

function* fullSaga(action) {// may need action as parameter
  try {
    const response = yield call(fetchFull, action.id)
    const taco = response.data.taco

    yield put ({ type: 'API_CALL_SUCCESS', taco })
    // navigate('/Full')
  } catch (error) {
    yield put ({ type: 'API_CALL_FAILURE', error })
  }
}

function postFull(data) {
  return axios({
    method: 'post',
    url: `${baseURL}/full`,
    data: data
  })
}

function* postFullSaga(action) {// may need action as parameter
  try {
    const response = yield call(postFull, action.data)
    const taco = response.data.taco

    yield put ({ type: 'API_CALL_SUCCESS', taco })
    // navigate('/Full')
  } catch (error) {
    yield put ({ type: 'API_CALL_FAILURE', error })
  }
}

function postCustom(data) {
  return axios({
    method: 'post',
    url: `${baseURL}/custom`,
    data: data
  })
}

function* postCustomSaga(action) {// may need action as parameter
  try {
    const response = yield call(postCustom, action.data)
    const taco = response.data.taco

    yield put ({ type: 'API_CALL_SUCCESS', taco })
    // navigate('/Taco')
  } catch (error) {
    yield put ({ type: 'API_CALL_FAILURE', error })
  }
}

function getCap() {
  return axios({
    method: 'get',
    url: `${baseURL}/capabilities`
  })
}

function* getCapSaga(action) {
  try {
    const response = yield call(getCap, action.data)
    const capabilities = response.data.capabilities

    yield put ({ type: 'CAP_SUCCESS', capabilities})
  } catch (error)  {
    yield put ({ type: 'CAP_FAILURE', error})
  }
}

// import { all, call, delay, put, takeEvery } from 'redux-saga/effects'

// export function* incrementAsync() {
//   yield delay(1000)
//   yield put({type: 'INCREMENT'})
// }

// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

// // single entry point to start all Sagas at once
// export default function* rootSaga() {
//   yield all([
//     call(watchIncrementAsync),
//   ])
// }