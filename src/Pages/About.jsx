import {
  Card,
  CardBody,
  Stack,
  useColorMode,
  Image,
  HStack,
  Box,
  Text,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepTitle,
  Stepper,
  Link
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaBriefcase,
  FaGraduationCap,
} from 'react-icons/fa';
import icon2 from '../images/icon2.png';
import Html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import bootstrap from '../images/bootstrap.png';
import vue from '../images/vue.png';
import vuetify from '../images/vuetify.svg';
import tailwind from '../images/tailwind.png';
import chakra from '../images/chakra.png';
import react from '../images/react.png';
import { useMediaQuery } from 'react-responsive';
import dp from "../images/dp1.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

const About = () => {
  const { colorMode } = useColorMode();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const cardBackgroundColor = colorMode === 'dark' ? '#181818' : 'whitesmoke';
  const iconBackgroundColor = colorMode === 'dark' ? '#252525' : 'white';
  const imageStyle =
    colorMode === 'dark'
      ? { filter: 'brightness(80%)' }
      : { filter: 'brightness(50%)' };
  const iconCss = {
    background: iconBackgroundColor,
    borderRadius: '50px',
    padding: '10px',
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
  };

  const experience = [
    {
      title: 'MAR 2023 - PRESENT',
      description: 'Software Engineer - Iorta Technology Solutions',
    },
    {
      title: 'APR 2022 - FEB 2023',
      description: 'Frontend Developer - Speedlabs',
    },
    {
      title: 'DEC 2021 - FEB 2021',
      description: 'Web Designer - KMV Software Pvt Ltd',
    },
  ];
  const education = [
    { title: '2021', description: 'Bachelor Degree in CSE' },
    { title: '2017', description: 'Intermediate' },
    { title: '2015', description: 'Matriculation' },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <Box mt={[4, 4, 4, '80px']}>
      <Stack
        direction={['column', 'column', 'row']}
        justifyContent={'space-between'}
        w={'100%'}
        spacing={['20px']}
      >
        <Card
          bg={cardBackgroundColor}
          className="radius-30 sticky-about-card"
          w={['100%', '100%', '28%']}
          height={'max-content'}
        >
          <CardBody p={6} textAlign={'center'} m={'auto'}>
            <Image
              src={dp}
              //src="https://bit.ly/dan-abramov"
              borderRadius="30px"
              style={{ filter: 'grayscale(0.5 )' }}
            />
            <HStack justifyContent={'center'} mt={6} mb={4}>
              <Link
                href="https://www.linkedin.com/in/himanshu25k7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                style={iconCss}
                className="pointer"
              >
                <FaLinkedin size={25} />
              </Link>
              <Link
                href="https://github.com/imhimanshukr"
                target="_blank"
                style={iconCss}
                className="pointer"
              >
                <FaGithub size={25} />
              </Link>
            </HStack>
            <NavLink
              className={`contactBtn ${
                colorMode === 'dark' ? 'darkBtn' : 'lightBtn'
              }`}
              to={'/contact'}
            >
              Contact Me
            </NavLink>
          </CardBody>
        </Card>
        <Box w={['100%', '100%', '75%']}>
          {isMobile && (
            <Card
              bg={cardBackgroundColor}
              className="radius-30"
              data-aos="zoom-in-up"
            >
              <Image
                src={icon2}
                style={{ ...imageStyle, width: '40px', marginLeft: '20px' }}
              />
              <CardBody p={6} pt={0}>
                <Text fontSize={['26', '36px']} fontWeight={'500'}>
                  Himanshu Kumar
                </Text>
                <Text opacity={'.7'}>
                  I am a highly motivated frontend developer with a passion for
                  creating visually appealing and user-friendly websites and
                  web-based applications.
                </Text>
                {/* <br/> */}
                <Text opacity={'.7'}>
                  This portfolio showcases my technical skills and experience,
                  highlighting my ability to effectively deliver outstanding web
                  solutions. My goal is to continue learning and growing in the
                  field, and to work on innovative projects that push the
                  boundaries of what's possible on the web.
                </Text>
              </CardBody>
            </Card>
          )}
          {!isMobile && (
            <Card bg={cardBackgroundColor} className="radius-30">
              <Image
                src={icon2}
                style={{ ...imageStyle, width: '40px', marginLeft: '20px' }}
              />
              <CardBody p={6} pt={0}>
                <Text fontSize={['26', '36px']} fontWeight={'500'}>
                  Himanshu Kumar
                </Text>
                <Text opacity={'.7'}>
                  I am a highly motivated frontend developer with a passion for
                  creating visually appealing and user-friendly websites and
                  web-based applications.
                </Text>
                {/* <br/> */}
                <Text opacity={'.7'}>
                  This portfolio showcases my technical skills and experience,
                  highlighting my ability to effectively deliver outstanding web
                  solutions. My goal is to continue learning and growing in the
                  field, and to work on innovative projects that push the
                  boundaries of what's possible on the web.
                </Text>
              </CardBody>
            </Card>
          )}
          <Card
            bg={cardBackgroundColor}
            className="radius-30"
            mt={'20px'}
            data-aos="zoom-in-up"
          >
            <CardBody p={6}>
              <Text className="title" mb={4}>
                EXPERIENCE
              </Text>
              <Stepper
                orientation="vertical"
                height="230px"
                gap="0"
              >
                {experience.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator
                      opacity={'.4'}
                      style={{
                        borderColor: iconBackgroundColor,
                        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <FaBriefcase />
                    </StepIndicator>
                    <Box>
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription style={{ whiteSpace: 'break-spaces' }}>
                        {step.description}
                      </StepDescription>
                    </Box>
                    <StepSeparator />
                  </Step>
                ))}
              </Stepper>
            </CardBody>
          </Card>
          <Card
            bg={cardBackgroundColor}
            className="radius-30"
            mt={'20px'}
            data-aos="zoom-in-up"
          >
            <CardBody p={6}>
              <Text className="title" mb={4}>
                EDUCATION
              </Text>
              <Stepper orientation="vertical" height="230px" gap="0">
                {education.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator
                      opacity={'.4'}
                      style={{
                        borderColor: iconBackgroundColor,
                        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <FaGraduationCap size={'20px'} />
                    </StepIndicator>

                    <Box>
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription style={{ whiteSpace: 'break-spaces' }}>
                        {step.description}
                      </StepDescription>
                    </Box>
                    <StepSeparator />
                  </Step>
                ))}
              </Stepper>
            </CardBody>
          </Card>
          <Card
            className="radius-30 intro-card"
            bg={cardBackgroundColor}
            data-aos="zoom-in-up"
            mt={'20px'}
          >
            <CardBody p={[6]}>
              <Text className="title">SKILLS</Text>
              <Stack direction={['row']} mt={'10px'}>
                <Box w={['50%']}>
                  <HStack mt={2}>
                    <Image src={Html} width={'20px'} />
                    <p>HTML</p>
                  </HStack>
                  <HStack mt={2}>
                    <Image src={js} width={'20px'} />
                    <p>JS</p>
                  </HStack>
                  <HStack mt={2}>
                    <Image src={vue} width={'20px'} />
                    <p>Vue JS</p>
                  </HStack>
                  <HStack mt={2}>
                    <Image src={chakra} width={'20px'} />
                    <p>Chakra UI</p>
                  </HStack>
                  <HStack mt={2}>
                    <Image src={bootstrap} width={'20px'} />
                    <p>Bootstrap</p>
                  </HStack>
                </Box>
                <Box w={['50%']}>
                  <HStack mt={2}>
                    <Image src={css} width={'20px'} />
                    <p>CSS</p>
                  </HStack>
                  <HStack mt={2}>
                    <Image src={react} width={'20px'} />
                    <p>React JS</p>
                  </HStack>
                  <HStack mt={2}>
                    <Image src={vuetify} width={'20px'} />
                    <p>Vuetify</p>
                  </HStack>
                  <HStack mt={2}>
                    <Image src={tailwind} width={'20px'} />
                    <p>Tailwind CSS</p>
                  </HStack>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card
            className="radius-30 intro-card"
            bg={cardBackgroundColor}
            data-aos="zoom-in-up"
            mt={'20px'}
          >
            <CardBody p={[6]}>
              <Text className="title">PROFILES</Text>
              <Stack direction={'row'} justifyContent={'space-between'} mt={3}>
                <HStack
                  spacing={4}
                  className="radius-30 profile"
                  style={{
                    background:
                      colorMode === 'dark' ? '#0000001c' : '#e8f4f900',
                    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
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
                <Image
                  src={icon2}
                  style={{ ...imageStyle, position: 'relative', top: '-70px' }}
                  className="nav-btn transition"
                />
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
