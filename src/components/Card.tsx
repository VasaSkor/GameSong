import React from 'react';
import AudioPlayer from './AudioPlayer';
import '../styles/Card.scss';

interface CardProps {
    card: {
        id: string;
        title: string;
        titleLn: string;
        description: string;
        src: string;
        alt: string;
    };
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    currentAudioId: string | null;
    setCurrentAudioId: React.Dispatch<React.SetStateAction<string | null>>;
}

const Card: React.FC<CardProps> = ({
                                       card,
                                       isPlaying,
                                       setIsPlaying,
                                       currentAudioId,
                                       setCurrentAudioId,
                                   }) => {

    return (
        <div className="card">
            <div className="card_contain">
            <img className="card_image" src={card.src} alt={card.alt} />
            <div className="card_audio">
                <h2 className="card_audio_title">{card.title}</h2>
                <h3 className="card_audio_title_ln">{card.titleLn}</h3>
                <AudioPlayer
                    audioPlayer={{
                        id: card.id,
                        alt: 'Play_button',
                        altVolume: 'Volume_icon',
                    }}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    currentAudioId={currentAudioId}
                    setCurrentAudioId={setCurrentAudioId}
                />
            </div>
            </div>
            <div className='card_description'>
                <p className='card_description_text'>{card.description}</p>
            </div>
        </div>
    );
};

export default Card;
