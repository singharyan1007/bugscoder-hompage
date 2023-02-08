import Head from "next/head";
import {Box,Container} from '@chakra-ui/react'
import Navbar from "../navbar";
import NoSsr from "../no-ssr";
// import Footer from '../footer'
import ModelComputer from "../model-computer";

const Main=({children,router})=>{
    return (
<Box as='main' pb={8}>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <meta name='description' content="Aryan's Hompage"/>
            <meta name="author" content="Aryan Singh"/>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <title>Aryan Singh - Hompage</title>
        </Head>
        <Navbar path={router.asPath}/>

        <Container maxW={'container.md'} pt={14}>
            <NoSsr>
            <ModelComputer/>
            </NoSsr>
            {children}
        </Container>
    </Box>
    )
    
}

export default Main