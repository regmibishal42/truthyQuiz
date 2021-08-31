import {take,race,put,delay} from 'redux-saga/effects';
import { fetchQuestionSuccess } from '../slices/gameSlice';
import {finishGame} from '../slices/gameinit';
import {answerQuestion,nextQuestion} from '../slices/gameSlice';

function* answersSaga(){
    for(let i=0;i<10;i++){
        yield take(answerQuestion.type);
        yield put(nextQuestion());
    }
}


export default function* gameSaga(){
    while(true){
        yield take(fetchQuestionSuccess.type);

        yield race({
            delay:delay(60000),
            done:answersSaga()
        });
        yield put(finishGame());
    } 
}