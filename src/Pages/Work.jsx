import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Text,
  useColorMode,
  Image,
  HStack,
  Box,
  Link
} from '@chakra-ui/react';
import React from 'react';
import navBtn from '../images/horizontal-btn.svg';
import { useMediaQuery } from 'react-responsive';


const Work = () => {
  const { colorMode } = useColorMode();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const cardBackgroundColor = colorMode === 'dark' ? '#181818' : 'whitesmoke';
  const imageStyle =
  colorMode === 'dark'
    ? { filter: 'brightness(120%)', opacity: '.2' }
    : { filter: 'brightness(80%)', opacity: '.5' };

  const projectDetail = [
    {
      language: 'Vue Js | Vuetify',
      projectName: 'YouTube Clone',
      url: 'https://youtube-hms.netlify.app/',
      thumbnail: 'https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2023/06/YouTube.png',
    },
    {
      language: 'Vue Js | Vuetify',
      projectName: 'LangLift',
      url: 'https://langlift.netlify.app/',
      thumbnail: 'https://cdn.hswstatic.com/gif/dictionary.jpg',
    },
    {
      tabId: 3,
      language: 'Vue Js | Vuetify',
      projectName: 'SkyGuru',
      url: 'https://skyguru.netlify.app/',
      thumbnail:
        'https://townsquare.media/site/385/files/2016/05/grey-sky-above-the-trees.jpg?w=980&q=75',
    },
    {
      tabId: 1,
      language: 'Html | CSS',
      projectName: 'Hospital',
      url: 'https://imhimanshukr.github.io/cityHospital/',
      thumbnail:
        'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      tabId: 1,
      language: 'Html | CSS',
      projectName: 'Kovid-19',
      url: 'https://imhimanshukr.github.io/kovid-19/',
      thumbnail:
        'https://cdn.downtoearth.org.in/library/large/2022-01-03/0.35869500_1641208915_p12-13dlpix-istock-1222436349.jpg',
    },
    {
      tabId: 1,
      language: 'Html | CSS',
      projectName: 'Foodies',
      url: 'https://imhimanshukr.github.io/foodies/',
      thumbnail:
        'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg',
    },
    {
      tabId: 1,
      language: 'Html | CSS',
      projectName: 'Oellfare',
      url: 'https://imhimanshukr.github.io/oellfare/',
      thumbnail:
        'https://vrittifoundation.org/wp-content/uploads/2021/10/partnership-NGO-2.jpg',
    },
    {
      tabId: 2,
      language: 'React Js',
      projectName: 'Evento',
      url: 'https://imhimanshukr.github.io/evento/',
      thumbnail:
        'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      tabId: 2,
      language: 'React Js',
      projectName: 'MI Clone',
      url: 'https://miclonehms.netlify.app/',
      thumbnail:
        'https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/30/full/1593533232-6474.jpg?im=Resize,width=480',
    },
    {
      tabId: 3,
      projectName: 'Twitter Clone',
      language: 'Vue Js | Tailwind CSS',
      url: 'https://twitterhms.netlify.app/',
      thumbnail:
        'https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/6304a2578abd315b18c8f6e9_twitter-logo.png',
    },
    // {
    //     tabId: 4,
    //     projectName: 'On the way...',
    //     language: 'Games',
    //     url: "#0",
    //     thumbnail: "https://images.all-free-download.com/images/graphiclarge/error_404_page_not_found_6845510.jpg"
    // },
  ];

  return (
    <Box mt={[4, 4, 4, '30px']}>
      <Text
        textTransform={'uppercase'}
        textAlign={'center'}
        fontSize={['26', '36px']}
        fontWeight={'600'}
        mb={5}
      >
        My Projects
      </Text>
      <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={'20px'}>
        {projectDetail.map((item, index) => (
          <>
            <GridItem >
            <Link href={item.url} isExternal>
              <Card
                bg={cardBackgroundColor}
                className="radius-30 pointer intro-card"
                data-aos={isMobile && (index === 0 || index === 1) ? '' : !isMobile && (index === 0 || index === 1|| index === 2) ? '' : 'zoom-in-up'}
              >
                <CardBody>
                  <Image src={item.thumbnail} borderRadius="30px" w={'100%'} h={'210px'}/>
                  <HStack justifyContent={'space-between'} alignItems={'end'} mt={4}>
                    <div>
                      <p className="subtitle">{item.language}</p>
                      <p className="title">{item.projectName}</p>
                    </div>
                    <Image
                      src={navBtn}
                      style={{ ...imageStyle }}
                      className="nav-btn transition"
                    />
                  </HStack>
                </CardBody>
              </Card>
              </Link>
            </GridItem>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
