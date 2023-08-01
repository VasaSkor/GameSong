import React from 'react';
import '../../styles/Game.scss'
import QuizQuestions from "../QuizQuisition";
import Quiz from "../Quiz";

const Game = () => {
    return(
        <div className='game'>
            <QuizQuestions/>
            <Quiz/>
        </div>
    )
};

export default Game;
