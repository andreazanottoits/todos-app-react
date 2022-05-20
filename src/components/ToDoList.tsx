import { Flex, Text, Button } from '@chakra-ui/react';
import { ToDoType, ToDoListType } from '../interfaces/test';

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
  modifyToDoFunc,
}: ToDoListType) {
  return (
    <Flex flexDirection={'column'} height={'100vh'} width={'100vh'}>
      <TableContainer mt={'10'} overflow={'hidden'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Text</Th>
              <Th>Timespant</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {toDoList.map((item: ToDoType, index: number) => (
              <Tr key={index}>
                <Td>
                  <Text>{item.Text}</Text>
                </Td>
                <Td>
                  <Text>{item.Timestamp}</Text>
                </Td>
                <Td>
                  <Button
                    colorScheme="yellow"
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
