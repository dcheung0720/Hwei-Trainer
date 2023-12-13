import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import "./Trainer.css";

const Trainer = ({time}) =>{
    const prompts = {
        "Karma Q": ["Q", "Q"],
        "Velkoz E": ["Q", "E"],
        "Xerath W" : ["Q", "W"],
        "Wave Clear": ["Q", "E"],
        "Run Fast": ["W", "Q"],
        "Group Shield": ["W", "W"],
        "Nami Enhance": ["W", "E"],
        "One Enemy Chasing you": ["E", "Q"],
        "Slow root": ["E", "W"],
        "Group CC": ["E", "E"],
    }
 
    // current question
    const [curr_q, setCurr_q] = useState(null);

    // answer to the current question
    const [curr_ans, setCurr_ans] = useState(null);

    //user input array
    const [userInputs, setUserInputs] = useState(["__", "__"])

    //index for comparison
    const [cursor, setCursor] = useState(0);

    //score for current game
    const [score, setScore] = useState(0);

    // correct feeback
    const [feedBackVis, setFeedBackVis] = useState(null);

    // error for shake animations
    const [error, setError] = useState(false);

    const randomizeIndex = () =>{
        const all_prompts = Object.keys(prompts);
        return Math.floor(Math.random() * all_prompts.length);
    }

    useEffect(()=>{
        const all_prompts = Object.keys(prompts);
        const index = randomizeIndex();
        
        // set prompt and answer key
        const prompt = all_prompts[index]
        setCurr_q(prompt)
        setCurr_ans(prompts[prompt]) 

    }, [])

    useEffect(()=>{
        //add event listeners to keydowns
        const handleKeyDown = (e) =>{
            console.log("Keypressed is ", e.key)

            // increment cursor if correct key
            if(curr_ans[cursor].toLowerCase() === e.key.toLowerCase()){
                // change input appearence for feedback
                setUserInputs((prevUserInputs) => {
                    const newArray = [...prevUserInputs];
                    newArray[cursor] = e.key.toUpperCase();
                    return newArray;
                });

                //correct answer increment point
                if(cursor == 1){
                    setScore(prev => prev + 1)

                    // show feedback
                    setFeedBackVis(true);
                    setTimeout(() =>{
                        //reset inputs and feedback
                        setUserInputs(["__", "__"])
                        setFeedBackVis(null);

                        // set new question and ans
                        const all_prompts = Object.keys(prompts);
                        const index = randomizeIndex();
                        const prompt = all_prompts[index];
                        setCurr_q(prompt);
                        setCurr_ans(prompts[prompt]);
                    }, 500)
                }
                setCursor((cursor + 1)%2)
            }
            // incorrect
            else{
                setCursor(0);
                setUserInputs(["__", "__"]);

                setFeedBackVis(false);

                //set error for shake animations
                setError(true);
                setTimeout(()=>{
                    setError(false);
                }, 500)
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () =>{
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [curr_q, cursor])

    return(    
        <Container>
            <Row>
                Timer: {time.toFixed(2)}
            </Row>
            <Row>
                Score: {score}
            </Row>
            <Row>
                {curr_q}
            </Row>
            <Row>
                <Col>
                    {userInputs[0]}
                </Col>
                <Col>
                    {userInputs[1]}
                </Col>
            </Row>
            {feedBackVis !== null? feedBackVis? <Row style = {{color: "green"}}> That's Correct!</Row> : <Row className = {error? "error" : ""} style = {{color: "red"}}> That's Incorrect... Try Again</Row>: <></>}
        </Container>
      )
    
};

export default Trainer;