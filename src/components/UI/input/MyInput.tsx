import React, { useState, useRef, useEffect } from 'react';
import styles from './MyInput.module.scss';

interface MyInputProps {
    value: number;
    onChange?: (value: number) => void;
    min: number;
    max: number;
    step: number;
    width?: string;
    className?: string;
}

const MyInput: React.FC<MyInputProps> = ({ value ,
                                             min,
                                             max,
                                             width = '30%',
                                             onChange,
                                             className}) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState<number>(value);

    const updateValue = (percentage: number) => {
        const newValue = Math.min(max, Math.max(min, (percentage / 100) * (max - min) + min));
        setInputValue(newValue);

        if (onChange) {
            onChange(newValue);
        }
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = sliderRef.current?.getBoundingClientRect();
        if (!rect) return;

        const offsetX = event.clientX - rect.left;
        const percentage = (offsetX / rect.width) * 100;
        updateValue(percentage);

        const handleMouseMove = (e: MouseEvent) => {
            const offsetX = e.clientX - rect.left;
            const percentage = (offsetX / rect.width) * 100;
            updateValue(percentage);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        setIsDragging(true);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <div
            ref={sliderRef}
            className={`${styles.myInput} ${className}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={() => isDragging && setIsDragging(false)}
            style={{
                width: width,
            }}
        >
            <div className={styles.slider} style={{ width: `${inputValue}%`,
                background: 'linear-gradient(to right, #F80000, #8D0000)'}} />
        </div>
    );
};

export default MyInput;
