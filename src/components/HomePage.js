import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Trainer from './Trainer';
import { useEffect, useState } from 'react';
import './HomePage.css'

const HomePage = () =>{
    const [HomePageVis, setHomePageVis] = useState(true);
    const [time, setTime] = useState(10);
    const [intervalID, setIntervalID] = useState(null);

    //score for current game
    const [score, setScore] = useState(0);

    const handleHomePageVis = () =>{
        setHomePageVis((prev) => !prev);

        const id = setInterval(()=>{
            setTime(prev => Math.max(prev -=.05, 0));
        }, 50)
        
        setIntervalID(id);

    }

    useEffect(()=>{
        if(time <= 0){
            clearInterval(intervalID);
        }
    }, [time, intervalID])

    return (<div>
            <Container style = {{opacity: HomePageVis? 1 : 0}}>
                <Row>
                    <Container>
                        <Row>
                            <Col style = {{textAlign: "left"}}>
                                <p> <b>Welcome to Hwei Trainer! </b> A Journey for Hwei Learners.</p>
                                <p> <b>How to play: </b> Cast your ability based on the scenario.</p>
                                <p> Example: "Fear one enemy away" - You would Press E, Q</p>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Col>
                        {HomePageVis &&<Button variant="primary" onClick={handleHomePageVis}>Start</Button>} 
                    </Col>
                </Row>
            </Container>
            <div className = "trainer" style = {{opacity: HomePageVis? 0 : 1}}>
                <Trainer time = {time} setTime = {setTime} score = {score} setScore = {setScore} setIntervalID = {setIntervalID}/>
            </div>
        </div>
    )
};

export default HomePage;


