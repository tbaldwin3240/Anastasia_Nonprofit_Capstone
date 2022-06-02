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
			<FooterLink href="#">Mission</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Job Placement</FooterLink>
			<FooterLink href="https://www.servsafe.com/ServSafe-Manager/Get-Certified">ServSafe</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Address</FooterLink>
			<FooterLink href="#">1300 Joseph E. Boone Blvd NW, Atlanta, GA 30314</FooterLink>
			<FooterLink href="#">Phone Number</FooterLink>
			<FooterLink href="#">470-638-8109</FooterLink>
			<FooterLink href="https://docs.google.com/forms/d/e/1FAIpQLSe-HwllVtU_VC73qeOVkaQ2e4aOTzj995j04pmFErssAzvPKQ/viewform">Apply</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			{/* <FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink> */}
			<FooterLink href="https://www.instagram.com/gfcculinaryprogram/?igshid=YmMyMTA2M2Y=">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			{/* </FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i> */}
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
