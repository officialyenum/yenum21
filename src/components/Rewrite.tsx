import React, { FC, useState } from 'react';
import rewriteLogo from '../assets/rewrite.png';
import { useToast, Stack, IconButton, Textarea, Box, Button, Fade, useDisclosure, Select, Image } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import { AI21 } from "@officialyenum/ai21";

interface TextProps {
    text: string
}
const token = process.env.REACT_APP_AI_21_KEY
const Rewrite: FC<any> = () => {
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [intent, setIntent] = useState("")
    const [rewriteText, setRewriteText] = useState("")
    const [responseText, setResponseText] = useState<Array<TextProps>>([])
    const { isOpen, onToggle } = useDisclosure()
    
    const resetPage = () => {
        setIsLoading(false)
        setRewriteText("")
        setResponseText([])
        setIntent("")
        onToggle();
    }
    const handleRewriteSubmit = async () => {
        setIsLoading(true)
        if (rewriteText.length === 0 || intent.length === 0) {
            toast({
                title: 'An Error Occured',
                description: "Please Ensure Rewrite and Intent are filled",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            setIsLoading(false)
            return
        }
        const data = {
            text: rewriteText,
            intent: intent // casual, formal, short
        }
        const ai = new AI21(token);
        const resp = await ai.rewrite(data)
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
        
        if (resp?.status === 'failed') {
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
        const suggestions = resp?.data["suggestions"];
        suggestions.forEach((item: TextProps) => {
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
                    onChange={e => setIntent(e.target.value)}
                    value={intent}
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
                onClick={handleRewriteSubmit}>Rewrite</Button>
        )}
        
    </>
  );
};

export default Rewrite;
