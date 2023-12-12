import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () =>{
    return (<div>
        <Container>
            <Row>
                <Container>
                    <Row>
                        <Col style = {{textAlign: "left"}}>
                            <p> <b>Welcome to Hwei Trainer! </b> A Journey for Hwei Learners.</p>
                            <p> <b>How to play: </b> Cast your ability based on the scenario.</p>
                            <p> Example: "You are chased by one enemy" - You would Press E, Q</p>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Col>

                </Col>
            </Row>
        </Container>
    </div>)
};

export default HomePage;


