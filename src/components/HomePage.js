import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Trainer from './Trainer';
import { useEffect, useState } from 'react';
import './HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faGamepad, faDumbbell, faPerson } from '@fortawesome/free-solid-svg-icons';




const HomePage = () =>{
    const [HomePageVis, setHomePageVis] = useState(true);
    const [time, setTime] = useState(30);
    const [intervalID, setIntervalID] = useState(null);

    // correct feedback
    const [feedBackVis, setFeedBackVis] = useState(null);

    //score for current game
    const [score, setScore] = useState(0);

    const handleHomePageVis = () =>{
        setHomePageVis((prev) => !prev);

        const id = setInterval(()=>{
            setTime(prev => Math.max(prev -=.05, 0));
        }, 50)
        
        setIntervalID(id);

        // remove user inputs before game starts
        setFeedBackVis(null);
        setScore(0);
    }

    //game over
    useEffect(()=>{
        if(time <= 0){
            clearInterval(intervalID);

            //determine high score
            if(localStorage.getItem("hs") == null){
                localStorage.setItem("hs", score);
            }
            else{
                let maxScore = Math.max(localStorage.getItem("hs"), score);
                localStorage.setItem("hs", maxScore);
            }

        }

    }, [time, intervalID, score])

    return (<div>
            <Container style = {{opacity: HomePageVis? 1 : 0}}>
                <Row>
                    <Container>
                        <Row>
                            <Col style = {{textAlign: "left"}}>
                                <p> <b>Welcome to Hwei Trainer <FontAwesomeIcon icon={faDumbbell} style={{color: "#f4b301",}} />! </b> A Journey for Hwei Learners <FontAwesomeIcon icon={faPerson} style={{color: "#3ca527",}} />.</p>
                                <p> <b>How to play <FontAwesomeIcon icon={faGamepad} style={{color: "#df0c0c",}} />: </b> Cast your ability based on the scenario.</p>
                                <p> Example: "Fear one enemy away" - You would Press E, Q</p>
                                <p> Highscore <FontAwesomeIcon icon={faCrown} style={{color: "#f7ef02",}} />: {localStorage.getItem("hs")}</p>
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
                <Trainer time = {time} setTime = {setTime} score = {score} setScore = {setScore} setIntervalID = {setIntervalID} feedBackVis={feedBackVis} setFeedBackVis={setFeedBackVis}/>
            </div>
        </div>
    )
};

export default HomePage;


