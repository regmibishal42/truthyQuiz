import React,{useState} from 'react';
import { startGame } from '../store/slices/gameinit';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';


const StartGamePage = () => {
    const [userName,setUserName] = useState("");
    const dispatch = useDispatch();
    const startGameHandler = () =>{
        dispatch(startGame({userName}));
    };
    return (
        <div className='flex flex-col justify-center items-center mt-80'>
            <input value={userName} onChange={e=>setUserName(e.target.value)} placeholder='Your Name' className='py-2 px-4 outline-none rounded shadow w-64 mb-6'></input>
            <Button onClick={startGameHandler}>Start Game</Button>
        </div>
    )
}

export default StartGamePage
