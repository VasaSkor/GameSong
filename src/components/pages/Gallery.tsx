import React, { useState } from 'react';
import Card from "../Card";
import '../../styles/Gallery.scss'
import genshin from '../../assets/image/GenshinImpact.png'
import tes from '../../assets/image/TES.png'
import minecraft from '../../assets/image/Minecraft.png'
import witcher from '../../assets/image/Witcher.png'
import left4dead from '../../assets/image/Left4Dead.png'
import metro from '../../assets/image/Metro2033.png'
import summer from '../../assets/image/EndlessSummer.png'
import gta from '../../assets/image/GTA.png'
import hearthstone from '../../assets/image/Hearthstone.png'
import isaac from '../../assets/image/Isaac.png'
import star from '../../assets/image/honkai.png'
import fallout from '../../assets/image/Fallout4.png'
import { useLanguageContext } from '../LanguageContext'
import translations from '../../script/translations'

const Gallery: React.FC = () => {
    const { currentLanguage } = useLanguageContext();
    const {GenshinTitle,
            TesTitle,
            MinecraftTitle,
            WitcherTitle,
            LeftDeadTitle,
            MetroTitle,
            EverlastingSummerTitle,
            GTATitle,
            HearthstoneTitle,
            IsaacTitle,
            StarRailTitle,
            FalloutTitle,

            GenshinDescription,
            TesDescription,
            MinecraftDescription,
            WitcherDescription,
            LeftDeadDescription,
            MetroDescription,
            EverlastingSummerDescription,
            GTADescription,
            HearthstoneDescription,
            IsaacDescription,
            StarRailDescription,
            FalloutDescription,
    } = translations[currentLanguage];
    const [isPlaying,
        setIsPlaying] = useState(false);
    const [currentAudioId,
        setCurrentAudioId] = useState<string | null>(null);

    return(
        <div className='gallery'>
            <div className='card_container'>
                <Card
                    card={{
                        id: 'Genshin',
                        title: GenshinTitle,
                        titleLn: 'Genšina ietekme',
                        description: GenshinDescription,
                        src: genshin,
                        alt: 'Genshin_image',
                        audioSrc: '/audio/Genshin.mp3'
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
            <div className='card_container'>
                <Card card={{
                    id: 'Tes',
                    title: TesTitle,
                    titleLn: 'Senior cartis V: Skyrim',
                    description: TesDescription,
                    src: tes,
                    alt: 'TES_image',
                    audioSrc: '/audio/Tes.mp3'
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
            <div className='card_container'>
                <Card card={{
                    id: 'Minecraft',
                    title: MinecraftTitle,
                    titleLn: 'metallicus meus',
                    description: MinecraftDescription,
                    src: minecraft,
                    alt: 'Minecraft_image',
                    audioSrc: '/audio/Minecraft.mp3'
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
            <div className='card_container'>
                <Card card={{
                    id: 'Witcher',
                    title: WitcherTitle,
                    titleLn: 'veneficus III, fera venatio',
                    description: WitcherDescription,
                    src: witcher,
                    alt: 'Witcher_image',
                    audioSrc: '/audio/Witcher.mp3'
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
            <div className='card_container'>
                <Card card={{
                    id: 'Left 4 Dead 2',
                    title: LeftDeadTitle,
                    titleLn: 'IV mortuus reliquit II',
                    description: LeftDeadDescription,
                    src: left4dead,
                    alt: 'Left4dead_image',
                    audioSrc: '/audio/Left 4 Dead 2.mp3'
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
            <div className='card_container'>
                <Card card={{
                    id: 'Metro 2033',
                    title: MetroTitle,
                    titleLn: 'Metropolitanus 2033',
                    description: MetroDescription,
                    src: metro,
                    alt: 'Metro_image',
                    audioSrc: '/audio/Metro 2033.mp3'
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
            <div className='card_container'>
                <Card card={{
                    id: 'Everlasting Summer',
                    title: EverlastingSummerTitle,
                    titleLn: 'Aeterna aestas',
                    description: EverlastingSummerDescription,
                    src: summer,
                    alt: 'EverlastingSummer_image',
                    audioSrc: '/audio/Everlasting Summer.mp3'
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
            <div className='card_container'>
                <Card card={{
                    id: 'Grand Theft Auto IV',
                    title: GTATitle,
                    titleLn: 'Grand Furtum Auto IV',
                    description: GTADescription,
                    src: gta,
                    alt: 'GTA_image',
                    audioSrc: '/audio/Grand Theft Auto IV.mp3'
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
            <div className='card_container'>
                <Card card={{
                    id: 'Hearthstone',
                    title: HearthstoneTitle,
                    titleLn: 'Härthstōn',
                    description: HearthstoneDescription,
                    src: hearthstone,
                    alt: 'Hearthstone_image',
                    audioSrc: '/audio/Hearthstone.mp3'
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
            <div className='card_container'>
                <Card card={{
                    id: 'The Binding of Isaac',
                    title: IsaacTitle,
                    titleLn: 'Ligatio Isaaci',
                    description: IsaacDescription,
                    src: isaac,
                    alt: 'Isaac_image',
                    audioSrc: '/audio/The Binding of Isaac.mp3'
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
            <div className='card_container'>
                <Card card={{
                    id: 'Star Rail',
                    title: StarRailTitle,
                    titleLn: 'Stella Rail',
                    description: StarRailDescription,
                    src: star,
                    alt: 'Isaac_image',
                    audioSrc: '/audio/Star.mp3'
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
            <div className='card_container'>
                <Card card={{
                    id: 'Fallout 4',
                    title: FalloutTitle,
                    titleLn: 'Ispasti',
                    description: FalloutDescription,
                    src: fallout,
                    alt: 'fallout_image',
                    audioSrc: '/audio/Fallout 4.mp3'
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
    )
};

export default Gallery;
