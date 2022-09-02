import QRCode from "react-qr-code";
import { Container, Square, Center } from '@chakra-ui/react';

const SharePage = () => {
    return (
        <Container>
            <Center>
                <Square
                    width="100%"
                    maxWidth="90vw"
                >
                    <QRCode
                        value={window.location.href}
                        style={{ width: '100%' }}
                    />
                </Square>
            </Center>
        </Container>
    )
}

export default SharePage;