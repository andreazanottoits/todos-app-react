import { Flex, Text, Button } from '@chakra-ui/react';
import { ToDoType, ToDoListComponent } from '../interfaces/types';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

export default function ToDoList({
  toDoList,
  deleteTodoFunc,
  modifyTextToDoFunc: modifyToDoFunc,
  completeTodoFunc: completedTodoFunc,
}: ToDoListComponent) {
  return (
    <Flex flexDirection={'column'}>
      <TableContainer mt={'10'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Text</Th>
              <Th>Creation Time</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {toDoList.map((item: ToDoType, index: number) => (
              <Tr key={index}>
                <Td onClick={() => completedTodoFunc(index)}>
                  <Text as={item.Completed ? 'del' : undefined}>
                    {item.Text}
                  </Text>
                </Td>
                <Td onClick={() => completedTodoFunc(index)}>
                  <Text as={item.Completed ? 'del' : undefined}>
                    {item.Timestamp}
                  </Text>
                </Td>
                <Td>
                  <Button
                    colorScheme="yellow"
                    visibility={item.Completed ? 'hidden' : 'visible'}
                    onClick={() => modifyToDoFunc(index)}
                  >
                    Modifica
                  </Button>
                  <Button
                    ml={'5'}
                    colorScheme="red"
                    onClick={() => deleteTodoFunc(index)}
                  >
                    Elimina
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
