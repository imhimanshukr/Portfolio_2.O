import React, { useState } from 'react';
import {
  Box,
  Stack,
  Text,
  HStack,
  Link,
  useColorMode,
  Card,
  CardBody,
  Image,
  FormControl,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from 'react-responsive';
import icon2 from '../images/icon2.png';

const Contact = () => {
  const { colorMode } = useColorMode();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const cardBackgroundColor = colorMode === 'dark' ? '#181818' : 'whitesmoke';
  const iconBackgroundColor = colorMode === 'dark' ? '#252525' : 'white';
  const iconCss = {
    background: iconBackgroundColor,
    borderRadius: '50px',
    padding: '25px',
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
  };
  const logoCss = {
    background: iconBackgroundColor,
    borderRadius: '5px',
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  };
  const imageStyle =
    colorMode === 'dark'
      ? { filter: 'brightness(80%)' }
      : { filter: 'brightness(50%)' };
  const email = 'himanshu25k7@gmail.com';
  const mobile = '9664081383';
  const location = 'Darbhanga, Bihar';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleMobileClick = () => {
    window.location.href = `tel:${mobile}`;
  };

  const handleLocationClick = () => {
    alert(`Navigating to ${location}`);
  };
  const handleInputChange = e => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Data:', formData);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    toast.success("Thanks for contact!")
  };

  return (
    <Box mt={[4, 4, 4, '80px']}>
      <Stack
        direction={['column-reverse', 'column-reverse', 'row']}
        justifyContent={'space-between'}
        w={'100%'}
        spacing={['20px']}
      >
        {isMobile && (
          <Box w={['100%', '100%', '26%']}>
            <Text
              textTransform={'uppercase'}
              fontWeight={'500'}
              fontSize={'16px'}
              mb={6}
            >
              Contact Info
            </Text>
            <HStack alignItems={'flex-start'} data-aos="zoom-in-up">
              <Box style={logoCss}>
                <FaEnvelope
                  style={{ width: '30px', height: '30px', opacity: '.8' }}
                />
              </Box>
              <Box>
                <Text fontSize={'14px'} opacity={'.5'} fontWeight={'500'}>
                  MAIL ME
                </Text>
                <Link
                  fontSize={'16px'}
                  fontWeight={'600'}
                  opacity={'.8'}
                  onClick={handleEmailClick}
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  {email}
                </Link>
              </Box>
            </HStack>
            <HStack
              alignItems={'flex-start'}
              mt={[5, 12]}
              data-aos="zoom-in-up"
            >
              <Box style={logoCss}>
                <FaPhone
                  style={{ width: '30px', height: '30px', opacity: '.8' }}
                />
              </Box>
              <Box>
                <Text fontSize={'14px'} opacity={'.5'} fontWeight={'500'}>
                  CONTACT ME
                </Text>
                <Link
                  fontSize={'16px'}
                  fontWeight={'600'}
                  opacity={'.8'}
                  onClick={handleMobileClick}
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  {mobile}
                </Link>
              </Box>
            </HStack>
            <HStack
              alignItems={'flex-start'}
              mt={[5, 12]}
              data-aos="zoom-in-up"
            >
              <Box style={logoCss}>
                <FaMapMarkerAlt
                  style={{ width: '30px', height: '30px', opacity: '.8' }}
                />
              </Box>
              <Box>
                <Text fontSize={'14px'} opacity={'.5'} fontWeight={'500'}>
                  LOCATION
                </Text>
                <Link
                  fontSize={'16px'}
                  fontWeight={'600'}
                  opacity={'.8'}
                  onClick={handleLocationClick}
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  {location}
                </Link>
              </Box>
            </HStack>
            <Text
              textTransform={'uppercase'}
              fontWeight={'500'}
              fontSize={'16px'}
              mt={6}
              data-aos="zoom-in-up"
            >
              Social Info
            </Text>
            <HStack mt={4}>
              <a
                href="https://www.linkedin.com/in/himanshu25k7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                style={iconCss}
                className="pointer"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/imhimanshukr"
                target="_blank"
                style={iconCss}
                className="pointer"
              >
                <FaGithub size={25} />
              </a>
            </HStack>
          </Box>
        )}

        {!isMobile && (
          <Box w={['100%', '100%', '26%']}>
            <Text
              textTransform={'uppercase'}
              fontWeight={'500'}
              fontSize={'16px'}
              mb={6}
            >
              Contact Info
            </Text>
            <HStack alignItems={'flex-start'}>
              <Box style={logoCss}>
                <FaEnvelope
                  style={{ width: '30px', height: '30px', opacity: '.8' }}
                />
              </Box>
              <Box>
                <Text fontSize={'14px'} opacity={'.5'} fontWeight={'500'}>
                  MAIL ME
                </Text>
                <Link
                  fontSize={'16px'}
                  fontWeight={'600'}
                  opacity={'.8'}
                  onClick={handleEmailClick}
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  {email}
                </Link>
              </Box>
            </HStack>
            <HStack alignItems={'flex-start'} mt={[5, 12]}>
              <Box style={logoCss}>
                <FaPhone
                  style={{ width: '30px', height: '30px', opacity: '.8' }}
                />
              </Box>
              <Box>
                <Text fontSize={'14px'} opacity={'.5'} fontWeight={'500'}>
                  CONTACT ME
                </Text>
                <Link
                  fontSize={'16px'}
                  fontWeight={'600'}
                  opacity={'.8'}
                  onClick={handleMobileClick}
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  {mobile}
                </Link>
              </Box>
            </HStack>
            <HStack alignItems={'flex-start'} mt={[5, 12]}>
              <Box style={logoCss}>
                <FaMapMarkerAlt
                  style={{ width: '30px', height: '30px', opacity: '.8' }}
                />
              </Box>
              <Box>
                <Text fontSize={'14px'} opacity={'.5'} fontWeight={'500'}>
                  LOCATION
                </Text>
                <Link
                  fontSize={'16px'}
                  fontWeight={'600'}
                  opacity={'.8'}
                  onClick={handleLocationClick}
                  _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  {location}
                </Link>
              </Box>
            </HStack>
            <Text
              textTransform={'uppercase'}
              fontWeight={'500'}
              fontSize={'16px'}
              mt={6}
            >
              Social Info
            </Text>
            <HStack mt={4}>
              <a
                href="https://www.linkedin.com/in/himanshu25k7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                style={iconCss}
                className="pointer"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/imhimanshukr"
                target="_blank"
                style={iconCss}
                className="pointer"
              >
                <FaGithub size={25} />
              </a>
            </HStack>
          </Box>
        )}
        <Card
          w={['100%', '100%', '75%']}
          bg={cardBackgroundColor}
          className="radius-30 sticky-about-card"
          mb={6}
        >
          <CardBody p={[6, 10]} position={'relative'}>
            <HStack justifyContent={'space-between'}>
              <Text
                className="fw-500 contact-head"
                style={{ lineHeight: '60px' }}
                w={['200px', '100%']}
              >
                Let's work <span style={{ color: '#5b78f6' }}>together.</span>
              </Text>
              <Image
                src={icon2}
                className="conatctIcon2"
                style={{ ...imageStyle }}
              />
            </HStack>
            <Box mx="auto" mt={10}>
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl id="name" isRequired>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      variant="filled"
                      p={'25px 15px'}
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </FormControl>

                  <FormControl id="email" isRequired>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      variant="filled"
                      p={'25px 15px'}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </FormControl>

                  <FormControl id="subject" isRequired>
                    <Input
                      type="text"
                      placeholder="Subject"
                      variant="filled"
                      p={'25px 15px'}
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </FormControl>

                  <FormControl id="message" isRequired>
                    <Textarea
                      placeholder="Your Message"
                      resize="vertical"
                      variant="filled"
                      p={'25px 15px'}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <button
                    className={`contactBtn ${
                      colorMode === 'dark' ? 'darkBtn' : 'lightBtn'
                    }`}
                    style={{ borderRadius: '5px' }}
                    type="submit"
                  >
                    Send Message
                  </button>
                </VStack>
              </form>{' '}
            </Box>
          </CardBody>
        </Card>
      </Stack>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </Box>
  );
};

export default Contact;
