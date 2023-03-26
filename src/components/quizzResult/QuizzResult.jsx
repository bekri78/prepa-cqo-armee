import React,{useEffect, useRef} from 'react'
import questions from "../../data";
import lottie from 'lottie-web';

export default function QuizzResult(props) {

  const container = useRef(null)

  useEffect(()=>{

    lottie.loadAnimation({
      container:container.current,
      render:'svg',
      loop:true,
      autoplay:true,
      animationData:require('../../utils/lotties/celebrate.json')
    })
  },[])
  return (
    <>
    <div className='score-section'>
        <div className='container' ref={container}/>
        <h2> Completed !</h2>
        <h4> Total Score  {props.score}/38</h4>
        <h4> Your Correct Question {props.correctAnswer} out of {questions.length}</h4>
        <button className="buttons" onClick = {props.handlePlayAgain}>Recommencer</button>
        
        </div>

      
    </>
  )
}
