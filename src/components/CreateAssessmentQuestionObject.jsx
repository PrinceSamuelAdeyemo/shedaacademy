import React, {useState, useRef} from 'react'

const CreateAssessmentQuestionObject = ({index, questionsObjects, setQuestionsObjects}) => {
    const [inputData, setInputData] = useState({
        [index]:
            {'id': 0,
            'question': '',
            'answer': ''}
    })
    const questionInputRef = useRef(null)
    const answerInputRef = useRef(null)

    const updateCurrentDetails = () => {
        let id  = index
        let question = questionInputRef.current.value
        let answer = answerInputRef.current.value
        
        setInputData((prevData) => ({
            ...prevData, [index]: {'id': id, 'question': question, 'answer': answer}
        })) 
    }

    
  return (
    <div onBlur={() => setQuestionsObjects((prevData) => ({...prevData, ...inputData}))} className='flex flex-col gap-4 rounded-lg border-solid border-gray-300 border-[1px] bg-shedapagebg px-6 py-4'>
        <input type="text" ref={questionInputRef} onChange={updateCurrentDetails} placeholder='Untitled Question' className='text-black font-medium blackcolor h-10 w-full border-solid bg-shedapagebg border-b-gray-300 border-b-[1px] focus:outline-none' />
        <input type="text" ref={answerInputRef} onChange={updateCurrentDetails} placeholder='Answer' className='text-black font-medium h-10 w-[75%] border-solid bg-shedapagebg border-b-gray-300 border-b-[1px] focus:outline-none' />
    </div>
  )
}

export default CreateAssessmentQuestionObject