import { useEffect, useState } from 'react';

import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { useQueryParams } from '../../hooks/useQueryParams';

import CharacterList from '../../components/CharacterPage/CharacterList/CharacterList';
import CharacterNavigation from '../../components/CharacterPage/CharacterNavigation';

import { getApiResources } from '../../utils/network';
import {API_URL} from '../../constants/api';
import { getCharacterPageId } from '../../services/getCharacterData';

const CharacterPage = ({ setErrorApi }) => {
    const [ character, setCharacter ] = useState(null);
    const [ prevPage, setPrevPage ] = useState(null);
    const [ nextPage, setNextPage ] = useState(null);
    const [ counterPage, setCounterPage ] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

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
            setPrevPage(res.info.prev);
            setNextPage(res.info.next);
            setCounterPage(getCharacterPageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {

        getResource(API_URL+queryPage);
        
    }, []);

    return (
        <>
            <CharacterNavigation 
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {character && <CharacterList character={character} />}
        </>
    )
}

export default withErrorApi(CharacterPage);
