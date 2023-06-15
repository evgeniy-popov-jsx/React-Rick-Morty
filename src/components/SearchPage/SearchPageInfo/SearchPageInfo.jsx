import { Link } from 'react-router-dom';
import UiLoader from '../../UI/UiLoader';

import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({ characters }) => {
    return (
        <>
            { characters.length
                ?  (
                    <ul>
                        {characters.map(({ id, name, image })=>{
                            return (
                                <li key={id}>
                                    <Link to={`/characters/${id}`} >
                                        <img src={image} alt={name} />
                                        <p>{name}</p>
                                    </Link>
                                    
                                </li>
                                
                            )
                        })}
                    </ul>
                )
                : <UiLoader />
            }
        </>
    )
}

export default SearchPageInfo;