import React, { useEffect, useRef } from 'react'


const Assessments = ({ key, assessments, setAssessments, question, setErrorMessage }) => {
    const assessmentAnswerRef = useRef(null)
    console.log(assessments)

    const validateInput = () => {
        console.log(assessmentAnswerRef.current.value.trim().length)
        assessmentAnswerRef.current.value.trim().length > 0  ? setErrorMessage('') : setErrorMessage('Question cannot be left empty')
        
    }

    const saveAssessmentAnswer = () => {
        validateInput()
        setAssessments((prevValues) => ({
            ...prevValues, [question]: assessmentAnswerRef.current.value
        }))
    }

    useEffect(() => {

    }, [assessmentAnswerRef.current])

  return (
    <div>
        <p>{question}</p>
        <input onChange={saveAssessmentAnswer} ref={assessmentAnswerRef} className='w-full shadow text-2xl bg-gray-100' type="text" required />
    </div>
  )
}

export default Assessments