import Routes from '../Routes';

import Container from './SpyfallContainer';
import StartPage from './SpyfallStartPage';
import SharePage from './SpyfallSharePage';
import GamePage from './SpyfallGamePage';

const SpyfallRoutes = () => {
    return (
        <Routes
            Container={Container}
            StartPage={StartPage}
            SharePage={SharePage}
            GamePage={GamePage}
        />
    );
}

export default SpyfallRoutes;
