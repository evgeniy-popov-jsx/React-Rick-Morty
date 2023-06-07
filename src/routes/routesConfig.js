import CharacterPage from '../containers/CharacterPage';
import HomePage from '../containers/HomePage';

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

]

export default routesConfig