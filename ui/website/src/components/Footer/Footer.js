import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";
// import {Route} from "react-router-dom"
// import Mission from "../Missison";

const Footer = () => {
	
return (
	<Box style={{position: "relative"}}>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
	
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="../Vision">Misson/Vision</FooterLink>
			<FooterLink href="image0.jpeg">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="http://atlantabreakfastclub.com/">Job Placement</FooterLink>
			<FooterLink href="https://www.servsafe.com/">ServSafe</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Address</FooterLink>
			<FooterLink href="#">1300 Joseph E. Boone Blvd NW, Atlanta, GA 30314</FooterLink>
			<FooterLink href="#">Phone Number</FooterLink>
			<FooterLink href="#">470-638-8109</FooterLink>
			<FooterLink href="https://docs.google.com/forms/d/e/1FAIpQLSe-HwllVtU_VC73qeOVkaQ2e4aOTzj995j04pmFErssAzvPKQ/viewform">Apply Now</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.instagram.com/gfcculinaryprogram/">
				<i className="fab fa-instagram">
					<span style={{ marginLeft: "10px" }}>
					Instagram
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