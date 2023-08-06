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

const quizItems: QuizItem[] = [
    { id: 'Genshin', title: 'Genshin Impact' },
    { id: 'TES', title: 'Tes V: Skyrim' },
    { id: 'Minecraft', title: 'Minecraft' },
    { id: 'Witcher', title: 'The Witcher 3' },
    { id: 'Left 4 Dead 2', title: 'Left 4 Dead 2' },
];

const quizItemsBase: QuizItemBase[] = [
    { id: 'Genshin',
        title: 'Genshin Impact',
        titleLn: 'Genshin Impact',
        description: 'Genshin Impact is an open world action RPG inspired by The Legend of Zelda series.' +
            ' Players are waiting for the fantasy world of Teyvat, which is full of ruins of' +
            ' ancient cities, fortresses, magical forests and the like.',
        src: genshin,
        alt: 'Genshin_image',},

    { id: 'Star',
        title: 'Star Rail',
        titleLn: 'Star Rail',
        description: 'star',
        src: star,
        alt: 'star_image',},

    { id: 'TES',
        title: 'Tes V: Skyrim',
        titleLn: 'Senior cartis V: Skyrim',
        description: 'The Elder Scrolls V: Skyrim — is a multi-platform open world RPG' +
            ' developed by Bethesda Game Studios and published by Bethesda Softworks.',
        src: tes,
        alt: 'TES_image',},

    { id: 'Minecraft',
        title: 'Minecraft',
        titleLn: 'metallicus meus',
        description: 'Minecraft is a game for those who like to put blocks on top of each' +
            ' other and find adventures on their own.',
        src: minecraft,
        alt: 'Minecraft_image',},

    {  id: 'Witcher',
        title: 'The Witcher 3: Wild Hunt',
        titleLn: 'veneficus III, fera venatio',
        description: 'The Witcher 3: Wild Hunt is an action role-playing game with a third-person' +
            ' perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher.',
        src: witcher,
        alt: 'Witcher_image',},

    {  id: 'Left 4 Dead 2',
        title: 'Left 4 Dead 2',
        titleLn: 'IV mortuus reliquit II',
        description: 'Left 4 Dead 2 - the game focuses on four new Survivors,' +
            ' fighting against hordes of zombies known as the Infected, who develop' +
            ' severe psychosis and act extremely aggressive.',
        src: left4dead,
        alt: 'Left4dead_image',},

    {  id: 'Metro 2033',
        title: 'Metro 2033',
        titleLn: 'Metropolitanus 2033',
        description: 'Metro 2033 is a first-person shooter video game. It is predominantly set' +
            ' within the tunnels of the Moscow Metro, though some sections take place on the surface,' +
            ' in the ruins of Moscow.',
        src: metro,
        alt: 'Metro_image',},

    {  id: 'Everlasting Summer',
        title: 'Everlasting Summer',
        titleLn: 'Aeterna aestas',
        description: 'Everlasting Summer is a visual novel that tells the story of a man living in' +
            ' modern Russia who finds himself mysteriously transported to a summer camp somewhere' +
            ' in the Soviet Union.',
        src: summer,
        alt: 'EverlastingSummer_image',},

    { id: 'Grand Theft Auto IV',
        title: 'Grand Theft Auto IV',
        titleLn: 'Grand Furtum Auto IV',
        description: 'Grand Theft Auto IV follows the story of Niko Bellic;' +
            ' Before the events of the game,' +
            ' he fought in the Bosnian War as a teenager, was betrayed by one of the members' +
            ' (which got most of the squad killed) and is now obsessed with getting revenge.',
        src: gta,
        alt: 'GTA_image',},

    {  id: 'Hearthstone',
        title: 'Hearthstone',
        titleLn: 'Härthstōn',
        description: 'Hearthstone - the game is a turn-based card game between two opponents,' +
            ' using constructed decks of 30 cards along with a selected hero with a unique power.',
        src: hearthstone,
        alt: 'Hearthstone_image',},

    {  id: 'The Binding of Isaac',
        title: 'The Binding of Isaac',
        titleLn: 'Ligatio Isaaci',
        description: 'The Binding of Isaac is a top-down dungeon crawler game, presented using' +
            ' two-dimensional sprites, in which the player controls Isaac or other unlockable' +
            ' characters as they explore the dungeons located in Isaac\'s basement.',
        src: isaac,
        alt: 'Isaac_image',},
    {  id: 'Fallout 4',
        title: 'Fallout 4',
        titleLn: 'Ausfalen',
        description: 'Fallout 4 is set in and around the Boston area in 2287, 10 years after' +
            ' Fallout 3. Along the way, the Sole Survivor discovers a world in fear of a mysterious' +
            ' organization known as the Institute, consumed by paranoia of a race of robotic yet' +
            ' also biological human-like beings known as synths.',
        src: fallout,
        alt: 'Fallout4_image',},
];

const additionalQuizItemsBase: QuizItemBase[] = [
    { id: 'Atomic',
        title: 'Atomic Heart',
        titleLn: 'Atomic Heart',
        description: 'test',
        src: genshin,
        alt: 'Genshin_image',},
    { id: 'Payday',
        title: 'Payday',
        titleLn: 'Payday',
        description: 'test',
        src: genshin,
        alt: 'Genshin_image',},
    { id: 'Mario',
        title: 'Mario',
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



const Quiz: React.FC = () => {
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
                            item.id === selectedItemId)?.description || 'Listen audio!!!' : 'Listen audio!!!',
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
                            {item.title}
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
                    Next
                </button>
                {showModal && (
                    <div className='win-modal'>
                        <div className='win'>
                            <p className='win_text'>Congratulations you completed the game</p>
                            <p className='win_text'>score {score} in 50</p>
                            <button className='win_but' onClick={() => window.location.reload()}>
                                New Game
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
