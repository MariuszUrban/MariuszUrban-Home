import "./App.scss";
import React, { useState, useRef, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import AOS from "aos";
import "aos/dist/aos.css";
import DisplayContainer from "./components/DisplayContainer/DisplayContainer";
import BackgroundContainer from "./components/BackgroundContainer/BackgroundContainer";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import TextContainer from "./components/TextContainer/TextContainer";
import Header from "./components/Header/Header";
import LangSwitch from "./components/LangSwitch/LangSwitch";
import Navigation from "./components/Navigation/Navigation";
import Description from "./components/Description/Description";
import Technologies from "./components/Technologies/Technologies";
import Message from "./components/Message/Message";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import NavBar from "./components/NavigationMoving/NavBar";
import NavLinks from "./components/NavigationMoving/NavLinks";

function App() {
  AOS.init();

  //getting height of whole page
  const [appHeight, setHeight] = useState(0);
  console.log("🚀 ~ App ~ appHeight", appHeight);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  //getting height of first section

  const [firstSectionHeight, setSectionHeight] = useState(0);
  console.log("🚀 ~ App ~ firstSectionHeight", firstSectionHeight);

  const refSec = useRef(null);

  useEffect(() => {
    setSectionHeight(refSec.current.clientHeight);
  }, []);

  // checking the differrence

  const difference = appHeight - firstSectionHeight;
  console.log("🚀 ~ App ~ difference", difference);

  // showing nav bar
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log("🚀 ~ useScrollPosition ~ currPos", currPos.y);
      const isShown = currPos.y + appHeight;
      isShown <= difference ? setHideOnScroll(true) : setHideOnScroll(false);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  return (
    <div ref={ref} className="App">
      <section ref={refSec} className="section start" name="start">
        <DisplayContainer
          background={
            <BackgroundContainer
              image1={
                <BackgroundImage
                  element="process"
                  animation="fade-right"
                  delay="300"
                  mirror="true"
                  once="false"
                />
              }
              image2={
                <BackgroundImage
                  element="me"
                  animation="fade-up"
                  delay="700"
                  mirror="true"
                  once="false"
                />
              }
              image3={
                <BackgroundImage
                  element="bookshelf"
                  animation="fade-left"
                  delay="500"
                  mirror="true"
                  once="false"
                />
              }
            />
          }
          text={
            <TextContainer
              header={
                <Header
                  title="STUDIO BOLD"
                  lang={<LangSwitch />}
                  style="start"
                />
              }
              nav={<Navigation />}
              style="start"
            />
          }
        />
      </section>
      <NavBar show={hideOnScroll}>
        <NavLinks />
      </NavBar>
      <section className="section front-end" name="front">
        <DisplayContainer
          background={
            <BackgroundContainer
              image1={
                <BackgroundImage
                  element="code"
                  animation="fade-right"
                  delay="300"
                  mirror="true"
                  once="false"
                />
              }
              image2={
                <BackgroundImage
                  element="dev"
                  animation="fade-left"
                  delay="450"
                  mirror="true"
                  once="false"
                />
              }
            />
          }
          text={
            <TextContainer
              header={
                <Header title="Front-End Development" style="front-end" />
              }
              desc={<Description desc="front" />}
              tech={<Technologies tech="front" />}
              style="front"
            />
          }
        />
      </section>
      <section className="section ux" name="ux">
        <DisplayContainer
          background={
            <BackgroundContainer
              image1={
                <BackgroundImage
                  element="sky"
                  animation="fade-up"
                  delay="250"
                  mirror="true"
                  once="false"
                  placement="top-center"
                />
              }
              image2={
                <BackgroundImage
                  element="tree"
                  animation="zoom-out-left"
                  delay="250"
                  mirror="true"
                  once="false"
                />
              }
              image3={
                <BackgroundImage
                  element="girl"
                  animation="zoom-out-up"
                  delay="350"
                  mirror="true"
                  once="false"
                />
              }
            />
          }
          text={
            <TextContainer
              header={<Header title="UI/UX Design" style="ux" />}
              desc={<Description desc="ux" />}
              tech={<Technologies tech="ux" />}
              style="ux"
            />
          }
        />
      </section>
      <section className="section graphic" name="graphic">
        <DisplayContainer
          background={
            <BackgroundContainer
              image1={
                <BackgroundImage
                  element="threed"
                  animation="zoom-in-leftp"
                  delay="400"
                  mirror="true"
                  once="false"
                />
              }
              image2={
                <BackgroundImage
                  element="illustration"
                  animation="fade-up-left"
                  delay="250"
                  mirror="true"
                  once="false"
                />
              }
              image3={
                <BackgroundImage
                  element="cosmos"
                  animation="zoom-out-up"
                  delay="350"
                  mirror="true"
                  once="false"
                />
              }
            />
          }
          text={
            <TextContainer
              header={<Header title="Grafika & 3D" style="graphic" />}
              desc={<Description desc="graphic" />}
              tech={<Technologies tech="graphic" />}
              style="graphic"
            />
          }
        />
      </section>
      <section className="section about" name="about">
        <DisplayContainer
          background={
            <BackgroundContainer
              image1={
                <BackgroundImage
                  element="cloud"
                  animation="fade-left"
                  delay="250"
                  mirror="true"
                  once="false"
                  placement="center-bottom"
                />
              }
              image2={
                <BackgroundImage
                  element="melek"
                  animation="fade-up"
                  delay="600"
                  mirror="true"
                  once="false"
                  placement="center-bottom"
                />
              }
              image3={
                <BackgroundImage
                  element="ball"
                  animation="fade-up-right"
                  delay="400"
                  mirror="true"
                  once="false"
                />
              }
              image4={
                <BackgroundImage
                  element="me-art"
                  animation="flip-right"
                  delay="300"
                  mirror="true"
                  once="false"
                />
              }
            />
          }
          text={
            <TextContainer
              header={<Header title="O mnie " style="about" />}
              desc={<Description desc="about" />}
              style="about"
            />
          }
        />
      </section>
      <section className="section contact" name="contact">
        <DisplayContainer
          background={
            <BackgroundContainer
              image1={
                <BackgroundImage
                  element="bush"
                  animation="fade-right"
                  delay="300"
                  mirror="true"
                  once="false"
                />
              }
              image2={
                <BackgroundImage
                  element="env"
                  animation="fade-left"
                  delay="400"
                  mirror="true"
                  once="false"
                />
              }
              image3={
                <BackgroundImage
                  element="sun"
                  animation="fade-up"
                  delay="200"
                  mirror="true"
                  once="false"
                />
              }
            />
          }
          text={
            <TextContainer
              header={<Header title="Kontakt" style="contact" />}
              message={<Message />}
              social={<SocialMedia />}
              style="contact"
            />
          }
        />
      </section>
    </div>
  );
}

export default App;
