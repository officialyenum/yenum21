
import { Tr, Td } from '@chakra-ui/react';
import React, { FC } from 'react';
// import yenum21Light from "../assets/yenum21Light.png";
// import yenum21Dark from "../assets/yenum21Dark.png";

interface ElectionType {
  state: string
  candidates: string[],
  votes: number[]
}


const ElectionItem: FC<ElectionType> = ({state, candidates, votes}) => {
    const add = (accumulator:number, a:number) => {
      return accumulator + a;
    }  
    const apcPerc = (votes[0]/(votes.reduce(add,0))) * 100;
    const lpPerc = (votes[1]/(votes.reduce(add,0))) * 100;;
    const nnppPerc = (votes[2]/(votes.reduce(add,0))) * 100;;
    const pdpPerc = (votes[3]/(votes.reduce(add,0))) * 100;;
    const maxNumber = Math.max(...votes); 
    const winnerName = candidates.find((item, index) => {
      if(maxNumber === votes[index]) {
        return item
      }
      return '';
    }); 
  return (
    <>
        <Tr>
          <Td>{state}</Td>
          <Td>{votes[0]}</Td>
          <Td>{votes[1]}</Td>
          <Td>{votes[2]}</Td>
          <Td>{votes[3]}</Td>
          <Td>{winnerName}</Td>
          <Td bgColor={`${apcPerc > 25 ? 'green':'red'}.500`} isNumeric>{apcPerc.toFixed(1)}</Td>
          <Td bgColor={`${lpPerc > 25 ? 'green':'red'}.500`} isNumeric>{lpPerc.toFixed(1)}</Td>
          <Td bgColor={`${nnppPerc > 25 ? 'green':'red'}.500`} isNumeric>{nnppPerc.toFixed(1)}</Td>
          <Td bgColor={`${pdpPerc > 25 ? 'green':'red'}.500`} isNumeric>{pdpPerc.toFixed(1)}</Td>
        </Tr>
    </>
  );
};

export default ElectionItem;
