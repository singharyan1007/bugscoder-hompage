import {
  Container,
  Box,
  Button,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Story from '../components/aboutmepara'

const About = () => {
  return (
    <Layout>
      <Container>
        <Section>
          <Heading as={'h3'} variant="section-title">
            About Me (Most of the things you (maybe) want to know about me)
          </Heading>
        </Section>
        <Section>
          <Story>
            I'm Aryan aka bugscoder on the web. I'm a 21 y/o engineering
            student, a self taught web developer and programmer, an open source
            enthusiasist and a lover.
          </Story>
          <Story>
            As it already suggests, I'm an undergrad in college pursuing B.E in
            Electronics and Communication Engineering. I had already started
            programming back when I was in 9th standard as we had java in our
            school curriculum. I started web development during 2nd year of my
            engineering and I like working on the web a lot (mostly frontend).
            If you want to know about what programming languages I know, they
            are - javascript, java and little bit of python. I have worked only
            on React and Next.
          </Story>
          <Story>
            I'm also into technical writing and blogging (though my college life
            never lets me do it and so does my lazy ass). I write mostly on
            Dev.to.
          </Story>
          <Story>
            Things I do other than dev and programming? Not much, but I
            overthink and then turn those thoughts into poetry. I also just like
            to go on the terrace with soft music and watch clouds and fighter
            planes pass by 😳. I also game a lot (only COD MOBILE). Apart from
            these, I don't have much to do other than overthinking and staring
            at my phone screen and scrolling through pinterest and instagram.
          </Story>
          <Story>
            I am also Secretary for IEEE Student Branch for my college. So
            yaaaaaayyy.
          </Story>

          <Story>
            I don't talk much over any platform but I like making friends though
            I have a close knit group of three people and a bestfriend kinda
            girlfriend(she is pretty cool!!!). So, in case you want to talk
            about anything, just hit me up and I'll get back to you once I'm
            active/online. All my social links are listed here.
          </Story>
          <Story>
            That's pretty much everything I know about me yet. In case you know
            something about me that I still don't, please let me know - I'll add
            it here.
          </Story>
        </Section>
      </Container>
    </Layout>
  )
}

export default About
