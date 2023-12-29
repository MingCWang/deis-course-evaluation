import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { BsSearch } from 'react-icons/bs';
import styles from './SearchBar.module.css';

export default function SearchBar() {
    const [text, setText] = useState('');
    const navigate = useNavigate();
    function handleOnChange(event) {
        setText(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/search?course=${text}`);
    }
    return (
        <div className={styles.container}>
            <form action='' className={styles.searchBar}>
                <input
                    type='text'
                    className={styles.searchInput}
                    onChange={handleOnChange}
                    placeholder='SEARCH'
                />
                <button
                    type='submit'
                    className={styles.searchButton}
                    onClick={handleSubmit}
                >
                    <BsSearch className={styles.searchIcon} />
                </button>
            </form>
        </div>
    );
}
