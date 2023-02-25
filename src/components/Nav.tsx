import React, { FC } from 'react';
import ToggleMode from './ToggleMode';
import { Box, Heading } from '@chakra-ui/react';

// import yenum21Light from "../assets/yenum21Light.png";
// import yenum21Dark from "../assets/yenum21Dark.png";


const Nav: FC<any> = () => {
  return (
    <>

    <Box as={'ul'} mt={'5'}>
      <Box as={'li'}><a href="/"><Heading>Yenum  AI</Heading></a></Box>
      <Box as={'li'} mr={'2.5rem'} style={{float:"right"}}><ToggleMode/></Box>
    </Box>
    </>
  );
};

export default Nav;
