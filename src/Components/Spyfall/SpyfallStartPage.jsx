import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { Container, Box, Heading, Textarea, Button } from '@chakra-ui/react';

import { cleanString } from '../../lib/utils';
import { SPYFALL_LOCATIONS, toUrl } from '../../lib/spyfall';

const SpyfallStartPage = () => {
    const [inputText, setInputText] = useState('');
    const [names, setNames] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setNames(_.uniq(
            inputText
            .trim()
            .split(/[\n,]+/g)
            .map(name => name.replace(/\s+/g, ''))
            .filter(name => name.length > '')
        ));
    }, [inputText]);

    const createGameConfig = () => {
        const shuffledNames = _.shuffle(names).join('.');
        const location = _.chain(SPYFALL_LOCATIONS).keys().sample().value();

        const urlConfig = toUrl(`${shuffledNames}.${location}`);
        navigate(`/share/${urlConfig}`);
    }

    return (
        <Container
            mt="10"
            mb="10"
        >
            <Box>
                <Heading>Get started</Heading>
                <Textarea
                    value={inputText}
                    onChange={(e) => setInputText(cleanString(e.target.value.toUpperCase(), 'NFKD', '[^A-Z\\s,]'))}
                    onBlur={() => setInputText(names.join('\n'))}
                    rows={Math.max(3, inputText.split(/\n/).length)}
                    // borderColor="gray.500"
                    backgroundColor="whiteAlpha.900"
                    my="4"
                    placeholder="Enter names 1 per line"
                />
                {names.length > 0
                    ? <Button colorScheme="orange" onClick={createGameConfig}>Start with {names.length} player{names.length === 1 ? '' : 's'}</Button>
                    : <Button colorScheme="orange" disabled>Start</Button>
                }
            </Box>
        </Container>
    )
}

export default SpyfallStartPage;