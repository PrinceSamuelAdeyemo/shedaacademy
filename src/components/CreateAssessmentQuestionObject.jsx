import React, {useState, useRef} from 'react'

const CreateAssessmentQuestionObject = ({index, questionsArray, setQuestionsArray}) => {
    const [inputData, setInputData] = useState({
        'id': 0,
        'question': '',
        'answer': ''
    })
    const questionInputRef = useRef(null)
    const answerInputRef = useRef(null)

    const updateCurrentDetails = (input_type) => {
        let id = index
        if(input_type == "question"){
            let question = questionInputRef.current.value
            setInputData((prevData) => ({
                ...prevData, 'id': id, 'question': question
            }))
        }
        else if (input_type == "answer"){
            let answer = answerInputRef.current.value
            setInputData((prevData) => ({
                ...prevData, 'id': id, 'answer': answer
            }))
        }
    }

    const updateDetails = () => {
        
        let id = index;
        let question = questionInputRef.current.value
        let answer = answerInputRef.current.value
        setQuestionsArray((prevData) => ({
            ...prevData, inputData
        }))
        console.log(inputData)
        console.log(questionsArray)
    }
    
  return (
    <div onBlur={updateDetails} className='flex flex-col gap-4 rounded-lg border-solid border-gray-300 border-[1px] bg-shedapagebg px-6 py-4'>
        <input type="text" ref={questionInputRef} onChange={() => updateCurrentDetails('question')} placeholder='Untitled Question' className='text-black font-medium blackcolor h-10 w-full border-solid bg-shedapagebg border-b-gray-300 border-b-[1px] focus:outline-none' />
        <input type="text" ref={answerInputRef} onChange={() => updateCurrentDetails('answer')} placeholder='Answer' className='text-black font-medium h-10 w-[75%] border-solid bg-shedapagebg border-b-gray-300 border-b-[1px] focus:outline-none' />
    </div>
  )
}

export default CreateAssessmentQuestionObject