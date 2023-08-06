import React from 'react';
import { QuizProvider } from '../QuizContext';
import '../../styles/Game.scss'
import QuizQuestions from "../QuizQuisition";
import Quiz from "../Quiz";

const Game = () => {
    return(
        <div className='game'>
            <QuizProvider>
                <QuizQuestions/>
                <Quiz/>
            </QuizProvider>
        </div>
    )
};

export default Game;
