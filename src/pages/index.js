import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from 'common/theme/interior';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Interior/Navbar';
import Banner from 'containers/Interior/Banner';
import Feature from 'containers/Interior/Feature';
import AboutUs from 'containers/Interior/AboutUs';
import Project from 'containers/Interior/Project';
import Team from 'containers/Interior/Team';
import News from 'containers/Interior/News';
import Testimonial from 'containers/Interior/Testimonial';
import Gallery from 'containers/Interior/Gallery';
import Footer from 'containers/Interior/Footer';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, InteriorWrapper, ContentWrapper } from 'containers/Interior/interior.style';
import Download from 'containers/Interior/Download';

const Main = () => {
  
  return (
    <ThemeProvider theme={interiorTheme}>
      <Fragment>
        <Head>
          <title>Flavorick</title>
          <meta name="theme-color" content="#171717" />
          <meta name="description" content="Embark on Your Flavorful Journey Today" />
          <meta name="keywords" content="React, React js, Next, Next js, Gatsby, Gatsby Js, Fast Landing, Modren Landing" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
        </Head>
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <InteriorWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Download/>
            <Feature />
            <AboutUs />
            <Project />
            <Team />
            {/* <News /> */}
            <Testimonial />
            <Gallery />
         
          </ContentWrapper>
          <Footer />
        </InteriorWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;
