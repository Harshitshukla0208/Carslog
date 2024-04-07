import React from 'react'
import {Box, Button, Text} from "@chakra-ui/react"

const OutputPanel = () => {
    return (
        <Box w="50%">
            <Button variant='outline' colorScheme='green' mb={4} mt={12}>
                Run Code
            </Button>
            <Box
                height="90vh"
                p={2}
                border="1px solid"
                borderRadius={4}
                borderColor="#333"
            >test</Box>
        </Box>
    )
}

export default OutputPanel
