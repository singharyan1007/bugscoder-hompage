import Head from "next/head";
import dynamic from 'next/dynamic'
// import NavBar from '../navbar'
import {Box,Container} from '@chakra-ui/react'
import Navbar from "../navbar";
// import Footer from '../footer'


const Main=({children,router})=>{
    return (
<Box as='main' pb={8}>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <meta name='description' content="Aryan's Hompage"/>
            <meta name="author" content="Aryan Singh"/>
            <title>Aryan Singh - Hompage</title>
        </Head>
        <Navbar path={router.asPath}/>

        <Container maxW={'container.md'} pt={14}>
            {children}
        </Container>
    </Box>
    )
    
}

export default Main