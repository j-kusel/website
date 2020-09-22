import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from './Styled/Link';
import styled from 'styled-components';
import { Solo, Chamber, Electronic } from '../content/index';

var ContentCol = styled(Col)`
    text-align: left;
    background-color: rgba(255,186,0,0.1);
    padding: 10px;
    border-left: 1px solid black;
    ${props => props.bottom && 'border-bottom: 1px solid black;'}
`;

var BorderLink = styled(Link)`
    border-top: 1px solid black;
    border-right: 1px solid black;
    &:hover {
        background: linear-gradient(15deg, rgba(255,211,0,0) 60%, rgba(255,186,0,0.6) 100%);
        opacity: 1.0;
    }

`;

var TabCol = (props) => {
    let Tab = styled(Col)`
        background-color: transparent;
        ${!props.active && 'border-bottom: 1px solid black;'}
        border-right: 1px solid black;
        ${props.active && 'background-color: rgba(255,186,0,0.1);'}
        text-align: center;
    `;

    return (
        <Tab xl={4}>
            <Link onClick={props.switchTab}>{props.children}</Link>
        </Tab>
    );
};

var Content = (props) => {
};

class Sound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'solo'
        }

        this.switchTab = this.switchTab.bind(this);
    }

    switchTab(tab) {
        this.setState({ mode: tab });
    }

    render() {
        let paddingTop = (window.innerHeight / 5 + this.props.nudge.y) + 'px';
        let marginLeft = this.props.nudge.x + 'px';

        let tabs = ['solo', 'chamber', 'electronic'].map(tab => (
            <TabCol active={this.state.mode === tab} switchTab={() => this.switchTab(tab)}>{tab}</TabCol>
        ));

        return (
            <div style={{ paddingTop, marginLeft, position: 'absolute', width: '100%' }} id="sound">
                <Container>
                    <Row>
                        <Col xl={3}></Col>
                        <Col xl={6}>
                            <Container>
                                {/* HEADER ROW */}
                                <Row style={{ height: '50px' }}>
                                    <Col xl={2} style={{ padding: '0px' }}/>
                                    <Col xl={10} style={{ padding: '0px', borderLeft: '1px solid black' }}>
                                        <Container>
                                            <Row>
                                                {tabs}
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                                <Row style={{ height: '300px', overflowY: 'scroll' }}>
                                    <Col xl={2} style={{ padding: '0px' }}></Col>
                                    <ContentCol bottom={true} xl={10}>
                                        {this.state.mode === 'solo' && (<Solo><p>hello</p></Solo>)}
                                        {this.state.mode === 'chamber' && (<Chamber/>)}
                                        {this.state.mode === 'electronic' && (<Electronic/>)}
                                    </ContentCol>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'right', padding: '0px' }} xl={2}><BorderLink onClick={() => this.props.pages('home')}>home</BorderLink></Col>
                                    <Col xl={10}></Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xl={3}></Col>
                    </Row>
                </Container>
                <p>hello</p>
            </div>
        )
    }

}

export default Sound;
