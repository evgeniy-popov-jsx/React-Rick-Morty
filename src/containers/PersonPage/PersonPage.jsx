import { useParams } from 'react-router';
import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResources } from '../../utils/network';
import { API_PERSON } from '../../constants/api';

import PersonImage from '../../components/PersonPage/PersonImage';
import PersonInfo from '../../components/PersonPage/PersonInfo';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack';
import UiLoader from '../../components/UI/UiLoader';

import styles from './PersonPage.module.css';

const PersonEpisode = React.lazy(()=> import('../../components/PersonPage/PersonEpisode'));

const PersonalPage = ({ setErrorApi }) => {
    const [ personInfo, setPersonInfo ] = useState(null);
    const [ personName, setPersonName ] = useState(null);
    const [ personImage, setPersonImage ] = useState(null);
    const [ personEpisode, setPersonEpisode ] = useState(null);
    const [ personFavorite, setPersonFavorite ] = useState(false);

    const store = useSelector(state => state.favoriteReducer);

    const { id } = useParams();

    useEffect(()=>{

        (async () =>  {
            const res = await  getApiResources(`${API_PERSON}/${id}/`);
            
            store[id] ? setPersonFavorite(true) : setPersonFavorite(false);

            if (res) {
                setPersonInfo([
                    {title: 'Gender', data: res.gender},
                    {title: 'Species', data: res.species},
                    {title: 'Status', data: res.status},
                ]);
                setPersonName(res.name);
                setPersonImage(res.image);
                res.episode.length && setPersonEpisode(res.episode);

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })(); 

    },[]);

    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>                
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonImage personImage={personImage} personName={personName} personId={id} personFavorite={personFavorite} setPersonFavorite={setPersonFavorite}/>

                    {personInfo && <PersonInfo  personInfo={personInfo}/>}

                {personEpisode && (
                    <Suspense fallback={<UiLoader />}>
                        <PersonEpisode  personEpisode={personEpisode}/>
                    </Suspense>
                )}
                </div>
            </div>
        </>
    )
}

export default withErrorApi(PersonalPage);