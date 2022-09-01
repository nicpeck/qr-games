import { ChakraProvider, theme } from '@chakra-ui/react';

import SharePage from '../Components/SharePage';

const Spyfall = () => {
    return (
        <ChakraProvider theme={theme}>
            <SharePage />
        </ChakraProvider>
    );
}

export default Spyfall;
