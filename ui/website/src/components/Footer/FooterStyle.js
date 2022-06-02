// import React from 'react'
// // import {FaFacebook,FaInstgram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa';
//     import { 
//         FooterContainer,
//         FooterWrap,
//         FooterLinksContainer,
//         FooterLinksWrapper,
//         FooterLinkItems,
//         FooterLinkTitle,
//         FooterLink,
//          } from './FooterElements'
// const Footer = () => {
//   return (
//     <FooterContainer>
//         <FooterWrap>
//             <FooterLinksContainer>
//                 <FooterLinksWrapper>
//                     <FooterLinkItems>
//                         <FooterLinkTitle> About Us</FooterLinkTitle>
//                             <FooterLink to="signin">How it works</FooterLink>
//                             <FooterLink to="signin">Testimonials</FooterLink>
//                             <FooterLink to="signin">Careers</FooterLink>
//                             <FooterLink to="signin">Investors</FooterLink>
//                             <FooterLink to="signin">Terms of Service</FooterLink>
//                     </FooterLinkItems>
//                     <FooterLinkItems>
//                         <FooterLinkTitle> Contact Us</FooterLinkTitle>
//                             <FooterLink to="/">Contact</FooterLink>
//                             <FooterLink to="/">Support</FooterLink>
//                             <FooterLink to="/">Destinations</FooterLink>
//                             <FooterLink to="/">Donors</FooterLink>
//                     </FooterLinkItems>
//                 </FooterLinksWrapper>
//                 <FooterLinksWrapper>
//                     <FooterLinkItems>
//                         <FooterLinkTitle> Videos</FooterLinkTitle>
//                             <FooterLink to="/">Submit Video</FooterLink>
//                             <FooterLink to="/">Ambassadors</FooterLink>
//                             <FooterLink to="/">Agency</FooterLink>
//                             <FooterLink to="/">Influencer</FooterLink>
//                     </FooterLinkItems>
//                     {/* <FooterLinkItems>
//                         <FooterLinkTitle> Social Media</FooterLinkTitle>
//                             <FooterLink to="/">Instagram</FooterLink>
//                             <FooterLink to="/">Facebook</FooterLink>
//                             <FooterLink to="/">Youtube</FooterLink>
//                             <FooterLink to="/">Twitter</FooterLink>
//                     </FooterLinkItems> */}
//                 </FooterLinksWrapper>
//             </FooterLinksContainer>
//             {/* <SocialMedia>
//                 <SocialMediaWrap>
//                     <SocialLogo to='/'>
//                         dolla
//                         </SocialLogo>
//                         <WebsiteRights>dolla {new Date().getFullYear()}
//                         All Rights reserved. </WebsiteRights>
//                         <SocialIcons>
//                     <SocialIconLink href= "/" target= "_blank"
//                     aria-label = "Facebook">
//                     <FaFacebook/>
//                     </SocialIconLink>
//                     <SocialIconLink href= "/" target= "_blank"
//                     aria-label = "Instagram">
//                     <FaInstgram/>
//                     </SocialIconLink>
//                     <SocialIconLink href= "/" target= "_blank"
//                     aria-label = "Youtube">
//                     <FaYoutube/>
//                     </SocialIconLink>
//                     <SocialIconLink href= "/" target= "_blank"
//                     aria-label = "Twitter">
//                     <FaTwitter/>
//                     <SocialIconLink href= "/" target= "_blank"
//                     aria-label = "Linedin">
//                     <FaLinkedin/>
//                     </SocialIconLink>
//                     </SocialIconLink>
//                     </SocialIcons>
//                 </SocialMediaWrap>
//             </SocialMedia> */}
//         </FooterWrap>
//     </FooterContainer>
//   )
// }

// export default Footer

import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: black;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
