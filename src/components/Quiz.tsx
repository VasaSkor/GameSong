import React, { useState } from 'react';
import Card from './Card';
import quiz from '../assets/image/quiz.png';
import '../styles/Quiz.scss';

interface QuizItem {
    id: string;
    text: string;
}

const Quiz: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudioId,
        setCurrentAudioId] = useState<string | null>(null);

    const quizItems: QuizItem[] = [
        { id: 'Genshin', text: 'Genshin Impact' },
        { id: 'TES', text: 'TES' },
        { id: 'Witcher', text: 'Witcher' },
        { id: 'Witcher23', text: 'Witcher23' },
        { id: 'Test', text: 'Test' },
    ];

    return (
        <div className='answer'>
            <div className='answer__card'>
                {quizItems.map((item) => (
                    <div key={item.id} className='answer__card__block'>
                        <div className='answer__card__block__elipse' />
                        <p className='answer__card__block__text'>
                            {item.text}
                        </p>
                    </div>
                ))}
                <button className='answer__card__block_but'>
                   Next
                </button>
            </div>
            <div className='answer__card_container'>
                <Card
                    card={{
                        id: 'Genshin',
                        title: '***',
                        titleLn: '***',
                        description: 'Послушайте аудио!!!',
                        src: quiz,
                        alt: 'Quiz_image',
                    }}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    currentAudioId={currentAudioId}
                    setCurrentAudioId={(trackId) => {
                        if (currentAudioId === trackId) {
                            setCurrentAudioId(null);
                        } else {
                            setCurrentAudioId(trackId);
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Quiz;
