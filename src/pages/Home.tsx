import React, { FC, useState } from 'react';
import Dashboard from '../components/Dashoard';
import { Tabs, TabList, Tab, TabPanels,TabPanel, Heading, Box, Container } from '@chakra-ui/react';
import Rewrite from '../components/Rewrite';
import Nav from '../components/Nav';
import Summarize from '../components/Summarize';

interface HomeProps {
    darkToggle?: boolean
}

const Home: FC<HomeProps> = () => {
    const [showDashboard, setShowDashboard] = useState(true)
    const [showSummarize, setShowSummarize] = useState(false)
    const [showRewrite, setShowRewrite] = useState(false)
    const [showParaphrase, setShowParaphrase] = useState(false)

    const onHandleClick = (componentName:string) => {
        cleanActive();
        switch (componentName) {
            case "Summarize":
                console.log(componentName);
                setShowSummarize(true);
                break;
            case "Rewrite":
                setShowRewrite(true);
                console.log(componentName);
                break;
            case "Paraphrase":
                setShowParaphrase(true);
                console.log(componentName);
                break;
            default:
                setShowDashboard(true);
                console.log(componentName);
                break;
        }
    }

    const cleanActive = () => {
        setShowDashboard(false);
        setShowSummarize(false);
        setShowRewrite(false);
        setShowParaphrase(false);
    }

  return (
    <>
        <Container maxW={['sm','md', 'xl']}>
            <Nav/>
            <Tabs>
                <TabList>
                    <Tab>Dashboard</Tab>
                    <Tab>Rewrite</Tab>
                    <Tab>Summarize</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Dashboard title={'Home Page'} />
                    </TabPanel>
                    <TabPanel>
                        <Rewrite/>
                    </TabPanel>
                    <TabPanel>
                        <Summarize/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    </>
  );
};

export default Home;
