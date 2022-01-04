import React, { Component } from 'react'
import '../styles/Home.css';
import { Container } from 'react-bootstrap'
import {HomeSlider} from './HomeSlider'
import {HomeAuction} from './HomeAuction'
export class Home extends Component {
    render() {
        return (
            <Container fluid className="HomeBody">
                <HomeSlider />
                <HomeAuction />
                
            </Container>
        )
    }
}

export default Home
