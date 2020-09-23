import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from './Styled/Link';
import styled from 'styled-components';

var DispRow = styled(Row)`
    height: 50px;
`;

var Splash = styled.h1`
    font-family: 'Open Sans Condensed', sans-serif;
    text-align: right;
    line-height: 30px;
    padding-right: 18px;
`;


var RightCol = (props) => {

    let StyledCol = styled(Col)`
        text-align: left;
        padding: 0px;
        border-left: 1px solid black;
        ${props => props.last ? '' : 'border-bottom: 1px solid black;'}
        &:hover {
            .link {
                background: linear-gradient(${props.deg || 90}deg, rgba(255,186,0,0.3) 0%, rgba(255,211,0,0) ${props.deg ? '50%' : '90%'});
                opacity: 1.0;
            }
        }
    `;
    return (
        <StyledCol last={props.last} xl={6}>
            <Link className="link" onClick={props.cb}>
                {props.children}
            </Link>
        </StyledCol>
    )
};

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(props);
        this.handlePage = this.handlePage.bind(this);

        
    }

    handlePage(e, page) {
        e.preventDefault();
        this.props.pages(page);
    }

    render() {
        let paddingTop = (window.innerHeight / 5 + this.props.nudge.y) + 'px';
        let marginLeft = this.props.nudge.x + 'px';
        return (
            <div style={{ paddingTop, marginLeft }}>
                <Container>
                    <Row>
                        <Col xl={4}></Col>
                        <Col xl={2} style={{ paddingRight: '0px' }}><Splash>JORDAN KUSEL</Splash></Col>
                        <Col xl={2} style={{ paddingLeft: '0px' }}>
                            <Container>
                                <DispRow>
                                    <RightCol deg={15} cb={(e) => this.handlePage(e, 'sound')}>sound</RightCol>
                                </DispRow>
                                <DispRow>
                                    <RightCol cb={(e) => this.handlePage(e, 'code')}>code</RightCol>
                                </DispRow>
                                <DispRow last={true}>
                                    <RightCol deg={165} last={true} cb={(e) => this.handlePage(e, 'bio')}>bio</RightCol>
                                </DispRow>
                            </Container>
                        </Col>
                        <Col xl={4}></Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Home;
