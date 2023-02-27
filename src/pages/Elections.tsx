import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Tfoot } from '@chakra-ui/react'
import React, { FC } from 'react'

const Elections:FC<any>  = () => {
  return <>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>State</Th>
                <Th>APC</Th>
                <Th>LP</Th>
                <Th>NNPP</Th>
                <Th>PDP</Th>
                <Th isNumeric>APC %</Th>
                <Th isNumeric>LP %</Th>
                <Th isNumeric>NNP %</Th>
                <Th isNumeric>PDP %</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lagos</Td>
                <Td>10,000</Td>
                <Td>80,505</Td>
                <Td>999</Td>
                <Td>1000</Td>
                <Td bgColor={'red.500'} isNumeric>25.4</Td>
                <Td bgColor={'green.500'} isNumeric>25.4</Td>
                <Td bgColor={'green.500'} isNumeric>25.4</Td>
                <Td bgColor={'green.500'} isNumeric>25.4</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Abia</Th>
                <Td>10,000</Td>
                <Td>80,505</Td>
                <Td>999</Td>
                <Td>1000</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
  </>

}

export default Elections