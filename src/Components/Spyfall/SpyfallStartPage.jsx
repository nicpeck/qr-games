import { Container, Box, Heading } from '@chakra-ui/react';

const SpyfallStartPage = () => {
    return (
        <Container
            mt="10"
            mb="10"
        >
            <Box
                backgroundColor="white"
                borderRadius={3}
                shadow="md"
                p="4"
                px="6"
                // mx="1"
            >
                <Heading>Get started</Heading>
            </Box>
        </Container>
    )
}

export default SpyfallStartPage;