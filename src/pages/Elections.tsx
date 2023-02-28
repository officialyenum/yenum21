import { 
  TableContainer, Table, Thead, Tbody, Tr, Th, Tfoot,Text, 
  Flex, Spacer, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, 
  StatGroup,Stat,StatLabel,StatNumber,StatArrow, StatHelpText, Progress } from '@chakra-ui/react'
import React, { FC, useState, useEffect } from 'react'
import CandidateStat from '../components/CandidateStat';
import ElectionItem from '../components/ElectionItem';
import electionData from '../data/elections.json';

const Elections:FC<any>  = () => {
  const [tinubuData, setTinubuData] = useState({
    candidateVotes: 0,
    totalVotes: 0,
    winPercentage: 0,
    lossPercentage: 0,
    win: 0,
    loss: 0,
    passStateThreshold: 0,
  })
  const [obiData, setObiData] = useState({
    candidateVotes: 0,
    totalVotes: 0,
    winPercentage: 0,
    lossPercentage: 0,
    win: 0,
    loss: 0,
    passStateThreshold: 0,
  })
  const [rabiuData, setRabiuData] = useState({
    candidateVotes: 0,
    totalVotes: 0,
    winPercentage: 0,
    lossPercentage: 0,
    win: 0,
    loss: 0,
    passStateThreshold: 0,
  })
  const [atikuData, setAtikuData] = useState({
    candidateVotes: 0,
    totalVotes: 0,
    winPercentage: 0,
    lossPercentage: 0,
    win: 0,
    loss: 0,
    passStateThreshold: 0,
  })

  const getCandidateWinLoss = (candidateIndex:number) => {
    let win = 0;
    let loss = 0;
    let passStateThreshold =  0
    electionData.forEach((item)=>{
      const maxNumber = Math.max(...item.votes); 
      const winPerc = (item.votes[candidateIndex] / item.votes.reduce((a, b) => a + b, 0)) * 100;
      const voteIndex = item.votes.findIndex((data:any) => data === maxNumber);
      if (voteIndex === candidateIndex) {
        win++
      }
      if(winPerc > 25){
        passStateThreshold++
      }
    });
    loss = electionData.length - win
    return {
      win,
      loss,
      passStateThreshold
    }
  }

  
  useEffect(() => {
    const getCandidateData = (candidateIndex:number) => {
      let candidateVotes = 0;
      const totalVotes = getTotalVotes();
      electionData.forEach((item)=>{
        candidateVotes += item.votes[candidateIndex];
      });
      const winPercentage = (candidateVotes/totalVotes) * 100;
      const lossPercentage = ((candidateVotes-totalVotes)/totalVotes) * 100;
      const winLossData = getCandidateWinLoss(candidateIndex);
      console.log(candidateVotes);
      
      return {
        candidateVotes,
        totalVotes,
        winPercentage,
        lossPercentage,
        win: winLossData.win,
        loss: winLossData.loss,
        passStateThreshold: winLossData.passStateThreshold
      }
    }
    let tinubu = getCandidateData(0);
    let obi = getCandidateData(1);
    let rabiu = getCandidateData(2);
    let atiku = getCandidateData(3);
    setTinubuData(prevData => ({
      ...prevData,
      ...tinubu
    }));
    setObiData(prevData => ({
      ...prevData,
      ...obi
    }));
    setRabiuData(prevData => ({
      ...prevData,
      ...rabiu
    }));
    setAtikuData(prevData => ({
      ...prevData,
      ...atiku
    }));
  }, [])

  const getTotalVotes = () => {
    let totalVotes = 0;
    electionData.forEach((item)=>{
      totalVotes += item.votes.reduce((a, b) => a + b, 0)
    });
    return totalVotes
  }
  return <>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2'>
        {tinubuData.candidateVotes > 0 && (
          <CandidateStat
            candidateName={'Tinubu'}
            candidateParty={'APC'}
            candidateVotes={tinubuData.candidateVotes}
            totalVotes={tinubuData.totalVotes}
            winPercentage={tinubuData.winPercentage}
            lossPercentage={tinubuData.lossPercentage}
            win={tinubuData.win}
            loss={tinubuData.loss}
            passStateThreshold={tinubuData.passStateThreshold}
            totalState={electionData.length}
          />
        )}
      </Box>
      <Spacer />
      <Box p='2'>
        {obiData.candidateVotes > 0 && (
          <CandidateStat
            candidateName={'OBI'}
            candidateParty={'LP'}
            candidateVotes={obiData.candidateVotes}
            totalVotes={obiData.totalVotes}
            winPercentage={obiData.winPercentage}
            lossPercentage={obiData.lossPercentage}
            win={obiData.win}
            loss={obiData.loss}
            passStateThreshold={obiData.passStateThreshold}
            totalState={electionData.length}
          />
        )}
      </Box>
      <Spacer />
      <Box p='2'>
        {rabiuData.candidateVotes > 0 && (
          <CandidateStat
            candidateName={'Rabiu'}
            candidateParty={'NNPP'}
            candidateVotes={rabiuData.candidateVotes}
            totalVotes={rabiuData.totalVotes}
            winPercentage={rabiuData.winPercentage}
            lossPercentage={rabiuData.lossPercentage}
            win={rabiuData.win}
            loss={rabiuData.loss}
            passStateThreshold={rabiuData.passStateThreshold}
            totalState={electionData.length}
          />
        )}
      </Box>
      <Spacer />
      <Box p='2'>
        {atikuData.candidateVotes > 0 && (
          <CandidateStat
            candidateName={'Atiku'}
            candidateParty={'PDP'}
            candidateVotes={atikuData.candidateVotes}
            totalVotes={atikuData.totalVotes}
            winPercentage={atikuData.winPercentage}
            lossPercentage={atikuData.lossPercentage}
            win={atikuData.win}
            loss={atikuData.loss}
            passStateThreshold={atikuData.passStateThreshold}
            totalState={electionData.length}
          />
        )}
      </Box>
    </Flex>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>State</Th>
                <Th>APC</Th>
                <Th>LP</Th>
                <Th>NNPP</Th>
                <Th>PDP</Th>
                <Th>Winner</Th>
                <Th isNumeric>APC %</Th>
                <Th isNumeric>LP %</Th>
                <Th isNumeric>NNP %</Th>
                <Th isNumeric>PDP %</Th>
              </Tr>
            </Thead>
            <Tbody>
              {electionData.length > 0 && electionData.map((item, index) => (
                <ElectionItem 
                  key={index}
                  state={item.state}
                  candidates={item.candidates}
                  votes={item.votes}
                />
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>State</Th>
                <Th>APC</Th>
                <Th>LP</Th>
                <Th>NNPP</Th>
                <Th>PDP</Th>
                <Th>Winner</Th>
                <Th isNumeric>APC %</Th>
                <Th isNumeric>LP %</Th>
                <Th isNumeric>NNP %</Th>
                <Th isNumeric>PDP %</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
       
  </>

}

export default Elections