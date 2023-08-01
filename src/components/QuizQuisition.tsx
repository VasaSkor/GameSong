import React from 'react';
import '../styles/QuizQuisition.scss';

interface QuizContainerProps {
    text: string;
}

const QuizContainer: React.FC<QuizContainerProps> = ({ text }) => {
    return (
        <div className='quiz_container'>
            <p className='quiz_container_text'>{text}</p>
        </div>
    );
};

const QuizQuestions: React.FC = () => {
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
                {quizItems.map((item) => (
                    <QuizContainer key={item} text={item} />
                ))}
            </div>
            <div className='score'>
                <p className='score_text'>Score</p>
                <p className='score_text'>0</p>
            </div>
        </div>
    );
};

export default QuizQuestions;
