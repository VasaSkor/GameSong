import React, {createContext, useContext, useEffect, useState} from 'react';

interface LanguageContextType {
    currentLanguage: 'en' | 'ru';
    changeLanguage: () => void;
}

const LanguageContext =
    createContext<LanguageContextType | undefined>(undefined);

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguageContext must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const storedLanguage = localStorage.getItem('language');
    const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ru'>(
        storedLanguage === 'ru' ? 'ru' : 'en'
    );

    const changeLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        setCurrentLanguage(newLanguage);
    };

    useEffect(() => {
        localStorage.setItem('language', currentLanguage);
    }, [currentLanguage]);


    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
