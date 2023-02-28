import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container, VStack, StackDivider } from '@chakra-ui/react';
import Nav from '../components/Nav';


const RootLayout: FC<any> = () => {
  return (
    <>
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
    >
      <Container maxW='container.lg'>
                <Nav/>
      </Container>
      <Container maxW='container.lg'>
                <Outlet />
      </Container>
</VStack>
        
    </>
  );
};

export default RootLayout;


