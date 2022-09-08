import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { Container, Box, Heading, Textarea, Button, VStack, FormControl, Checkbox } from '@chakra-ui/react';

import { cleanString } from '../../lib/utils';
import { SPYFALL_LOCATIONS, toUrl } from '../../lib/spyfall';

const SpyfallStartPage = () => {
    const [inputText, setInputText] = useState('');
    const [names, setNames] = useState([]);
    const [locations, setLocations] = useState(_.keys(SPYFALL_LOCATIONS));

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
        const shuffledLocations = _.shuffle(locations).join('.');

        const urlConfig = toUrl(`${shuffledNames}..${shuffledLocations}`);
        navigate(`/share/${urlConfig}`);
    }

    return (
        <Container
            mt="10"
            mb="10"
        >
            <Box>
                <Heading mb="4">Get started</Heading>
                <Textarea
                    value={inputText}
                    onChange={(e) => setInputText(cleanString(e.target.value.toUpperCase(), 'NFKD', '[^A-Z\\s,]'))}
                    onBlur={() => setInputText(names.join('\n'))}
                    rows={Math.max(3, inputText.split(/\n/).length)}
                    // borderColor="gray.500"
                    backgroundColor="whiteAlpha.900"
                    mb="4"
                    placeholder="Enter names 1 per line"
                />
                <Heading mb="4" size="lg">Include locations</Heading>
                <FormControl mb="4">
                    <VStack alignItems="flex-start">
                        {_.toPairs(SPYFALL_LOCATIONS).map(([key, value]) => (
                            <Box key={`location-${key}`}>
                                <Checkbox
                                    isChecked={_.includes(locations, key)}
                                    onChange={() => setLocations(_.xor(locations, [key]))}
                                >
                                    {value}
                                </Checkbox>
                            </Box>
                        ))}
                    </VStack>
                </FormControl>
                <Box mt="6">
                {names.length > 0
                    ? <Button colorScheme="orange" onClick={createGameConfig}>Start with {names.length} player{names.length === 1 ? '' : 's'}</Button>
                    : <Button colorScheme="orange" disabled>Start</Button>
                }
                </Box>
            </Box>
        </Container>
    )
}

export default SpyfallStartPage;