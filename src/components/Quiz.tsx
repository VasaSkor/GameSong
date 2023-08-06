import React, {useState} from 'react';
import Card from './Card';
import quiz from '../assets/image/quiz.png';
import genshin from '../assets/image/GenshinImpact.png'
import tes from '../assets/image/TES.png'
import minecraft from '../assets/image/Minecraft.png'
import witcher from '../assets/image/Witcher.png'
import left4dead from '../assets/image/Left4Dead.png'
import metro from '../assets/image/Metro2033.png'
import summer from '../assets/image/EndlessSummer.png'
import gta from '../assets/image/GTA.png'
import hearthstone from '../assets/image/Hearthstone.png'
import isaac from '../assets/image/Isaac.png'
import star from '../assets/image/honkai.png'
import fallout from '../assets/image/Fallout4.png'
import '../styles/Quiz.scss';
import { useQuizContext } from './QuizContext';
import {useLanguageContext} from "./LanguageContext";
import translations from "../script/translations";


interface QuizItem {
    id: string;
    title: string;
}

interface QuizItemBase {
    id: string;
    title: string;
    titleLn: string;
    description: string;
    src: string;
    alt: string;
}

const Quiz: React.FC = () => {
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
        AtomicTitle,
        PaydayTitle,
        MarioTitle,

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
        ListenDescription,

        next,
        scoreText,
        scoreTextIn,
        Congratulations,
        NewGame,
    } = translations[currentLanguage];
    const quizItems: QuizItem[] = [
        { id: 'Genshin', title: 'Genshin Impact' },
        { id: 'TES', title: 'Tes V: Skyrim' },
        { id: 'Minecraft', title: 'Minecraft' },
        { id: 'Witcher', title: 'The Witcher 3' },
        { id: 'Left 4 Dead 2', title: 'Left 4 Dead 2' },
    ];

    const quizItemsBase: QuizItemBase[] = [
        { id: 'Genshin',
            title: GenshinTitle,
            titleLn: 'Genshin Impact',
            description: GenshinDescription,
            src: genshin,
            alt: 'Genshin_image',},

        { id: 'Star',
            title: StarRailTitle,
            titleLn: 'Star Rail',
            description: StarRailDescription,
            src: star,
            alt: 'star_image',},

        { id: 'TES',
            title: TesTitle,
            titleLn: 'Senior cartis V: Skyrim',
            description: TesDescription,
            src: tes,
            alt: 'TES_image',},

        { id: 'Minecraft',
            title: MinecraftTitle,
            titleLn: 'metallicus meus',
            description: MinecraftDescription,
            src: minecraft,
            alt: 'Minecraft_image',},

        {  id: 'Witcher',
            title: WitcherTitle,
            titleLn: 'veneficus III, fera venatio',
            description: WitcherDescription,
            src: witcher,
            alt: 'Witcher_image',},

        {  id: 'Left 4 Dead 2',
            title: LeftDeadTitle,
            titleLn: 'IV mortuus reliquit II',
            description: LeftDeadDescription,
            src: left4dead,
            alt: 'Left4dead_image',},

        {  id: 'Metro 2033',
            title: MetroTitle,
            titleLn: 'Metropolitanus 2033',
            description: MetroDescription,
            src: metro,
            alt: 'Metro_image',},

        {  id: 'Everlasting Summer',
            title: EverlastingSummerTitle,
            titleLn: 'Aeterna aestas',
            description: EverlastingSummerDescription,
            src: summer,
            alt: 'EverlastingSummer_image',},

        { id: 'Grand Theft Auto IV',
            title: GTATitle,
            titleLn: 'Grand Furtum Auto IV',
            description: GTADescription,
            src: gta,
            alt: 'GTA_image',},

        {  id: 'Hearthstone',
            title: HearthstoneTitle,
            titleLn: 'Härthstōn',
            description: HearthstoneDescription,
            src: hearthstone,
            alt: 'Hearthstone_image',},

        {  id: 'The Binding of Isaac',
            title: IsaacTitle,
            titleLn: 'Ligatio Isaaci',
            description: IsaacDescription,
            src: isaac,
            alt: 'Isaac_image',},
        {  id: 'Fallout 4',
            title: FalloutTitle,
            titleLn: 'Ausfalen',
            description: FalloutDescription,
            src: fallout,
            alt: 'Fallout4_image',},
    ];

    const additionalQuizItemsBase: QuizItemBase[] = [
        { id: 'Atomic',
            title: AtomicTitle,
            titleLn: 'Atomic Heart',
            description: 'test',
            src: genshin,
            alt: 'Genshin_image',},
        { id: 'Payday',
            title: PaydayTitle,
            titleLn: 'Payday',
            description: 'test',
            src: genshin,
            alt: 'Genshin_image',},
        { id: 'Mario',
            title: MarioTitle,
            titleLn: 'Mario',
            description: 'test',
            src: genshin,
            alt: 'Genshin_image',},
    ];

    const getRandomQuizItems = (correctItemId: string, usedIds: string[]): QuizItem[] => {
        const shuffledBase = [...quizItemsBase, ...additionalQuizItemsBase];
        shuffledBase.sort(() => Math.random() - 0.5);

        const correctItem = shuffledBase.find(item => item.id ===
            correctItemId);

        if (!correctItem) {
            throw new Error(`Correct item with ID ${correctItemId} not found in the database.`);
        }

        const randomItems = shuffledBase
            .filter(item => item.id !== correctItem.id && !usedIds.includes(item.id))
            .slice(0, quizItems.length - 1);

        const allRandomItems = [...randomItems, correctItem];
        allRandomItems.sort(() => Math.random() - 0.5);

        return allRandomItems;

    };

    const getRandomId = (usedIds: string[]): string => {
        const availableIds = quizItemsBase.filter(item =>
            !usedIds.includes(item.id));
        const randomIndex = Math.floor(Math.random() * availableIds.length);
        return availableIds[randomIndex].id;
    };
    const { updateScore, setIsAnswered, score,
        setCurrentIndex } = useQuizContext();
    const [usedQuestionIds, setUsedQuestionIds] =
        useState<string[]>([]);
    const [currentRandomId, setCurrentRandomId]
        = useState<string>(getRandomId(usedQuestionIds));
    const [currentQuizItems, setCurrentQuizItems]
        = useState<QuizItem[]>(() =>
        getRandomQuizItems(currentRandomId, usedQuestionIds)
    );
    const [selectedItemId, setSelectedItemId]
        = useState<string | null>(null);
    const [isCorrectAnswer, setIsCorrectAnswer]
        = useState(false);
    const [answerStates, setAnswerStates]
        = useState<{ [key: string]: boolean }>({});
    const [isCorrectAnswerSelected, setIsCorrectAnswerSelected]
        = useState(false);
    const [answeredQuestions, setAnsweredQuestions] =
        useState(0);
    const [firstQuestionUsed, setFirstQuestionUsed] =
        useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudioId,
        setCurrentAudioId] = useState<string | null>(null);



    const playAudio = async (audioName: string) => {
        const audio = new Audio(`/audio/${audioName}`);

        if (audio.paused) {
            try {
                await audio.play();
            } catch (error) {
                console.error('Error playing audio:', error);
            }
        }
    };


    return (
        <div className='answer'>
            <div className='answer__card_container'>
                <Card
                    card={{
                        id: currentRandomId,
                        title: selectedItemId ? quizItemsBase.find(item =>
                            item.id === selectedItemId)?.title || '***' : '***',
                        titleLn: selectedItemId ? quizItemsBase.find(item =>
                            item.id === selectedItemId)?.titleLn || '***' : '***',
                        description: selectedItemId ? quizItemsBase.find(item =>
                            item.id === selectedItemId)?.description || ListenDescription : ListenDescription,
                        src: selectedItemId ? quizItemsBase.find(item =>
                            item.id === selectedItemId)?.src || quiz : quiz,
                        alt: selectedItemId ? quizItemsBase.find(item =>
                            item.id === selectedItemId)?.alt || 'Quiz_image' : 'Quiz_image',
                        audioSrc: `/audio/${currentRandomId}.mp3`
                    }}
                    setIsPlaying={setIsPlaying}
                    isPlaying={isPlaying}
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
            <div className='answer__card'>
                {currentQuizItems.map((item) => (
                    <div
                        key={item.id}
                        className={`answer__card__block ${
                            answerStates && isCorrectAnswer && item.id !== selectedItemId ? 'disabled' : ''
                        }`}
                        onClick={async () => {
                            if (!answerStates[item.id]) {
                                if (item.id === currentRandomId) {
                                    setIsCorrectAnswer(true);
                                    setSelectedItemId(item.id);
                                    setAnswerStates((prevStates) => ({
                                        ...prevStates,
                                        [item.id]: true,
                                    }));
                                    updateScore(true);
                                    await playAudio('yes.mp3');
                                    setIsCorrectAnswerSelected(true);
                                    setCurrentAudioId(null);
                                    if (!firstQuestionUsed) {
                                        setFirstQuestionUsed(true);
                                        setUsedQuestionIds([currentRandomId]);
                                    }
                                } else {
                                    setIsCorrectAnswer(false);
                                    setAnswerStates((prevStates) => ({
                                        ...prevStates,
                                        [item.id]: false,
                                    }));
                                    updateScore(false);
                                    await playAudio('no.mp3');
                                    setIsCorrectAnswerSelected(false);
                                }
                                setIsAnswered(true);
                            }
                        }}
                    >
                        <div className={`answer__card__block__elipse ${
                            answerStates[item.id] !== undefined
                                ? answerStates[item.id]
                                    ? 'green'
                                    : 'red'
                                : ''
                        }`} />
                        <p className='answer__card__block__text'>
                            {item.id === "Genshin" && GenshinTitle}
                            {item.id === "TES" && TesTitle}
                            {item.id === "Minecraft" && MinecraftTitle}
                            {item.id === "Witcher" && WitcherTitle}
                            {item.id === "Left 4 Dead 2" && LeftDeadTitle}
                            {item.id === "Metro 2033" && MetroTitle}
                            {item.id === "Everlasting Summer" && EverlastingSummerTitle}
                            {item.id === "Grand Theft Auto IV" && GTATitle}
                            {item.id === "Hearthstone" && HearthstoneTitle}
                            {item.id === "The Binding of Isaac" && IsaacTitle}
                            {item.id === "Star" && StarRailTitle}
                            {item.id === "Fallout 4" && FalloutTitle}
                            {item.id === "Atomic" && AtomicTitle}
                            {item.id === "Payday" && PaydayTitle}
                            {item.id === "Mario" && MarioTitle}
                        </p>
                    </div>
                ))}
                <button
                    className={`answer__card__block_but ${
                        isCorrectAnswerSelected ? '' : 'disabled'
                    }`}
                    onClick={() => {
                            const newRandomId = getRandomId(usedQuestionIds);
                            setUsedQuestionIds(prevIds => [...prevIds, newRandomId]);
                            setCurrentRandomId(newRandomId);
                            setCurrentQuizItems(getRandomQuizItems(newRandomId, usedQuestionIds));
                            setSelectedItemId(null);
                            setIsCorrectAnswer(false);
                            setIsCorrectAnswerSelected(false);
                            setAnswerStates({});
                            setIsAnswered(false);
                            setAnsweredQuestions(prevQuestions => prevQuestions + 1);
                            setCurrentIndex(prevIndex => prevIndex  + 1);
                            if (answeredQuestions === 9) {
                                setShowModal(true);
                            }
                    }}
                >
                    {next}
                </button>
                {showModal && (
                    <div className='win-modal'>
                        <div className='win'>
                            <p className='win_text'>{Congratulations}</p>
                            <p className='win_text'>{scoreText} {score} {scoreTextIn} 50</p>
                            <button className='win_but' onClick={() => window.location.reload()}>
                                {NewGame}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
