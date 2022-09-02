import Routes from '../Routes';

import Container from './SpyfallContainer';
import StartPage from './SpyfallStartPage';
import GamePage from './SpyfallGamePage';

const SpyfallRoutes = () => {
    return (
        <Routes
            Container={Container}
            StartPage={StartPage}
            GamePage={GamePage}
        />
    );
}

export default SpyfallRoutes;
