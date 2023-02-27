import React, { FC } from 'react';
import Dashboard from '../components/Dashoard';
import { Tabs, TabList, Tab, TabPanels,TabPanel } from '@chakra-ui/react';
import Rewrite from '../components/Rewrite';
import Summarize from '../components/Summarize';

interface HomeProps {
    darkToggle?: boolean
}

const Home: FC<HomeProps> = () => {
    return (
        <>
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
        </>
    );
};

export default Home;
