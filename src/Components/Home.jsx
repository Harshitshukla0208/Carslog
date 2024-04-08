import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex } from '@chakra-ui/react'; 
import backgroundImage from '../assets/bg3.png'; 
import logo from '../assets/logo.svg';
import githubLogo from '../assets/github-logo.png'; 
import linkedinLogo from '../assets/linkedin-logo.png'; 
import './css/home.css'; 

const Home = () => {
    return (
        <Box
            className='main'
            bgImage={`url(${backgroundImage})`}
            backgroundSize="cover"
            backgroundPosition="center"
            color="white"
            py={20}
            px={6}
            textAlign="center"
            minHeight="100vh" 
        >
            <Box className="content">
                <div className='title-logo'>
                    <img src={logo} alt="Logo" className="title-img" />
                    <h1>CodeLogs</h1>
                </div>
                <p>Experience the joy of coding with CodeLogs</p>
                <p>Start your coding journey now!</p>
                <Link to='/editor'><Button colorScheme="teal" mt={5}>Try now...</Button></Link>
                <Flex
                    direction="column" 
                    align="center" 
                    mt={32} 
                >
                    <p>Created By: Harshit Shukla</p>
                    <Flex mt={3}>
                        <a href="https://github.com/Harshitshukla0208/Codelogs" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub Logo" width="30" height="30" style={{ marginRight: '10px' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/harshit-shukla-9a5950239/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="LinkedIn Logo" width="30" height="30" />
                        </a>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default Home;
