
import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React, { FC } from 'react';
// import yenum21Light from "../assets/yenum21Light.png";
// import yenum21Dark from "../assets/yenum21Dark.png";


const ToggleMode: FC<any> = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
        <IconButton 
            aria-label={'Toggle Mode'} 
            icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
            onClick={toggleColorMode} />
    </>
  );
};

export default ToggleMode;
