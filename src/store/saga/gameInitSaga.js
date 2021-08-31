import {take,fork,put,call,delay, cancel} from 'redux-saga/effects';
import { startGame,cancelGame } from '../slices/gameinit';
import {fetchQuizFromApi} from '../../utils/api';
import {fetchQuestionSuccess,fetchQuestionFail} from '../slices/gameSlice';

function* fetchQuestionsSaga() {
    try{
        yield delay(1000);
        const data = yield call(fetchQuizFromApi);
        yield put(fetchQuestionSuccess(data));
    }catch(error){
        yield put(fetchQuestionFail('There was an Error Fetching the Questions'));
    }
}

function* cancelFetchQuiz(forkedSaga){
    while(true){
        yield take(cancelGame.type);
        yield cancel(forkedSaga);
    }
}


export default function* startGameSaga() {
    while(true){
        yield take(startGame.type)
        const forkedSaga = yield fork(fetchQuestionsSaga);
        yield fork(cancelFetchQuiz,forkedSaga);
    }
}