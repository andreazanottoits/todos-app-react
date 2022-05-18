import { Flex } from '@chakra-ui/react';

export default function ToDo({ todoList }) {
  return <Flex flexDirection={'column'}>{console.log(todoList)}</Flex>;
}
