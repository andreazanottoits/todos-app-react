import { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import ErrorMessage from '../components/ErrorMessage';
import { LoginComponent } from '../interfaces/types';

export default function Login({ setToken }: LoginComponent) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit() {
    try {
      setIsLoading(true);
      const response = await fetch('http://127.0.0.1:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.status === 200) {
            setEmail('');
            setPassword('');
            setToken(responseJson.token);
          } else {
            setError('Some error occured');
          }
        });
    } catch (err) {
      setError('err.message');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Flex
      flexFlow={'column'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      height={'100vh'}
      pt={'20'}
    >
      <Box textAlign="center">
        <Heading> Login </Heading>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <ErrorMessage errorMessage={error} />}
        <FormControl isRequired>
          <FormLabel> Email </FormLabel>
          <Input
            type="email"
            placeholder="test@test.com"
            size="lg"
            value={email}
            onChange={event => setEmail(event.currentTarget.value)}
          />
        </FormControl>

        <FormControl isRequired mt={6}>
          <FormLabel> Password </FormLabel>
          <Input
            type="password"
            placeholder="********"
            size="lg"
            value={password}
            onChange={event => setPassword(event.currentTarget.value)}
          />
        </FormControl>
        <Button variant="outline" width="full" mt={4} type="submit">
          {isLoading ? (
            <CircularProgress isIndeterminate size="24px" color="teal" />
          ) : (
            'Sign In'
          )}
        </Button>
      </form>
    </Flex>
  );
}
