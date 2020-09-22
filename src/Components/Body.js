import React, { Component } from 'react';
import Home from './Home';
import Sound from './Sound';
import Code from './Code';
import { Container, Row, Col } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

let StyledBody = styled.div`
    height: 100%;
    width: 100%;
    ${/* handle skew here */''}
    .homepage-enter {
        opacity: 0;
        transition: opacity 500ms;
    }
    .homepage-enter-active {
        opacity: 1;
        transition: opacity 500ms;
    }
    .homepage-exit {
        opacity: 1;
        transition: opacity 500ms;
    }
    .homepage-exit-active {
        opacity: 0;
        transition: opacity 500ms;
    }
    .soundpage-enter {
        opacity: 0;
        transition: opacity 500ms;
    }
    .soundpage-enter-active {
        opacity: 1;
        transition: opacity 500ms;
    }
    .soundpage-exit {
        opacity: 1;
        transition: opacity 500ms;
    }
    .soundpage-exit-active {
        opacity: 0;
        transition: opacity 500ms;
    }
    .codepage-enter {
        opacity: 0;
        transition: opacity 500ms;
    }
    .codepage-enter-active {
        opacity: 1;
        transition: opacity 500ms;
    }
    .codepage-exit {
        opacity: 1;
        transition: opacity 500ms;
    }
    .codepage-exit-active {
        opacity: 0;
        transition: opacity 500ms;
    }
`;

class Body extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mouse: {x: 0, y: 0},
            mode: 'home'
        }

        this.mouseCalc = this.mouseCalc.bind(this);
        this.handlePages = this.handlePages.bind(this);
    }

    mouseCalc(e) {
        this.setState({
            mouse: {
                x: (e.clientX / window.innerWidth) * -60 + 30,
                y: (e.clientY / window.innerHeight) * -30 + 15
            }
        });
    }

    handlePages(page) {
        this.setState({mode: page});
    }

    render() {
        return (
            <StyledBody page={this.mode} onMouseMove={ this.mouseCalc }>
              <TransitionGroup style={{ position: 'relative', width: '100%' }} className="testing">
                { this.state.mode === 'home' && (<CSSTransition key="home" timeout={500} classNames="homepage">
                  <Home nudge={this.state.mouse} pages={this.handlePages}/>
                </CSSTransition>
)
                  }
                  { this.state.mode === 'sound' && (<CSSTransition key="sound" timeout={500} classNames="soundpage">
                      <Sound nudge={this.state.mouse} pages={this.handlePages}/>
                    </CSSTransition>)
                  }
                  { this.state.mode === 'code' && (<CSSTransition key="code" timeout={500} classNames="codepage">
                      <Code nudge={this.state.mouse} pages={this.handlePages}/>
                    </CSSTransition>)
                  }
              </TransitionGroup>
            </StyledBody>
        )
    }

}

export default Body;
