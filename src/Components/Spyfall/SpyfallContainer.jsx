import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Outlet } from "react-router-dom";

const theme = extendTheme({
  // styles: {
  //   global: (props) => ({
  //     body: {
  //       bg: 'gray.200'
  //     }
  //   }),
  // },
  fonts: {
    heading: `'Courier Prime', monospace`,
    body: `'Courier Prime', monospace`,
  },
  colors: {
    gray: {
        50: 'hsl(40deg 15% 98%)',
        100: 'hsl(40deg 15% 95%)',
        200: 'hsl(40deg 15% 91%)',
        300: 'hsl(40deg 15% 84%)',
        400: 'hsl(40deg 15% 69%)',
        500: 'hsl(40deg 15% 52%)',
        600: 'hsl(40deg 15% 35%)',
        700: 'hsl(40deg 15% 23%)',
        800: 'hsl(40deg 15% 14%)',
        900: 'hsl(40deg 15% 11%)',
    }
  }
});

const SpyfallContainer = () => {
    return (
        <ChakraProvider theme={theme}>
            <Outlet />
        </ChakraProvider>
    );
}

export default SpyfallContainer;
