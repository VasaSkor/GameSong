import React, {useRef, useEffect, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import '../styles/AudioPlayer.scss';
import play from '../assets/icon/Play.png';
import pause from '../assets/icon/Pause.png';
import volumeOn from '../assets/icon/Volume_icon.svg';
import volumeOff from '../assets/icon/volume-off.svg';


interface AudioPlayerData {
    id: string;
    alt: string;
    altVolume: string;
}

interface AudioPlayerProps {
    audioPlayer: AudioPlayerData;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    currentAudioId: string | null;
    setCurrentAudioId: React.Dispatch<React.SetStateAction<string | null>>;
}

const AudioPlayer = ({
                         audioPlayer,
                         isPlaying,
                         setIsPlaying,
                         currentAudioId,
                         setCurrentAudioId,
                     }: AudioPlayerProps) => {
    const [isPlayingIcon, setIsPlayingIcon] = useState<boolean>(isPlaying);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [progressPercentage,
        setProgressPercentage] = useState<number>(0);
    const [volume, setVolume] = useState<number>(50);



    const handleSeek = (seekValue: number) => {
        if (audioRef.current) {
            const newTime = (seekValue / 100) * audioRef.current.duration;
            setCurrentTime(newTime);
            audioRef.current.currentTime = newTime;
        }
    };

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            setIsPlaying(!isPlaying);
            setIsPlayingIcon(!isPlaying);
            setCurrentAudioId(audioPlayer.id);
        }
    };

    const handleAudioEnded = () => {
        setCurrentTime(0);
        setProgressPercentage(0);
        setIsPlaying(false);
        setIsPlayingIcon(false)
    };

    useEffect(() => {
        if (audioRef.current) {
            if (currentAudioId === audioPlayer.id) {
                audioRef.current.play();
                setIsPlaying(true);
                setIsPlayingIcon(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
                setIsPlayingIcon(false);
            }
        }
        const handleTimeUpdate = () => {
            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
                const progressPercentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
                setProgressPercentage(progressPercentage);
            }
        };

        const handleLoadedMetadata = () => {
            if (audioRef.current) {
                setDuration(audioRef.current.duration);
            }
        };

        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
                audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audioRef.current.addEventListener('ended', handleAudioEnded);
            }
        };
    }, [audioPlayer.id, currentAudioId, setIsPlaying, handleAudioEnded]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleVolumeChange = (value: number) => {
        setVolume(value);
        if (audioRef.current) {
            audioRef.current.volume = value / 100;
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            if (volume > 0) {
                // Был включен звук, выключаем его
                audioRef.current.volume = 0;
                setVolume(0);
            } else {
                // Был выключен звук, включаем его и устанавливаем предыдущую громкость
                const newVolume = volume === 0 ? 50 : volume;
                audioRef.current.volume = newVolume / 100;
                setVolume(newVolume);
            }
        }
    };


    return (
        <div className='audio_player'>
            <img
                className={`audio_player_change_btn ${isPlaying ? 'playing' : ''}`}
                src={isPlayingIcon ? pause : play}
                alt={audioPlayer.alt}
                onClick={togglePlay}
            />
            <MyInput className='change_timeline'
                     value={progressPercentage}
                     min={0}
                     max={100}
                     step={0.1}
                     width="80%"
                     onSeek={handleSeek} />
            <div className='audio_player_timeline'>
                <p className='audio_player_timeline-text'>{formatTime(currentTime)}</p>
                <p className='audio_player_timeline-text'>{formatTime(duration)}</p>
            </div>
            <img
                className='audio_player_change_btn'
                src={volume > 0 ? volumeOn : volumeOff}
                alt={audioPlayer.altVolume}
                onClick={toggleMute}
            />
            <MyInput className='change_volume'
                     value={volume}
                     min={0}
                     max={100}
                     step={0.1}
                     width="50%"
                     onChange={handleVolumeChange} />
            <audio ref={audioRef}>
                <source src={`/audio/${audioPlayer.id}.mp3`} />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioPlayer;
