import NewTodo from './components/NewTodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <ChakraProvider theme={theme}>
        <Login setToken={setToken} />;
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider theme={theme}>
        <Flex
          p={20}
          flexFlow={'column'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          height={'100vh'}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/todos" element={<NewTodo />} />
            </Routes>
          </BrowserRouter>
        </Flex>
      </ChakraProvider>
    );
  }
}

export default App;
