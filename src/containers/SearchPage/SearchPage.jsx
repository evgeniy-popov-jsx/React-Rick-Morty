import { useCallback, useEffect, useState } from 'react'
import { getApiResources } from '../../utils/network';
import { debounce } from 'lodash';

import { API_SEARCH, API_PARAM_STATUS } from '../../constants/api';
import { ALIVE, DEAD, UNKNOWN} from '../../constants/status';

import SearchPageInfo from '../../components/SearchPage/SearchPageInfo/SearchPageInfo';

import styles from './SearchPage.module.css';


const SearchPage = () => {  
    const [ input, setInput ] = useState('');
    const [ status, setStatus ] = useState('alive');
    const [ characters, setCharacters] = useState([]);

    const getResponse = async (param, status) => {
        const res = await getApiResources(API_SEARCH+param+API_PARAM_STATUS+status);

        if (res) {
            const characterList = res.results.map(({ name, id, image })=>{

                return {
                    name,
                    id,
                    image
                }
            });
            setCharacters(characterList);
        }
    }

    useEffect(()=>{
        getResponse('','alive');
    },[]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceGetResponse = useCallback(
        debounce((value, status) => getResponse(value, status), 300),
        []
    );

    const handleInputChange = (event) => {
        const value = event.target.value;
        const thisStatus = status;
        
        setInput(value);
        debounceGetResponse(value, thisStatus);
    }

    const handleInputStatus = event => {
        const thisInput = input;
        const status = event.target.defaultValue;

        setStatus(status);
        debounceGetResponse(thisInput, status);
    }

    return (
        <>
            <h1 className='header__text'>Search</h1>
            <input 
                type=""
                value={input}
                onChange={handleInputChange} 
                placeholder='Input character name'
            />
            <div className="radio-inputs">
                <label className="radio">
                    <input type="radio" name="radio" value={ALIVE} onChange={handleInputStatus} checked={status === ALIVE ? true : false}/>
                    <span className="name">Alive</span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio" value={DEAD} onChange={handleInputStatus} checked={status === DEAD ? true : false}/>
                    <span className="name">Dead</span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio" value={UNKNOWN} onChange={handleInputStatus} checked={status === UNKNOWN ? true : false}/>
                    <span className="name">Unknown</span>
                </label>
                </div>
            <SearchPageInfo characters={characters}/>
        </>
    )
}

export default SearchPage;