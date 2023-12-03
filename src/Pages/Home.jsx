import React, { useEffect } from 'react';
import {
  Stack,
  HStack,
  Card,
  CardBody,
  Text,
  Image,
  Box,
  useColorMode,
  Link
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import navBtn from '../images/horizontal-btn.svg';
import laptop from '../images/laptop.png';
import about from '../images/about.png';
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import dp from "../images/dp1.jpg";

const Home = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const cardBackgroundColor = colorMode === 'dark' ? '#181818' : 'whitesmoke';
  const imageStyle =
    colorMode === 'dark'
      ? { filter: 'brightness(120%)', opacity: '.2' }
      : { filter: 'brightness(80%)', opacity: '.5' };

  const goToAbout = () => {
    navigate('/about');
  };
  const goToWork = () => {
    navigate('/work');
  };

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <Box mt={[4, 4, 4, '80px']}>
      {isMobile && (
        <div>
          <Stack
            direction={['column', 'column', 'row']}
            spacing="20px"
            w={'100%'}
          >
            <Card
              className="radius-30 pointer intro-card"
              w={['100%', '100%', '50%']}
              bg={cardBackgroundColor}
              onClick={goToAbout}
            >
              <CardBody p={[6, 12, 6, 12]}>
                <Stack
                  direction={['column', 'column', 'row']}
                  spacing="20px"
                  w="100%"
                >
                  <Image
                    src={dp}
                    //src="https://bit.ly/dan-abramov"
                    borderRadius="30px"
                    maxW={['100%', '100%', '50%']}
                    style={{ filter: 'grayscale(0.5 )' }}
                  />
                  <Box maxW={['100%', '100%', '50%']} pt={[0, 7]}>
                    <h1 className="subtitle" style={{ opacity: '0.7' }}>
                      Web Developer
                    </h1>
                    <p className="fs-36 fw-500" style={{ lineHeight: '1' }}>
                      Himanshu Kumar
                    </p>
                    <Text style={{ lineHeight: '1', opacity: '0.7' }} mt={3}>
                      From concept to click, I bring websites to life.
                    </Text>
                    <Image
                      src={navBtn}
                      style={{ ...imageStyle }}
                      className="nav-btn transition btnPosition"
                    />
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            <Box w={['100%', '100%', '50%']}>
              <Card
                className="radius-30"
                bg={cardBackgroundColor}
                p={0}
                data-aos="zoom-in-up"
              >
                <CardBody p={3}>
                  <div className="marquee-container">
                    <Text
                      className="scroll-text"
                      style={{ lineHeight: '1', opacity: '0.7' }}
                    >
                      {/* I'm a web developer with over 2 years of experience,
                      specializing in Vue.js and React.js. I thrive on crafting
                      dynamic and user-centric web solutions, transforming ideas
                      into seamless online experiences. Let's build the future
                      of the web together. */}
                      <ul style={{display: 'flex'}}>
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work 
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work 
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work 
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work 
                      </ul>             
                    </Text>
                  </div>
                </CardBody>
              </Card>
              <Stack direction={['column', 'row']} spacing={['0', '20px']}>
                <Card
                  className="radius-30 intro-card pointer"
                  bg={cardBackgroundColor}
                  p={0}
                  mt={5}
                  w={['100%', '100%', '50%']}
                  onClick={goToAbout}
                  data-aos="zoom-in-up"
                >
                  <CardBody p={[6, 12, 6, 12]}>
                    <Stack alignItems={'center'}>
                      <Image src={about} w={'137px'} />
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <div>
                        <p className="subtitle">Know me more</p>
                        <p className="title">About</p>
                      </div>
                      <Image
                        src={navBtn}
                        style={{
                          ...imageStyle,
                          position: 'relative',
                          top: '17px',
                        }}
                        className="nav-btn transition"
                      />
                    </Stack>
                  </CardBody>
                </Card>
                <Card
                  className="radius-30 intro-card pointer"
                  bg={cardBackgroundColor}
                  p={0}
                  mt={5}
                  w={['100%', '100%', '50%']}
                  onClick={goToWork}
                  data-aos="zoom-in-up"
                >
                  <CardBody p={[6, 12, 6, 12]}>
                    <Stack alignItems={'center'}>
                      <Text
                        className="opacity fs-30 fw-700"
                        style={{ lineHeight: '0' }}
                      >
                        MY WORKS
                      </Text>
                      <Image src={laptop} w={'138px'} />
                    </Stack>
                    <Stack
                      direction={'row'}
                      justifyContent={'space-between'}
                      mt={3}
                    >
                      <div>
                        <p className="subtitle">showcase</p>
                        <p className="title">Projects</p>
                      </div>
                      <Image
                        src={navBtn}
                        style={{
                          ...imageStyle,
                          position: 'relative',
                          top: '17px',
                        }}
                        className="nav-btn transition"
                      />
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>
            </Box>
          </Stack>
          <Stack
            direction={['column', 'column', 'row']}
            spacing="20px"
            w={'100%'}
            mt={5}
          >
            <Card
              className="radius-30 intro-card"
              bg={cardBackgroundColor}
              w={['100%', '100%', '50%']}
              data-aos="zoom-in-up"
            >
              <CardBody p={[6]}>
                <HStack spacing={4} className="radius-30 profile">
                  <Link
                    href="https://www.linkedin.com/in/himanshu25k7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <FaLinkedin size={40} />
                  </Link>
                  <Link href="https://github.com/imhimanshukr" target="_blank">
                    <FaGithub size={40} />
                  </Link>
                </HStack>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  mt={3}
                >
                  <div>
                    <p className="subtitle">stay with me</p>
                    <p className="title">Profiles</p>
                  </div>
                  <Image
                    src={navBtn}
                    style={{ ...imageStyle, position: 'relative', top: '17px' }}
                    className="nav-btn transition"
                  />
                </Stack>
              </CardBody>
            </Card>
            <Card
              className="radius-30 intro-card pointer"
              bg={cardBackgroundColor}
              w={['100%', '100%', '50%']}
              data-aos="zoom-in-up"
            >
              <CardBody p={[6]} pt={[6, 24]}>
                <NavLink to={'/contact'}>
                  <p
                    className="fw-500 contact-head"
                    style={{ lineHeight: '30px' }}
                  >
                    Let's
                  </p>
                  <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <p
                      className="fw-500 contact-head"
                      style={{ lineHeight: '60px' }}
                    >
                      Work <span style={{ color: '#5b78f6' }}>together.</span>
                    </p>
                    <Image
                      src={navBtn}
                      style={{ ...imageStyle }}
                      className="nav-btn transition"
                    />
                  </Stack>
                </NavLink>
              </CardBody>
            </Card>
          </Stack>
        </div>
      )}

      {/* ------------------------- */}

      {!isMobile && (
        <div>
          <Stack
            direction={['column', 'column', 'row']}
            spacing="20px"
            w={'100%'}
          >
            <Card
              className="radius-30 pointer intro-card"
              w={['100%', '100%', '50%']}
              bg={cardBackgroundColor}
              onClick={goToAbout}
            >
              <CardBody p={[6, 12, 6, 12]}>
                <Stack
                  direction={['column', 'column', 'row']}
                  spacing="20px"
                  w="100%"
                >
                  <Image
                    src={dp}
                    //src="https://bit.ly/dan-abramov"
                    borderRadius="30px 0"
                    maxW={['100%', '100%', '50%']}
                    style={{ filter: 'grayscale(0.5 )' }}
                  />
                  <Box maxW={['100%', '100%', '50%']} pt={[0, 7]}>
                    <h1 className="subtitle" style={{ opacity: '0.7' }}>
                      Web Developer
                    </h1>
                    <p className="fs-36 fw-500" style={{ lineHeight: '1' }}>
                      Himanshu Kumar
                    </p>
                    <Text style={{ lineHeight: '1', opacity: '0.7' }} mt={3}>
                      From concept to click, I bring websites to life.
                    </Text>
                    <Image
                      src={navBtn}
                      style={{ ...imageStyle }}
                      className="nav-btn transition btnPosition"
                    />
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            <Box w={['100%', '100%', '50%']}>
              <Card className="radius-30" bg={cardBackgroundColor} p={0}>
                <CardBody p={3}>
                  <div className="marquee-container">
                    <Text
                      className="scroll-text"
                      style={{ lineHeight: '1', opacity: '0.7' }}
                    >
                      {/* I'm a web developer with over 2 years of experience,
                      specializing in Vue.js and React.js. I thrive on crafting
                      dynamic and user-centric web solutions, transforming ideas
                      into seamless online experiences. Let's build the future
                      of the web together. */}
                      <ul style={{display: 'flex'}}>
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work 
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work 
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work 
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work
                        <span class="bullet-text">•</span> Open To <span className={colorMode === 'dark' ? 'focused' : 'dark-focused'}> REMOTE </span> Work 
                      </ul>             
                   </Text>

                  </div>
                </CardBody>
              </Card>
              <Stack direction={['column', 'row']} spacing={['0', '20px']}>
                <Card
                  className="radius-30 intro-card pointer"
                  bg={cardBackgroundColor}
                  p={0}
                  mt={5}
                  w={['100%', '100%', '50%']}
                  onClick={goToAbout}
                >
                  <CardBody p={[6, 12, 6, 12]}>
                    <Stack alignItems={'center'}>
                      <Image src={about} w={'137px'} />
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <div>
                        <p className="subtitle">Know me more</p>
                        <p className="title">About</p>
                      </div>
                      <Image
                        src={navBtn}
                        style={{
                          ...imageStyle,
                          position: 'relative',
                          top: '17px',
                        }}
                        className="nav-btn transition"
                      />
                    </Stack>
                  </CardBody>
                </Card>
                <Card
                  className="radius-30 intro-card pointer"
                  bg={cardBackgroundColor}
                  p={0}
                  mt={5}
                  w={['100%', '100%', '50%']}
                  onClick={goToWork}
                >
                  <CardBody p={[6, 12, 6, 12]}>
                    <Stack alignItems={'center'}>
                      <Text
                        className="opacity fs-30 fw-700"
                        style={{ lineHeight: '0' }}
                      >
                        MY WORKS
                      </Text>
                      <Image src={laptop} w={'138px'} />
                    </Stack>
                    <Stack
                      direction={'row'}
                      justifyContent={'space-between'}
                      mt={3}
                    >
                      <div>
                        <p className="subtitle">showcase</p>
                        <p className="title">Projects</p>
                      </div>
                      <Image
                        src={navBtn}
                        style={{
                          ...imageStyle,
                          position: 'relative',
                          top: '17px',
                        }}
                        className="nav-btn transition"
                      />
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>
            </Box>
          </Stack>

          <Stack
            direction={['column', 'column', 'row']}
            spacing="20px"
            w={'100%'}
            mt={5}
          >
            <Card
              className="radius-30 intro-card"
              bg={cardBackgroundColor}
              w={['100%', '100%', '50%']}
              data-aos="zoom-in-up"
              data-aos-offset="250"
            >
              <CardBody p={[6]}>
                <HStack spacing={4} className="radius-30 profile">
                  <Link
                    href="https://www.linkedin.com/in/himanshu25k7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <FaLinkedin size={40} />
                  </Link>
                  <Link href="https://github.com/imhimanshukr" target="_blank">
                    <FaGithub size={40} />
                  </Link>
                </HStack>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  mt={3}
                >
                  <div>
                    <p className="subtitle">stay with me</p>
                    <p className="title">Profiles</p>
                  </div>
                  <Image
                    src={navBtn}
                    style={{ ...imageStyle, position: 'relative', top: '17px' }}
                    className="nav-btn transition"
                  />
                </Stack>
              </CardBody>
            </Card>
            <Card
              className="radius-30 intro-card pointer"
              bg={cardBackgroundColor}
              w={['100%', '100%', '50%']}
              data-aos="zoom-in-up"
              data-aos-offset="250"
            >
              <CardBody p={[6]} pt={[6, 10]}>
                <NavLink to={'/contact'}>
                  <p
                    className="fw-500 contact-head"
                    
                  >
                    Let's
                  </p>
                  <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <p
                      className="fw-500 contact-head"
                      style={{ lineHeight: '60px' }}
                    >
                      Work <span style={{ color: '#5b78f6' }}>together.</span>
                    </p>
                    <Image
                      src={navBtn}
                      style={{ ...imageStyle }}
                      className="nav-btn transition"
                    />
                  </Stack>
                </NavLink>
              </CardBody>
            </Card>
          </Stack>
        </div>
      )}
    </Box>
  );
};

export default Home;
