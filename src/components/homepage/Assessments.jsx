import React, { useRef } from 'react'


const Assessments = ({ saveAssessmentAnswer, question }) => {
    const assessmentAnswerRef = useRef(null)

  return (
    <div>
        <p>{question}</p>
        <input onChange={saveAssessmentAnswer} ref={assessmentAnswerRef} className='w-full shadow text-4xl bg-gray-100' type="text" />
    </div>
  )
}

export default Assessments