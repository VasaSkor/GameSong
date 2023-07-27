import React from 'react';
import MyInput from "./UI/input/MyInput";
import '../styles/AudioPlayer.scss'

interface AudioPlayerData {
    id: string;
    src: string;
    alt: string;
    srcVolume: string;
    altVolume: string;
}

interface AudioPlayerProps {
    children?: React.ReactNode;
    audioPlayer: AudioPlayerData;
}

const AudioPlayer = ({ audioPlayer }: AudioPlayerProps) => {
    return (
        <div className='audio_player'>
            <img
                className='audio_player_change_btn'
                src={audioPlayer.src}
                alt={audioPlayer.alt}
            />
            <MyInput value={0} min={0} max={100} step={0.1} width="80%" />
            <div className='audio_player_timeline'>
                <p className='audio_player_timeline-text'>0:00</p>
                <p className='audio_player_timeline-text'>2:36</p>
            </div>
            <img
                className='audio_player_change_btn'
                src={audioPlayer.srcVolume}
                alt={audioPlayer.altVolume}
            />
            <MyInput className='change_volume' value={50} min={0} max={100} step={0.1} width="50%" />
        </div>
    );
};

export default AudioPlayer;
