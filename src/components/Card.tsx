import React from 'react';
import AudioPlayer from "./AudioPlayer";
import play from "../assets/icon/Play.png"
import volume from "../assets/icon/Volume_icon.svg"
import '../styles/Card.scss'
interface CardData {
    id: string;
    title: string;
    titleLn: string;
    description: string;
    src: string;
    alt: string;
}

interface CardsProps {
    card: CardData;
}

const Card = ({card}: CardsProps) => {
    return (
        <div id={card.id} className="card">
            <div className="card_contain">
                <img className='card_image' src={card.src} alt={card.alt}></img>
                <div className='card_audio'>
                    <h2 className='card_audio_title'>{card.title}</h2>
                    <h3 className='card_audio_title_ln'>{card.titleLn}</h3>
                    <AudioPlayer audioPlayer={{id: 'time',
                        src: play,
                        alt: 'play_btn',
                        srcVolume: volume,
                        altVolume: 'volume_icon'
                    }}/>
                </div>
            </div>
            <div className='card_description'>
                <p className='card_description_text'>{card.description}</p>
            </div>
        </div>
    );
};

export default Card;