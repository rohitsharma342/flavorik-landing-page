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
// import nodemailer from 'nodemailer';

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
    console.log(e)
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

  
// app.post('/sent-email',async(req,res)=>{
//   try {
//     const {name,email,phone,state,msg}=req.body;
    
//     let transporter = nodemailer.createTransport({
//       host: "smtpout.secureserver.net",
//       port: 465,
//       secure: true, // true for 465, false for other ports
//       auth: {
//         user: 'customer@medocly.com', // generated ethereal user
//         pass: 'Pankaj@123', // generated ethereal password
//       },
//     });
//     let info = await transporter.sendMail({
//       from: `medocly63@gmail.com      `, // sender address
//       to: `customer@medocly.com`, // list of receivers
//       subject: "info regarding your platform", // Subject line
//       text: `hello my Name is ${name}
//       gmail:${email},
//       phone:${phone},
//       state:${state},
//       msg:${msg}
//       `, // plain text body
//       //html:"<p>"+msg+"</p></br><table class='table table-hover form-control bg-dark'><tr><th>Name</th><th>Phone</th><th>State</th></tr><tr><td>"+name+"</td><td>"+phone+"</td><td>"+state+"</td></tr</table>", // html body
//       //html :"<div" +"style=border: 10px solid orangered; width : 350px; border-radius: 10px; height : 200px;"+" ><div"+" style=margin-left : 10px;"+"><h3>"+name+"</h3><h6>"+phone+"</h6><p>"+msg+"</p></div></div>",
//       // attachments:[{
//       //  path:path
//       // }]

//     });
//     res.json({ status: true, message: "email sent successfully",})
//   } catch (error) {
//     res.json({ status: false, message: "something went wrong" })
//   }
// })

const handleSubscriptionForm = async (e) => {
  e.preventDefault();
  
  // const formData = new FormData(e.target);
  // const email = formData.get('email'); // Assuming you have an input field with name="email"

  // Configure SMTPJS with your SMTP server details
  const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    username: 'heychefydev@gmail.com',
    password: 'dasqkjchkasibtxv',
    secure: true, // Set to true if your SMTP server requires TLS
  };

  // Send email using SMTPJS
  Email.send({
    Host: smtpConfig.host,
    Username: smtpConfig.username,
    Password: smtpConfig.password,
    To: 'rohitkumar.brainbox@gmail.com',
    From: 'heychefydev@gmail.com', // Update with your email address
    Subject: 'New Inquiry For Flavorick',
    Body: `You have a new inquiry generated from the website. Please find the lead email below - 
    Email:${state.email}`,
  }).then(
    message => console.log('Email sent successfully:', message)
  ).catch(
    error => console.error('Error sending email:', error)
  );
};


  return (
    <BannerWrapper>
      <Container>
        <ContentArea>
          <Fade direction='down' triggerOnce delay={30}>
            <HighlightedText>
              <strong style={{background:"#ec5862"}}>{discount}</strong> {discountLabel}
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
                  style={{background:"#ec5862",color:"white"}}
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
