import React, { FC, useState } from 'react';
import rewriteLogo from '../assets/rewrite.png';

import { Stack, IconButton, Textarea, Box, Button, Fade, useDisclosure, Select, Image } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';


const Rewrite: FC<any> = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [rewriteText, setRewriteText] = useState("")
    const { isOpen, onToggle } = useDisclosure()
    const handleNavClick = () => {
        setIsLoading(true)
        onToggle();
    }
    const resetPage = () => {
        setIsLoading(false)
        setRewriteText("")
        onToggle();
    }
    console.log(rewriteText);
  return (
    <>

        <Stack direction='row' justifyContent={'space-between'} alignContent={'flex-start'} mb={2}>
            <Image
                boxSize={75}
                rounded={'md'}
                src={rewriteLogo}
                alt='Rewrite Logo'
            />
            <Fade in={isOpen}>
                    <IconButton 
                        size={'xs'}
                        float={'right'}
                        aria-label={'Toggle Mode'} 
                        icon={<CloseIcon/>}
                        onClick={resetPage} />
            </Fade>
        </Stack>
        {!isOpen && (
            <>
                <Select 
                    placeholder='Select Intent Type' 
                    size={['sm','md']} 
                    mb={2}
                    onChange={e => console.log(e.target.value)}
                >
                    <option value='general'>General</option>
                    <option value='casual'>Casual</option>
                    <option value='formal'>Formal</option>
                </Select>
                <Textarea
                    value={rewriteText}
                    onChange={e => setRewriteText(e.target.value)}
                    placeholder='Enter text to be Re Written Here'
                    size={['xs','sm','md']}
                />
            </>
        )}
        {isOpen && (
            <Fade in={isOpen}>
                <Box
                p='40px'
                color='white'
                my={2}
                rounded='md'
                shadow='md'
                >
                AI: {rewriteText}
                </Box>
            </Fade>
        )}
        {!isOpen && (
            <Button 
                mt='4'
                float={'right'}
                isLoading={isLoading}
                colorScheme='blue'
                onClick={handleNavClick}>Rewrite</Button>
        )}
        
    </>
  );
};

export default Rewrite;
