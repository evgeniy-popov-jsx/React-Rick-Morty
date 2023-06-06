import { getApiResources } from '../../utils/network';
import { useEffect, useState } from 'react';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import {API_URL} from '../../constants/api';
import CharacterList from '../../components/CharacterPage/CharacterList';

//import styles from './CharacterPage.module.css';


const CharacterPage = ({ setErrorApi }) => {
    const [character, setCharacter ] = useState(null);

    const getResource = async (url) => {
        const res = await getApiResources(url);

        if (res) {
            const characterList = res.results.map(({ name, url, image, id }) => {
                return {
                    name,
                    url,
                    image,
                    id
                }
            })

            setCharacter(characterList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {

        getResource(API_URL);
        
    }, []);

    return (
        <>
            <h1>Navigate</h1>
            {character && <CharacterList character={character} />}
        </>
    )
}

export default withErrorApi(CharacterPage);