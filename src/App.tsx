import NewTodo from './components/NewTodo';

import { ChakraProvider, Flex, theme, Heading } from '@chakra-ui/react';

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
        <Heading mb={'10'}>ToDo List</Heading>
        <NewTodo />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
