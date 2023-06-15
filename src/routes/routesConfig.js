import CharacterPage from '../containers/CharacterPage';
import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';
import PersonalPage from '../containers/PersonPage';
import FavoritePage from '../containers/FavoritePage';
import SearchPage from '../containers/SearchPage';

const routesConfig = [
    {
        path: '/', 
        exact: true,
        component: <HomePage />,
    },
    {
        path: '/characters', 
        exact: true,
        component: <CharacterPage />,
    },
    {
        path: '/favorites', 
        exact: true,
        component: <FavoritePage />,
    },
    {
        path: '/characters/:id', 
        exact: true,
        component: <PersonalPage />,
    },
    {
        path: '/search', 
        exact: true,
        component: <SearchPage />,
    },
    {
        path: '/not-found', 
        exact: true,
        component: <NotFoundPage />,
    },
    {
        path: '*', 
        exact: false,
        component: <NotFoundPage />,
    },

]

export default routesConfig