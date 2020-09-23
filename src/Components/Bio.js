import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from './Styled/Link';
import styled from 'styled-components';

var ContentCol = styled(Col)`
    text-align: left;
    a {
        text-decoration: none;
        color: inherit;
        opacity: 0.6;
        transition: opacity 300ms;
        &:hover {
            opacity: 1.0;
        }
    }
    background-color: rgba(255,186,0,0.1);
    padding: 10px;
    ${props => props.bottom && 'border-bottom: 1px solid black;'}
`;

var BorderLink = styled(Link)`
    text-align: right;
    &:hover {
        background: linear-gradient(15deg, rgba(255,211,0,0) 60%, rgba(255,186,0,0.6) 100%);
        opacity: 1.0;
    }
`;

class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'code'
        }

        this.switchTab = this.switchTab.bind(this);
    }

    switchTab(tab) {
        this.setState({ mode: tab });
    }

    render() {
        let paddingTop = (window.innerHeight / 6 + this.props.nudge.y) + 'px';
        let marginLeft = this.props.nudge.x + 'px';

        return (
            <div style={{ paddingTop, marginLeft, position: 'absolute', width: '100%' }} id="sound">
                <Container>
                    <Row>
                        <Col xl={3}></Col>
                        <Col xl={2} style={{ borderRight: '1px solid black', padding: '0px' }}>
                            <Container>
                                <Row style={{ height: '350px', borderBottom: '1px solid black' }}>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'right', padding: '0px' }}><BorderLink onClick={() => this.props.pages('home')}>home</BorderLink></Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xl={4} style={{ padding: '0px' }}>
                            <Container>
                                <Row style={{ height: '350px', borderBottom: '1px solid black' }}>
                                    <ContentCol>
                                        <p>Jordan Kusel is an experimental composer, full-stack software engineer, and musician currently living in Los Angeles, CA. His interests include bricolage, cybernetics, open-source soft/hardware, DIY/amateurism, and skateboarding. His current project is <a href="https://github.com/ultraturtle0/timebandit">Bandit</a>, a web application and composition/performance ecosystem for solving the problem of polytemporality in music. For commissions, employment inquiries, or congenial banter please email <a href="mailto:jordankusel@protonmail.com">jordankusel@protonmail.com</a>.</p>
                                    </ContentCol>
                                </Row>
                            </Container>
                        </Col>
                        <Col xl={3}></Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Bio;
