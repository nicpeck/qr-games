import _ from 'lodash'
import { QRCodeSVG } from 'qrcode.react';
import { useTheme, Box, Center } from '@chakra-ui/react';

const ShareQRCode = ({ props }) => {
    const size = _.get(window, 'screen.width') || _.get(window, 'innerWidth') || 1024;
    const theme = useTheme();

    return (
        <Center
            width="100%"
            maxWidth="80vh"
            padding="2"
            borderRadius={theme.sizes[2]}
            backgroundColor="white"
            mb={_.get(props, 'mb')}
        >
            <Box
                width="100%"
                paddingTop="100%"
                position="relative"
            >
                <QRCodeSVG
                    value={window.location.href}
                    size={size + (size % 128)}
                    // imageSettings={{ width: '100%', height: '100%' }}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
            </Box>
        </Center>
    )
}

export default ShareQRCode;