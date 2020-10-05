import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';


// ---------- GENERATOR FUNCTIONS ---------- 
// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery( 'FETCH_MOVIES', getMovies)
    // yield takeEvery( 'UPDATE_MOVIES', updateMovies)
    yield takeEvery( 'FETCH_DETAILS', getDetails)
    yield takeEvery( 'FETCH_GENRE', getGenre)
}

function* getGenre(action) {
    try{
        console.log('getMovies generator')
        const response = yield axios.get(`/genres/${action.payload}`);
        yield console.log('In getDetails', response.data);
        yield put ({ type: 'SET_GENRES', payload: response.data})
    }
    catch(error) {
        console.log(' Trouble fetching genres', error)
    }
}

function* getDetails(action) {
    try{
        console.log('getMovies generator')
        const response = yield axios.get(`/genres/${action.payload}`);
        yield console.log('In getDetails', response.data);
        yield put ({ type: 'SET_DETAILS', payload: response.data})
    }
    catch(error) {
        console.log(' Trouble fetching details', error)
    }
}

function* getMovies() {
    try{
        console.log('getMovies generator')
        const response = yield axios.get('/movies');
        yield console.log('In getMovies', response.data);
        yield put ({ type: 'SET_MOVIES', payload: response.data})
    }
    catch(error) {
        console.log( 'Trouble fetching movies', error )
    }
};

// function* updateMovies() {
//     try{
//         console.log('UpdateGenres generator')
//         const response = yield axios.get('/genre');
//         yield console.log('In getUpdateGenres', response.data);
//     }
//     catch(error) {
//         console.log( 'Trouble fetching movies', error )
//     }
// };

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
//Used to store the movie details
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
