import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import "./Trainer.css";

const Trainer = () =>{
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
            else{
                setCursor(0);
                setUserInputs(["__", "__"]);

                setFeedBackVis(false);
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
            {feedBackVis !== null? feedBackVis? <Row> That's Correct!</Row> : <Row> That's Incorrect... Try Again</Row>: <></>}
        </Container>
      )
    
};

export default Trainer;