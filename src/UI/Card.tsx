import { Card, CardHeader, CardBody, Stack, StackDivider, Box, Text, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';


const CardUI:FC<any> = ({heading, summary, ChakraComponent, children, ...props}) => {
  return (
    <Card>
  <CardHeader>
    <Heading size='md'>{heading}</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
          {summary}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <ChakraComponent>
            {children}
        </ChakraComponent>
      </Box>
    </Stack>
  </CardBody>
</Card>
  )
}

export default CardUI