import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import Dashboard from '../components/Dashoard';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';
import Rewrite from '../components/Rewrite';

interface HomeProps {
    setDarkMode: Dispatch<SetStateAction<boolean>>,
    darkToggle: boolean
}

const Home: FC<HomeProps> = ({ setDarkMode, darkToggle }) => {
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
        <Nav>
            <NavItem onHandleClick={onHandleClick} isActive={showDashboard} children={"Dashboard"}/>
            <NavItem onHandleClick={onHandleClick} isActive={showSummarize} children={"Summarize"}/>
            <NavItem onHandleClick={onHandleClick} isActive={showRewrite} children={"Rewrite"}/>
            <NavItem onHandleClick={onHandleClick} isActive={showParaphrase} children={"Paraphrase"}/>
        </Nav>
        <main className="bg-gray-800">
            {showDashboard &&  <Dashboard onHandleClick={onHandleClick} />}
            {showRewrite &&  <Rewrite />}
        </main>
    </>
  );
};

export default Home;
