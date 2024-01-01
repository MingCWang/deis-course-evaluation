/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './ButtonsStyles.module.css';

function RatingButton({ rate, state, setState, hovered, setHovered }) {
    function handleOnClick(e) {
        e.preventDefault();
        if (rate !== state) setState(rate);
    }

    function handleOnMouseOver(e) {
        e.preventDefault();
        setHovered(rate);
    }

    function handleOnMouseOut(e) {
        e.preventDefault();
        setHovered(state);
    }

    let buttonStyle =
        rate <= state ? styles.ratingButtonSelected : styles.ratingButton;
    const hoverStyle =
        rate <= hovered ? styles.ratingButtonHovered : styles.ratingButton;

    if (rate === 1) buttonStyle = `${buttonStyle} ${styles.firstRatingButton}`;
    else if (rate === 5) {
        buttonStyle = `${buttonStyle} ${styles.lastRatingButton}`;
    }
    return (
        <button
            className={`${buttonStyle} ${hoverStyle}`}
            onClick={handleOnClick}
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}
        />
    );
}

export default function RatingButtons({ state, setState }) {
    const numRatingButtons = [1, 2, 3, 4, 5];
    const [hovered, setHovered] = useState(1);

    return (
        <div className={styles.ratingButtonsWrapper}>
            <p className={styles.levelText}>1</p>
            {numRatingButtons.map((rate) => (
                <RatingButton
                    key={rate}
                    rate={rate}
                    state={state}
                    setState={setState}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
            <p className={styles.levelText}>5</p>
        </div>
    );
}
