import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL || 'https://tacotaco.danielmattox.com/taco'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest('GET_RANDOM', randomSaga)
  yield takeLatest('GET_CUSTOM', customSaga)
  yield takeLatest('GET_FULL', fullSaga)
  yield takeLatest('GET_COMPLETE', completeSaga)
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/rCustom"
  });
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

function* customSaga() {// may need action as parameter
  try {
    const response = yield call(fetchCustom, action.data)
    const taco = response.data.taco

    yield put ({ type: 'API_CALL_SUCCESS', taco })
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

function* completeSaga() {// may need action as parameter
  try {
    const response = yield call(fetchComplete, action.id)
    const taco = response.data.taco

    yield put ({ type: 'API_CALL_SUCCESS', taco })
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

function* fullSaga() {// may need action as parameter
  try {
    const response = yield call(fetchFull, action.id)
    const taco = response.data.taco

    yield put ({ type: 'API_CALL_SUCCESS', taco })
  } catch (error) {
    yield put ({ type: 'API_CALL_FAILURE', error })
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