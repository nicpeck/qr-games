import { useState, useEffect } from 'react';
import _ from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Box, Heading, Button, FormControl, Divider, Modal, ModalOverlay, ModalContent, Select } from '@chakra-ui/react';

import { SPYFALL_LOCATIONS, toHuman } from '../../lib/spyfall';

const SpyfallGamePage = () => {
    const [gameConfig, setGameConfig] = useState(null);
    const [playerName, setPlayerName] = useState(null);
    const [gameLocation, setGameLocation] = useState(null);
    const [gameLocationIsVisible, setGameLocationIsVisible] = useState(false);
    
    const { state } = useLocation();
    const navigate = useNavigate();

    const parseGameConfig = (config) => {
        const humanString = toHuman(config);
        const [names, locations] = humanString.split('..').map(part => part.split('.'));
        console.log({ humanString, names, locations });
        
        return { names, locations };
    };

    useEffect(() => {
        try {
            setGameConfig(parseGameConfig(state.config));
        } catch (e) {
            alert('There was a problem with the game code - please try scanning again');
            setGameConfig(false);
        }
    }, [state.config])

    useEffect(() => {
        if (playerName) {
            const isSpy = playerName === _.last(gameConfig.names);
            setGameLocation(isSpy ? '? (you are the spy)' : _.get(SPYFALL_LOCATIONS, _.first(gameConfig.locations)));
        }
    }, [playerName]);
    
    return (
        <Container
            mt="10"
            mb="10"
        >
            <Heading size="lg" mb="1">
                {playerName ? `Location for ${playerName}:` : 'Location:'}
                <Button
                    variant="outline"
                    size="xs"
                    ml="2"
                    disabled={!gameLocation}
                    onClick={() => { setGameLocationIsVisible(!gameLocationIsVisible) }}
                >
                    {gameLocationIsVisible ? 'hide' : 'show'}
                </Button>
            </Heading>
            <Heading size="md" mb="1">
                {(gameLocationIsVisible && gameLocation) ? gameLocation : '•••••••••••••••'}
            </Heading>
            <Divider my="6" />
            <Heading size="md" mb="1">Possible locations:</Heading>
            <Box mb="8">
                {gameConfig && gameConfig.locations && _.chain(SPYFALL_LOCATIONS)
                    .toPairs()
                    .filter(([key]) => _.includes(gameConfig.locations, key))
                    .map(([key, value]) => value)
                    .sort()
                    .value()
                    .join(', ')
                }
            </Box>
            <Button
                variant="outline"
                colorScheme="orange"
                size="sm"
                onClick={() => {
                    navigate(`/share/${state.config}`)
                }}
            >
                Share
            </Button>
            <Modal
                isOpen={!playerName}
            >
                <ModalOverlay />
                <ModalContent>
                    <FormControl>
                        <Select
                            placeholder="Select your name"
                            onChange={(e) => setPlayerName(e.target.value)}
                        >
                            {_.chain(gameConfig).get('names', []).clone().sort().value().map(name => (
                                <option key={name}>{name}</option>
                            ))}
                        </Select>
                    </FormControl>
                </ModalContent>
            </Modal>
        </Container>
    )
}

export default SpyfallGamePage;