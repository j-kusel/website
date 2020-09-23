import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from './Styled/Link';
import styled from 'styled-components';
import { Code } from '../content/index';

var ContentCol = styled(Col)`
    text-align: left;
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

class CodeComp extends Component {
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
                        <Col xl={1} style={{ paddingRight: '0px' }}>
                            <Container>
                                <Row style={{ height: '350px', borderBottom: '1px solid black' }}/>
                                <Row>
                                    <Col style={{ textAlign: 'right', padding: '0px' }}><BorderLink onClick={() => this.props.pages('home')}>home</BorderLink></Col>
                                </Row>
                            </Container>
                        </Col>
                                       
                        <Col xl={5} style={{ padding: '0px', borderLeft: '1px solid black' }}>
                            <Container>
                                <Row style={{ height: '350px', overflowY: 'scroll', borderBottom: '1px solid black' }}>
                                    <ContentCol>
                                        <Code/>
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

export default CodeComp;
