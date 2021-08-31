import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {restartGame} from '../store/slices/gameinit';
import Button from '../components/Button';

const EndGamePage = () => {
    const dispatch = useDispatch();
    const answers = useSelector(state => state.quiz.answers);
    const score = useSelector(state => state.quiz.score);
    const restartHandler = () => {
        dispatch(restartGame());
    }
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl text-purple-500 my-4'>Game Over</h1>
            <p className='text-2xl mb-4'>Your Score Was:<span className='text-purple-400'>
                    {score}/10</span>
            </p>
            <Button onClick={restartHandler}>Restart Game</Button>
            <div className='mt-4 p-4'>
                {
                answers.map(answer => (<div className='border-b-2 border-purple-500 flex justify-between'>
                    <p className='p-2 mr-2'>{
                        answer.questions
                    }
                        -<span className={`p-2 ${answer.correctAnswer === answer.answer ? 'text-green-600': 'text-red-600'}`}> {
                        answer.answer
                        }</span>
                        </p>
                </div>))
            } </div>
        </div>
    );
}

export default EndGamePage;
