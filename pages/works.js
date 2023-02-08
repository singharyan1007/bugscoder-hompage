import {Container, Heading,SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article';
import Section from '../components/section';

const Works=()=>{
    return (
        <Layout>

        <Container>
            <Section>

            <Heading as={'h3'} fontSize='20' mb='4' variant={'section-title'}>
                Works
            </Heading>
            </Section>
        </Container>
        </Layout>
    )
}

export default Works