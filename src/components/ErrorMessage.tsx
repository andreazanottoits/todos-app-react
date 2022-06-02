import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
import { ErrorMessageComponent } from '../interfaces/types';
export default function ErrorMessage({ errorMessage }: ErrorMessageComponent) {
  return (
    <Box my={4}>
      <Alert status="error" borderRadius={4}>
        <AlertIcon />
        <AlertDescription> {errorMessage}</AlertDescription>
      </Alert>
    </Box>
  );
}
