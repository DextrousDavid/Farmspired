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
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <MDBRow className="mt-5">
          <MDBCol className="dash-nav" md="2">
            <div>
              <p className="font-weight-bold">Transactions</p>
              <p className="font-weight-bold">Donations</p>
              <p className="font-weight-bold">Loans</p>
              <p className="font-weight-bold">Rented Equipments</p>
              <p className="font-weight-bold">Hires</p>
            </div>
          </MDBCol>
          <MDBCol className="text-justify" md="10">
            <h3 className="profile-head">Welcome, David </h3>
            <MDBBtn href="#" gradient="peach" rounded>
              Back
            </MDBBtn>
            <MDBRow className="mt-5">
              <MDBCol className="text-justify" md="5">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardBody cascade>
                    <MDBCardTitle>
                      <strong>david@gmail.com</strong>
                    </MDBCardTitle>
                    <MDBCardText className="text-justify">
                      <MDBBtn className="more-btn" href="#">
                        Complete Profile
                      </MDBBtn>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol className="text-justify" md="7">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <strong>DONATIONS</strong>
                    </MDBCardTitle>
                    <MDBCardText className="text-center">
                      <h3 style={{ color: '#93d85a' }}>$0</h3>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default Dashboard;
