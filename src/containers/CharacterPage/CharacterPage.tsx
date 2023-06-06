import { getApiResources } from '../../utils/network';
import { useEffect, useState } from 'react';
import {API_URL} from '../../constants/api';
import CharacterList from '../../components/CharacterPage/CharacterList';

//import styles from './CharacterPage.module.css';

export type CharacterPageProps = {
    map: any;
    name: string,
    url:string,
    image: string,
    id: number
}

const CharacterPage: React.FC = () => {
    const [character, setCharacter ] = useState<CharacterPageProps>();

    const getResource = async (url: string) => {
        const res = await getApiResources(url);
        const characterList = res.results.map(({ name, url, image, id }: CharacterPageProps) => {
            return {
                name,
                url,
                image,
                id
            }
        })
        setCharacter(characterList);
    }

    useEffect(() => {
        getResource(API_URL);
    }, []);

    return (
        <>
            {character && <CharacterList character={character}/>}    
        </>
    )
}

export default CharacterPage;