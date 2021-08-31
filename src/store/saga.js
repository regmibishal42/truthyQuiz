import {all} from 'redux-saga/effects';
import startGameSaga from './saga/gameInitSaga';
import gameSaga from './saga/game';

export default function* rootSaga(){
    yield all([startGameSaga(),gameSaga()]);
}