/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
/* eslint-disable semi */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  MDBBtn,
  MDBJumbotron,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation
} from 'mdbreact';
import './HomePage.css';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    return this.window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MDBJumbotron fluid>
          <MDBContainer className="text-white text-center mt-5">
            <h1 className="h1-responsive display-2">
              GET FARMSPIRED TODAY, INTO THE FUTURE OF
              <br /> AGRICULTURE.
            </h1>
            <hr />

            <p className="display-5 mx-5 mb-5">
              Welcome! Showcase your farm products here today and watch customers buy them in no time! <br /> Meet great
              investors willing to invest in your food production.
            </p>
            <MDBBtn href="#" gradient="peach" rounded>
              GET STARTED
            </MDBBtn>
          </MDBContainer>
        </MDBJumbotron>
        <MDBContainer>
          <MDBRow className="mt-5">
            <MDBCol md="6">
              <p className="font-weight-bold aboutp">About FarmSpired</p>
              <h2 className="font-weight-bold">
                Eliminating Hunger; Building Stronger Communities and Creating Quality Lifestyle for Everyone.
              </h2>
            </MDBCol>
            <MDBCol className="text-justify" md="6">
              <p className="mb-1 para">
                FarmSpired is increasing agricultural participation by allowing you easily fund a farm with a promise to
                deliver profitable returns to you while empowering farmers at the same time.
              </p>
              <br />
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <h1 className="font-weight-bold aboutp">What we Do?</h1>
          <MDBRow>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeIn">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage
                    src={require('../assets/FarmCardImages/joyfulFarm.jpg')}
                    cascade
                    className="img-fluid"
                  />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <strong>OUR PASSION</strong>
                    </MDBCardTitle>
                    <MDBCardText className="text-justify">
                      We believe that passion towards Food production plays an important role towards the elimination of
                      hunger from our community and the world at large.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage src={require('../assets/FarmCardImages/chickens.jpg')} cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <strong>LIVESTOCKS</strong>
                    </MDBCardTitle>
                    <MDBCardText className="text-justify">
                      Commercial livestock farming is a very lucrative business and we cannot overlook the potential of
                      earning huge profits from any aspect of livestock production.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInDown">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage
                    cascade
                    className="img-fluid"
                    src={require('../assets/FarmCardImages/machinery2.jpg')}
                  />
                  <MDBCardBody cascade className="">
                    <MDBCardTitle>
                      <strong>ADVANCED MACHINERY</strong>
                    </MDBCardTitle>
                    <MDBCardText className="text-justify">
                      Utilization of advanced technologies along with communication technologies, provides the potential
                      for fast agricultural growth in our communities and globally.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInDown">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage
                    cascade
                    className="img-fluid"
                    src={require('../assets/FarmCardImages/womenInFarm.jpg')}
                  />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <strong>OUR COMMUNITY</strong>
                    </MDBCardTitle>
                    <MDBCardText className="text-justify">
                      Dedicated and Enthusiastic farmers are working to unleash maximum food production
                      <br />
                      Join our community today...
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft"></MDBAnimation>
              <MDBCard cascade className="my-3 grey lighten-4">
                <MDBCardImage src={require('../assets/FarmCardImages/seeds.jpg')} cascad className="img-fluid" />
                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle>
                    <strong>QUALITY SEEDS</strong>
                  </MDBCardTitle>
                  <MDBCardText className="text-justify">
                    Farmers who plants their fields with quality seeds improve their yields, this will provide more food
                    for their communities.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInUp">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage src={require('../assets/FarmCardImages/wheat.jpg')} cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="arrows-alt" className="blue-text pr-2" />
                      <strong>HEALTHY FOOD</strong>
                    </MDBCardTitle>
                    <MDBCardText className="text-justify">
                      We provide Healthy, Quality, and Affordable food supply to everyone, that is what we do at
                      FarmSpired!.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default HomePage;
