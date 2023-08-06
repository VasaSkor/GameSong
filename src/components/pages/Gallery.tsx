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

const Gallery: React.FC = () => {
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
                        title: 'Genshin impact',
                        titleLn: 'Genšina ietekme',
                        description: 'Genshin Impact is an open world action RPG inspired by The Legend of Zelda' +
                            ' series. Players are waiting for the fantasy world of Teyvat, which is full of ruins' +
                            ' of ancient cities, fortresses, magical forests and the like.',
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
                    title: 'Tes V: Skyrim',
                    titleLn: 'Senior cartis V: Skyrim',
                    description: 'The Elder Scrolls V: Skyrim — is a multi-platform open world RPG' +
                        ' developed by Bethesda Game Studios and published by Bethesda Softworks.',
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
                    title: 'Minecraft',
                    titleLn: 'metallicus meus',
                    description: 'Minecraft is a game for those who like to put blocks on top of each' +
                        ' other and find adventures on their own.',
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
                    title: 'The Witcher 3: Wild Hunt',
                    titleLn: 'veneficus III, fera venatio',
                    description: 'The Witcher 3: Wild Hunt is an action role-playing game with a third-person' +
                        ' perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher.',
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
                    title: 'Left 4 Dead 2',
                    titleLn: 'IV mortuus reliquit II',
                    description: 'Left 4 Dead 2 - the game focuses on four new Survivors,' +
                        ' fighting against hordes of zombies known as the Infected, who develop' +
                        ' severe psychosis and act extremely aggressive.',
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
                    title: 'Metro 2033',
                    titleLn: 'Metropolitanus 2033',
                    description: 'Metro 2033 is a first-person shooter video game. It is predominantly set' +
                        ' within the tunnels of the Moscow Metro, though some sections take place on the surface,' +
                        ' in the ruins of Moscow.',
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
                    title: 'Everlasting Summer',
                    titleLn: 'Aeterna aestas',
                    description: 'Everlasting Summer is a visual novel that tells the story of a man living in' +
                        ' modern Russia who finds himself mysteriously transported to a summer camp somewhere' +
                        ' in the Soviet Union.',
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
                    title: 'Grand Theft Auto IV',
                    titleLn: 'Grand Furtum Auto IV',
                    description: 'Grand Theft Auto IV follows the story of Niko Bellic;' +
                        ' Before the events of the game,' +
                        ' he fought in the Bosnian War as a teenager, was betrayed by one of the members' +
                        ' (which got most of the squad killed) and is now obsessed with getting revenge.',
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
                    title: 'Hearthstone',
                    titleLn: 'Härthstōn',
                    description: 'Hearthstone - the game is a turn-based card game between two opponents,' +
                        ' using constructed decks of 30 cards along with a selected hero with a unique power.',
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
                    title: 'The Binding of Isaac',
                    titleLn: 'Ligatio Isaaci',
                    description: 'The Binding of Isaac is a top-down dungeon crawler game, presented using' +
                        ' two-dimensional sprites, in which the player controls Isaac or other unlockable' +
                        ' characters as they explore the dungeons located in Isaac\'s basement.',
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
                    title: 'Star Rail',
                    titleLn: 'Stella Rail',
                    description: 'Honkai Star Rail is a free-to-play turn-based RPG that uses original characters' +
                        ' and familiar units from HoYoverse\'s other beloved title – Honkai Impact. However, unlike ' +
                        'Genshin Impact and Honkai Impact, Star Rail purely focuses on turn-based action.',
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
                    id: 'Fallout',
                    title: 'Fallout',
                    titleLn: 'Fallout',
                    description: 'Fallout 4 is set in and around the Boston area in 2287, 10 ' +
                        'years after Fallout 3. Along the way, the Sole Survivor discovers a' +
                        ' world in fear of a mysterious organization known as the Institute,' +
                        ' consumed by paranoia of a race of robotic yet also biological human' +
                        '-like beings known as synths.',
                    src: fallout,
                    alt: 'fallout_image',
                    audioSrc: '/audio/fallout4.mp3'
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
