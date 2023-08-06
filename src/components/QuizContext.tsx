import React, { createContext, useContext, useState } from 'react';

interface QuizContextType {
    score: number;
    mistakes: number;
    updateScore: (isCorrect: boolean) => void;
    isAnswered: boolean;
    setIsAnswered: (value: boolean) => void;
    currentIndex: number;
    setCurrentIndex: (indexUpdater: (prevIndex: number) => number) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuizContext = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuizContext must be used within a QuizProvider');
    }
    return context;
};

interface QuizProviderProps {
    children: React.ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
    const [score, setScore] = useState<number>(0);
    const [mistakes, setMistakes] = useState<number>(0);
    const [isAnswered, setIsAnswered] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const updateScore = (isCorrect: boolean) => {
        if (isCorrect) {
            const newScore = score + (5 - Math.min(mistakes, 4));
            setScore(newScore);
            setMistakes(0);
        } else {
            const newMistakes = mistakes + 1;
            setMistakes(newMistakes);
        }
        setIsAnswered(true);
    };


    const contextValue: QuizContextType = {
        score,
        mistakes,
        isAnswered,
        setIsAnswered,
        currentIndex,
        setCurrentIndex,
        updateScore,
    };

    return <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>;
};
