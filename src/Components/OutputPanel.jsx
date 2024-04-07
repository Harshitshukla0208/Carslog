import React, { useState } from 'react'
import {Box, Button, Text} from "@chakra-ui/react"
import { executeCode } from '../api';

const OutputPanel = ({editorRef, language}) => {
    const [output, setOutput] = useState(null);
    
    const runCode = async() => {
        const sourceCode = editorRef.current.getValue();
        if(!sourceCode) return;
        try {
            const {run:result} = await executeCode(language, sourceCode);
            setOutput(result.output)
        } catch (error) {
            
        }
    }
    return (
        <Box w="50%">
            <Button variant='outline' colorScheme='green' mb={4} mt={12} onClick={runCode}>
                Run Code
            </Button>
            <Box
                height="90vh"
                p={2}
                border="1px solid"
                borderRadius={4}
                borderColor="#333"
            >
                {
                    output ? output : 'Click "Run Code" to see the output here'
                }
            </Box>
        </Box>
    )
}

export default OutputPanel
