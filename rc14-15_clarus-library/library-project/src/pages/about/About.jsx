import React from "react";
import {
  AboutContainer,
  IconContainer,
  InfoContainer,
  ProfileImg,
} from "./About.style";
import profile from "../../assets/bskprofile.jpg";
import Icon from "../../components/icon/Icon";
import { iconData } from "../../helper/iconData";

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="bekir" />
      <InfoContainer>
        <h2>Hi, I'm Bekir</h2>
        <h3>I’m currently Front-end Web Developer</h3>
        <h4>
          Passionate Software developer (Front-end Developer)with over 3 years
          in the industry, including 1+ years of professional experience.
          Skilled in game development using Unity and C#, with a strong
          understanding of object-oriented programming, data structures, and the
          software development lifecycle. Recently pivoted to front-end web
          development, mastering HTML, CSS, JavaScript, and React. Ready to
          bring my passion and skills to a new challenge as a front-end web
          developer.
        </h4>
        <h4>💬 You can ask me anything you want to know</h4>
      </InfoContainer>
      <IconContainer>
        {iconData.map((item) => (
          <a key={item.icon} href={item.href}>
            <Icon icon={item.icon} path={item.path} hoverColor={item.color} />
          </a>
        ))}
      </IconContainer>
    </AboutContainer>
  );
};

export default About;
