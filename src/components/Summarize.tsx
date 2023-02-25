import React, { FC, useState } from 'react';
import summarizeLogo from '../assets/summarize.png';
import { useToast, Stack, IconButton, Textarea, Box, Button, Fade, useDisclosure, Select, Image } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import { AI21 } from "@officialyenum/ai21";

interface TextProps {
    text: string
}
const token = process.env.REACT_APP_AI_21_KEY
const Summarize: FC<any> = () => {
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [type, setType] = useState("")
    const [summarizeText, setSummarizeText] = useState("")
    const [responseText, setResponseText] = useState<Array<TextProps>>([])
    const { isOpen, onToggle } = useDisclosure()
    
    const resetPage = () => {
        setIsLoading(false)
        setSummarizeText("")
        setResponseText([])
        setType("")
        onToggle();
    }
    const handleSummarizeSubmit = async () => {
        setIsLoading(true)
        if (summarizeText.length === 0 || type.length === 0) {
            toast({
                title: 'An Error Occured',
                description: "Please Ensure Text and Type are filled",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            setIsLoading(false)
            return
        }
        const data = {
            text: summarizeText,
            type: type // casual, formal, short
        }
        const ai = new AI21(token);
        const resp = await ai.summarize(data)
        console.log(resp);
        console.log(resp?.status);
        console.log(resp?.message);
        if(!resp) {
            toast({
                title: 'AI Error',
                description: "No Response from AI",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            setIsLoading(false)
            return 
        }
        
        if (resp?.status !== 'success') {
            toast({
                title: 'AI Error',
                description: resp?.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            setIsLoading(false)
            return
        }

        const summaries = resp?.data["summaries"];
        summaries.forEach((item: TextProps) => {
            responseText.push(item);
        })
        setIsLoading(false)
        onToggle();
    }
  return (
    <>

        <Stack direction='row' justifyContent={'space-between'} alignContent={'flex-start'} mb={2}>
            <Image
                boxSize={75}
                rounded={'md'}
                src={summarizeLogo}
                alt='Summarize Logo'
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
                    placeholder='Select Type' 
                    size={['sm','md']} 
                    mb={2}
                    onChange={e => setType(e.target.value)}
                    value={type}
                >
                    <option value='wikipedia_article'>Wikipedia Article</option>
                    <option value='financial_report'>Financial Report</option>
                    <option value='academic_paper'>Academic Paper</option>
                </Select>
                <Textarea
                    value={summarizeText}
                    onChange={e => setSummarizeText(e.target.value)}
                    placeholder='Enter text to be Summarized Here'
                    size={['xs','sm','md']}
                />
            </>
        )}
        {isOpen && (
            <Fade in={isOpen}>
                {responseText.length > 0 && responseText.map((data:TextProps, index: number) => (
                    <Box
                    key={index}
                    p='40px'
                    color='white'
                    my={2}
                    rounded='md'
                    shadow='md'
                    >
                    AI: {data.text}
                    </Box>
                ))}
            </Fade>
        )}
        {!isOpen && (
            <Button 
                mt='4'
                float={'right'}
                isLoading={isLoading}
                colorScheme='blue'
                onClick={handleSummarizeSubmit}>Summarize</Button>
        )}
        
    </>
  );
};

export default Summarize;
