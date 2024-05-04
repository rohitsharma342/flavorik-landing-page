import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Input from 'common/components/Input';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import { CircleLoader } from '../interior.style';
import axios from 'axios';
import BannerWrapper, {
  Container,
  ContentArea,
  HighlightedText,
  FormWrapper,
  ButtonGroup,
  CarouselArea,
} from './banner.style';

import { bannerData } from 'common/data/Interior';
import { Fade } from 'react-awesome-reveal';
import { background } from 'styled-system';
import { detectDevice } from 'deviceDetector';

const Banner = () => {
  const { discount, discountLabel, title, text, carousel } = bannerData;
  const glideOptions = {
    type: 'carousel',
    perView: 2,
    gap: 20,
    breakpoints: {
      1200: {
        perView: 2,
      },
      667: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  };
  const [deviceType, setDeviceType] = useState('Unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const detectedDevice = detectDevice(userAgent);
    setDeviceType(detectedDevice);
  }, []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const [state, setState] = useState({ email: '', valid: '' });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnChange = (e) => {
    let value = '';
    if (e.match(emailRegex)) {
      if (e.length > 0) {
        value = e;
        setState({ ...state, email: value, valid: 'valid' });
      }
    } else {
      if (e.length > 0) {
        setState({ ...state, valid: 'invalid' });
      } else {
        setState({ ...state, valid: '' });
      }
    }
  };

  const handleSubscriptionForm = async (e) => {
    e.preventDefault();
    try {
      if (state?.email && state?.email?.length) {
        const formData = {
          email: state?.email
        }
        const response = await axios.post('https://chef.flavorick.com/api/send-email-landing', formData);
        console.log(response.data);
        setState({ email: '', valid: '' });
      }

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <BannerWrapper>
      <Container>
        <ContentArea>
          <Fade direction='down' triggerOnce delay={30}>
            <HighlightedText>
              <strong style={{ background: "#ec5862" }}>{discount}</strong> {discountLabel}
            </HighlightedText>
            <Heading as="h1" content={title} />
            <Text content={text} />
            <FormWrapper onSubmit={handleSubscriptionForm}>
              <Input
                className={state.valid}
                type="email"
                placeholder="Enter email address"
                icon={<Icon icon={iosEmailOutline} />}
                iconPosition="left"
                required={true}
                onChange={handleOnChange}
                aria-label="email"
              />
              <ButtonGroup>
                <Button
                  type="submit"
                  colors="primaryWithBg"
                  title="I'AM INTERESTED"
                  style={{ background: "#ec5862", color: "white" }}
                />
                {/* <Button
                style={{color:"black"}}
                  title="EXPLORE MORE"
                  variant="textButton"
                  icon={<i className="flaticon-next" style={{color:"black"}}/>}
                /> */}
              </ButtonGroup>
            </FormWrapper>
          </Fade>
        </ContentArea>
        {/* End of content section */}

        <CarouselArea>
          {loading ? (
            <GlideCarousel
              carouselSelector="interior_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow" />}
              prevButton={<span className="prev_arrow" />}
            >
              <Fragment>
                {carousel.map((item) => (
                  <GlideSlide key={`carousel_key${item.id}`}>
                    <Link
                      href={item.link}
                      //  target='_blank'
                      className="item_wrapper"
                    >
                      <Image src={item.thumb_url?.src} alt={item.title} />
                      <Heading as="h4" content={item.title} />
                    </Link>
                  </GlideSlide>
                ))}


              </Fragment>
            </GlideCarousel>
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
        </CarouselArea>
        {/* End of carousel section */}
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
