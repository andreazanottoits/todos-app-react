import React from 'react';
import NewTodo from './Components/NewTodo';

import { ChakraProvider, Flex, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        p={20}
        flexFlow={'column'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        height={'100vh'}
      >
        <NewTodo />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
