// import styled from 'styled-components'
// import {Link}from 'react-router-dom'

// export const FooterContainer = styled.footer`
// background-color: #101522;
// `;

// export const FooterWrap = styled.div`
// padding: 48px 24px;
// display:flex;
// flex-direction:column;
// justify-content:center;
// align-items:center;
// max-width:1100px;
// margin:0 auto;
// `;


// export const FooterLinksContainer= styled.div`
// display:flex;
// justify-content:center;

// @media screen and(max-width:820px) {
//     padding-top:32px
// }
// `;

// export const FooterLinksWrapper = styled.div`
// display:flex;

// @media screen and (max-width:820px) {
//     flex-direction:column;
// }
// `;

// export const FooterLinkItems = styled.div`
// display:flex;
// flex-direction: column;
// align-items: flex-start;
// margin:16px;
// text-align: left;
// width:160px;
// box sixing: border-box;
// color:#fff;

// @media screen and (max-width:420px) {
//     margin:0;
//     padding:10px;
//     width:100;
// }
// `;
// export const FooterLinkTitle = styled.h1`
// font-size:14px;
// margin-bottom:16px;
// `;

// export const FooterLink = styled(Link)`
// color:#fff;
// text-decoration:none;
// margin-bottom:0.5rem;
// font-size:14px;

// &:hover {
//     color:#01bf71;
//     transition:0.3s ease-out;
// }
// `;

// export const SocialMedia = styled.section`
// max width: 1000px;
// width:100%;
// `;

// export const SocialMediaWrap = styled.div`
// display:flex;
// justify-content:space-between
// align-items:center;
// max-width: 1100px;
// margin: 40px auto 0 auto;

// @media screen and (max-width:820px) {
//     flex-direction:column;
// }
// `;

// export const SocialLogo = styled(Link)`
// color:#fff;
// justify-self: start;
// cursor: pointer;
// text-decoration: none;
// font-size: 1.5rem;
// display: flex;
// align-item: center;
// margin-bottom: 16px;
// font-weight: bold;
// `;

// export const WebsiteRights = styled.small`
// color: #fff;
// margin-bottom:16px;
// `;

// export const SocialIcons = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
// width: 240px;
// `;

// export const SocialIconLink = styled.a`
// color: #fff;
// font-size: 24px;
// `;

import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
	
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="https://cityofrefugeatl.org/job-training">Mission</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
