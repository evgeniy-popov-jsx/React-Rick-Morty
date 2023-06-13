import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'; 

import CharacterList from '../../components/CharacterPage/CharacterList/CharacterList';

import styles from './FavoritePage.module.css';

const FavoritePage = () => {
    const [ character, setCharacter ] = useState([]);
    const store = useSelector(state => state.favoriteReducer);

    useEffect(()=>{
        const arr = Object.entries(store);
        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    image: item[1].img,
                    name: item[1].name,
                }
            })
            setCharacter(res);
        }
    }, [store]);
   
    return (
        <>
            <h1 className={styles.header}>Favorite Characters</h1>
            { character.length
                ? <CharacterList character={character} />
                : <h2 className={styles.comment}> 
                        Нельзя заставить людей любить тебя. 
                        Нужно просто подождать, пока им надоест тебя ненавидеть...
                </h2>
            } 
        </>
    )
}

export default FavoritePage;