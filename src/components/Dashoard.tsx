
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';
import React, { FC } from 'react';
import ButtonLink from '../UI/ButtonLink';
// import paraphraseLogo from '../assets/paraphrase.png';
// import summarizeLogo from '../assets/summarize.png';
// import rewriteLogo from '../assets/rewrite.png';
interface DashboardProps {
    title?:string
}

const Dashboard: FC<DashboardProps> = ({title}) => {
    

    return (
        <>
            <Box maxW='32rem'>
                <Heading fontSize={['3xl','4xl']} mb={4}>Yenum AI Playground</Heading>
                <Text fontSize={['md','lg']}>
                    Yenum AI utilizes AI 21 Studio NPM Package manager, and helps you process natural language models like Rewriting or Paraphrase a text in multiple ways, Summarize an article or documents etc.
                    This Playground is for you to see the potential of the package i built. I hope you enjoy it...
                </Text>
                <Stack direction='row'  mt={10}>
                    <ButtonLink 
                        href={'https://studio.ai21.com/overview'} 
                        ChakraComponent={Button}  
                        bgColor={'blue.400'} 
                        size={['md','lg']}>
                        <Text fontSize={'xs'}>Learn more about AI 21 - </Text> <ArrowRightIcon/>
                    </ButtonLink>
                    <ButtonLink href={'https://www.npmjs.com/package/@officialyenum/ai21'} ChakraComponent={Button}  bgColor={'red.400'} size={['md','lg']}>
                        <Text fontSize={'xs'}>Read Npm Package Doc - </Text> <ArrowRightIcon/>
                    </ButtonLink>
                </Stack>
            </Box>
        </>
    );
};

export default Dashboard;
