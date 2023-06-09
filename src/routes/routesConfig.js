import CharacterPage from '../containers/CharacterPage';
import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';
import PersonalPage from '../containers/PersonPage';

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
        path: '/characters/:id', 
        exact: true,
        component: <PersonalPage />,
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