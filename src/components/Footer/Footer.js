import React from 'react';
import { Button } from '../../globalStyles';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubText,
    FooterSubHeading,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.elements';

function Footer() {
    return ( <
        FooterContainer >
        <
        FooterSubscription >
        <
        FooterSubHeading >
        Join as a member and never miss any latest happenings in the world of medicine <
        /FooterSubHeading> <
        FooterSubText > You can unsubscribe at any time. < /FooterSubText> <
        Form >
        <
        FormInput name = 'email'
        type = 'email'
        placeholder = 'Your Email' / >
        <
        Button fontBig > Subscribe < /Button> < /
        Form > <
        /FooterSubscription> <
        FooterLinksContainer >
        <
        FooterLinksWrapper >
        <
        FooterLinkItems >
        <
        FooterLinkTitle > About Us < /FooterLinkTitle> <
        FooterLink to = '/sign-up' > How it works < /FooterLink> <
        FooterLink to = '/' > Testimonials < /FooterLink> <
        FooterLink to = '/' > Careers < /FooterLink> <
        FooterLink to = '/' > Investors < /FooterLink> <
        FooterLink to = '/' > Terms of Service < /FooterLink> < /
        FooterLinkItems > <
        FooterLinkItems >
        <
        FooterLinkTitle > Contact Us < /FooterLinkTitle> <
        FooterLink to = '/' > Contact < /FooterLink> <
        FooterLink to = '/' > Support < /FooterLink> <
        FooterLink to = '/' > Partner Hospitals < /FooterLink> <
        FooterLink to = '/' > Logistical Requiremnets < /FooterLink> < /
        FooterLinkItems > <
        /FooterLinksWrapper> <
        FooterLinksWrapper >
        <
        FooterLinkItems >
        <
        FooterLinkTitle > Online Medics < /FooterLinkTitle> <
        FooterLink to = '/' > Dietician < /FooterLink> <
        FooterLink to = '/' > Therapist < /FooterLink> <
        FooterLink to = '/' > Chiropracter < /FooterLink> <
        FooterLink to = '/' > General Physician < /FooterLink> < /
        FooterLinkItems > <
        FooterLinkItems >
        <
        FooterLinkTitle > Social Media < /FooterLinkTitle> <
        FooterLink to = '/' > Instagram < /FooterLink> <
        FooterLink to = '/' > Facebook < /FooterLink> <
        FooterLink to = '/' > Youtube < /FooterLink> <
        FooterLink to = '/' > Twitter < /FooterLink> < /
        FooterLinkItems > <
        /FooterLinksWrapper> < /
        FooterLinksContainer > <
        SocialMedia >
        <
        SocialMediaWrap >
        <
        SocialLogo to = '/' >
        <
        SocialIcon / >
        JARVIS <
        /SocialLogo> <
        WebsiteRights > JARVIS 2020 < /WebsiteRights> <
        SocialIcons >
        <
        SocialIconLink href = '/'
        target = '_blank'
        arialabel = 'Facebook' >
        <
        FaFacebook / >
        <
        /SocialIconLink> <
        SocialIconLink href = '/'
        target = '_blank'
        arialabel = 'Instagram' >
        <
        FaInstagram / >
        <
        /SocialIconLink> <
        SocialIconLink href = {
            '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
        }
        rel = 'noopener noreferrer'
        target = '_blank'
        arialabel = 'Youtube' >
        <
        FaYoutube / >
        <
        /SocialIconLink> <
        SocialIconLink href = '/'
        target = '_blank'
        arialabel = 'Twitter' >
        <
        FaTwitter / >
        <
        /SocialIconLink> <
        SocialIconLink href = '/'
        target = '_blank'
        arialabel = 'LinkedIn' >
        <
        FaLinkedin / >
        <
        /SocialIconLink> < /
        SocialIcons > <
        /SocialMediaWrap> < /
        SocialMedia > <
        /FooterContainer>
    );
}

export default Footer;