import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container } from '@chakra-ui/react';
import Nav from '../components/Nav';


const RootLayout: FC<any> = () => {
  return (
    <>
        <Container maxW='2xl'>
            <Nav/>
            <Outlet />
        </Container>
    </>
  );
};

export default RootLayout;


