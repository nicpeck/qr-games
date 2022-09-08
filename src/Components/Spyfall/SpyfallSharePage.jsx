import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';
import { Container, Box, Heading, Textarea, Button, Center, Stack, VStack } from '@chakra-ui/react';

import ShareQRCode from '../ShareQRCode';


const SpyfallSharePage = () => {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <Container
            mt="4"
            mb="10"
        >
            <VStack spacing="4">
                <ShareQRCode />
                <Button colorScheme="orange" onClick={() => navigate('/game', { state: { config: params.config } }) }>Continue</Button>
            </VStack>
        </Container>
    )
}

export default SpyfallSharePage;