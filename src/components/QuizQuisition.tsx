import React from 'react';
import '../styles/QuizQuisition.scss';
import { useQuizContext } from './QuizContext';

interface QuizContainerProps {
    text: string;
    isCurrentQuestion: boolean
}

const QuizContainer: React.FC<QuizContainerProps> = ({ text, isCurrentQuestion }) => {
    return (
        <div className={`quiz_container ${isCurrentQuestion ? 'current' : ''}`}>
            <p className='quiz_container_text'>{text}</p>
        </div>
    );
};

const QuizQuestions: React.FC = () => {
    const { score, currentIndex } = useQuizContext();
    const quizItems: string[] = [
        'Beginner',
        'Easy',
        'Medium',
        'Hard',
        'Adept',
        'Legend',
        'Great',
        'Cool',
        'Titan',
        'God',
    ];

    return (
        <div className='quiz'>
            <div className='quiz_block'>
                {quizItems.map((item, index) => (
                    <QuizContainer
                        key={item}
                        text={item}
                        isCurrentQuestion={index === currentIndex}
                    />
                ))}
            </div>
            <div className='score'>
                <p className='score_text'>Score</p>
                <p className='score_text'>{score}</p>
            </div>
        </div>
    );
};

export default QuizQuestions;
