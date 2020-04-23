import React from "react";
import "../Style/Navbar.css";
import "../Style/card.css";
import TrinityResized from "../Assets/TrinityResized.jpg";
import Clongowes from "../Assets/Clongowes.jpg";
import { MobileView } from "react-device-detect";
import {
    MDBJumbotron,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText,
} from "mdbreact";

export default class Education extends React.Component {
    render() {
        return (
            <div id="EducationSection">
                <MDBContainer className="mt-5 text-center" fluid>
                    <p className="biggerItalics">Education</p>
                    <MDBRow className="equalJumbos">
                        <MDBCol md="6">
                            <MDBJumbotron className="makeJumbotronEqual">
                                <MDBCardTitle className="card-title h4 pb-2">
                                    <p className="bigBlackItalics">
                                        Clongowes Woods College
                                    </p>
                                </MDBCardTitle>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBCardImage
                                            src={Clongowes}
                                            className="roundImageShadow"
                                        />
                                    </MDBCol>
                                    <MobileView>
                                        <div className="tinyPageDivide" />
                                    </MobileView>
                                    <MDBCol md="6">
                                        <MDBCardText>
                                            <div className="indentedBox">
                                                <ul>
                                                    <li>
                                                        I attended Clongowes
                                                        Wood College, a
                                                        prestigious, private
                                                        boarding school in
                                                        Clane, Co.Kildare
                                                    </li>
                                                    <br />
                                                    <li>
                                                        I was a recipient of the
                                                        Alberto Hurtado Bursary
                                                        Programme, a scholarship
                                                        for ambitious and
                                                        talented individuals.
                                                    </li>
                                                    <br />
                                                    <li>
                                                        The Leaving Certificate
                                                        subjects I studied were:
                                                        <br />
                                                        Maths, English, Latin,
                                                        Geography, Physics,
                                                        Polish and Business.
                                                    </li>
                                                    <br />
                                                    <li>
                                                        I placed within the top
                                                        5% of all Leaving
                                                        Certificate results in
                                                        Ireland.
                                                    </li>
                                                </ul>
                                            </div>
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBJumbotron>
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBJumbotron className="makeJumbotronEqual">
                                <MDBCardTitle className="card-title h4 pb-2">
                                    <p className="bigBlackItalics">
                                        Trinity College Dublin
                                    </p>
                                </MDBCardTitle>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBCardImage
                                            src={TrinityResized}
                                            className="roundImageShadow"
                                        />
                                    </MDBCol>
                                    <MobileView>
                                        <div className="tinyPageDivide" />
                                    </MobileView>
                                    <MDBCol md="6">
                                        <MDBCardText>
                                            <div className="indentedBox">
                                                <ul>
                                                    <li>
                                                        Trinity College Dublin
                                                        is Ireland's leading
                                                        university. It is also
                                                        ranked amongst the top
                                                        100 universities in
                                                        terms of Computer
                                                        Science and Information
                                                        Systems.
                                                    </li>
                                                    <br />
                                                    <li>
                                                        Trinity ignited my
                                                        interest in coding and
                                                        allowed me to develop a
                                                        broad set of skills,
                                                        which I present in the
                                                        skills section.
                                                    </li>
                                                    <br />
                                                    <li>
                                                        I am extremely proud of
                                                        my dissertation titled:
                                                        <br />
                                                        <i>
                                                            "Diagnosis And
                                                            Mortality Prediction
                                                            By Applying Machine
                                                            Learning On a
                                                            Hepatocellular
                                                            Carcinoma And a
                                                            Liver Disease
                                                            Datasets"
                                                        </i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}
