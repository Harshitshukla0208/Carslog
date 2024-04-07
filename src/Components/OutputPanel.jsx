import React, { useState } from 'react'
import {Box, Button,Text, useToast} from "@chakra-ui/react"
import { executeCode } from '../api';

const OutputPanel = ({editorRef, language}) => {

    const toast = useToast();

    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const runCode = async() => {
        const sourceCode = editorRef.current.getValue();
        if(!sourceCode) return;
        try {
            setIsLoading(true);
            const {run:result} = await executeCode(language, sourceCode);
            setOutput(result.output.split("\n"))
            result.stderr ? setIsError(true) : setIsError(false);
        } catch (error) {
            toast({
                title:"An error occured.",
                description:error.message || "Unable to run code",
                status:"error",
                duration:6000,
            })
        }
        finally{
            setIsLoading(false);
        }
    }
    return (
        <Box w="50%">
            <Button variant='outline' colorScheme='green' mb={4} mt={12} isLoading={isLoading} onClick={runCode}>
                Run Code
            </Button>
            <Box
                height="90vh"
                p={2}
                color={isError ? "red.400" : ""}
                border="1px solid"
                borderRadius={4}
                borderColor={
                    isError ? "red.500" : "#333"
                }
            >
                {
                    output ? output.map((line, i) => <Text key={i}>{line}</Text>) : 'Click "Run Code" to see the output here'
                }
            </Box>
        </Box>
    )
}

export default OutputPanel
