


import { StatGroup, Stat, StatLabel, StatArrow, StatNumber, StatHelpText, Slider, SliderTrack, Box, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import React, { FC } from 'react';
import { formatNumber } from '../helpers'

interface CandidateStatType {
    candidateName: string,
    candidateParty: string,
    candidateVotes: number
    totalVotes: number
    winPercentage: number
    lossPercentage: number
    win: number
    loss: number
    passStateThreshold: number
    totalState: number
  }


const CandidateStat: FC<CandidateStatType> = ({candidateName, candidateParty, candidateVotes, totalVotes, winPercentage, lossPercentage, win, loss, passStateThreshold, totalState}) => {
    
  return (
    <>
    <StatGroup>
          <Stat>
            <StatLabel>{`${candidateName} (${candidateParty})`}</StatLabel>
            <StatNumber>{formatNumber(candidateVotes)}</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              25%
            </StatHelpText>
            <StatNumber p={2} mx={'2'} textAlign={'center'} borderRadius={'lg'} fontSize={'xs'} bgColor={'green.400'}>{passStateThreshold.toFixed(0)}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>State won</StatLabel>
            <StatNumber borderRadius={'md'} bgColor={'green.400'} textAlign={'center'} justifyContent={'end'}> {win}</StatNumber>
            <StatHelpText>
              <StatArrow type='decrease'/>
              25%
            </StatHelpText>
            <StatNumber p={2} mx={'2'} textAlign={'center'} borderRadius={'lg'} fontSize={'xs'} bgColor={'red.400'}>{totalState - passStateThreshold}</StatNumber>
          </Stat>
          <Slider defaultValue={candidateVotes} min={0} max={10000000} step={100000}>
            <SliderTrack bg='red.100'>
              <Box position='relative' right={10} />
              <SliderFilledTrack bg='tomato' />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </StatGroup> 
        
    </>
  );
};

export default CandidateStat;
