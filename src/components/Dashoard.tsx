
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';
import React, { FC } from 'react';
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
                <Heading fontSize={['3xl','4xl']} mb={4}>Yenum AI Studio</Heading>
                <Text fontSize={['md','lg']}>
                    Yenum AI utilizes AI 21 Studio NPM Package, and help you Rewrite, Summarize and Paraphrase your articles
                </Text>
                <Stack direction='row'  mt={10}>
                    <Button bgColor={'blue.400'} size={['md','lg']}>
                        <span>Get AI 21 Key - </span> <ArrowRightIcon fontSize={'md'}/>
                    </Button>
                    <Button bgColor={'red.400'} size={['md','lg']}>
                        <span>Read Doc - </span> <ArrowRightIcon fontSize={'md'}/>
                    </Button>
                </Stack>
            </Box>
        </>
    );
};

export default Dashboard;
