import React, { useEffect, useState } from 'react'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import CreateAssessmentQuestionObject from '../components/CreateAssessmentQuestionObject'

const CreateAssessmentQuestion = () => {
    const [numberOfQuestions, setNumberOfQuestions] = useState(3)
    const [questionsArray, setQuestionsArray] = useState([
        {'id': 1, 'question': '', 'answer': ''},
        {'id': 2, 'question': '', 'answer': ''},
        {'id': 3, 'question': '', 'answer': ''},
    ])

    const questions_array = []

    for (let i=0; i < numberOfQuestions; i++){
        questions_array.push("a")
    }

    const assessmentScroll = (event) => {
        event.stopPropagation()
    }

    useEffect(() => {
    })

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col gap-1 w-[97%]'>

        <div className='flex items-center justify-between h-[5rem] shadow-black w-full'>
          <div className='flex gap-4'>
            <FaAngleLeft />
            <FaAngleRight />
          </div>
          <div className='w-[15%]'>
            <img src="" alt="" />
            <div>
              <p className='font-semibold text-lg'>Mr Tim</p>
              <p className='text-sm'>mrtim@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='w-full bg-gray-100 h-[1px]'></div>

        <div className='flex lg:gap-8 xl:gap-10 w-fullrelative'>
            <div className='flex flex-col gap-4 xl:gap-6 lg:w-[70%]'>
                {questions_array?.map((question_object, index) => (
                <CreateAssessmentQuestionObject index={index+1} questionsArray={questionsArray} setQuestionsArray={setQuestionsArray} />
                ))}
            </div>
            <div className='flex flex-col justify-between fixed right-7 lg:w-[23%] h-[85vh] pt-4'>
                <div className='h-[85%]'>
                    <button onClick={() => {setNumberOfQuestions(numberOfQuestions+1)}} className='text-shedared font-semibold bg-white w-full border-solid border-[2px] border-shedared rounded-lg mb-4 py-2'><span className=''>+</span> Add new question</button>
                    <div className='flex flex-col gap-4 h-full px-4 overflow-hidden hover:overflow-y-auto' onMouseEnter={assessmentScroll}>
                        {questions_array?.map((question_object, index) => (
                            <div key={index+1} className='flex gap-4 text-shedagray hover:bg-shedapagebg'>
                                <span className='flex justify-center text-[80%] h-6 w-6 rounded-full border-solid border-shedared border-[1px]'>{index < 9? `0${index+1}`: `${index+1}`}</span>
                                <p>Untitled question</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex gap-2 xl:gap-4 w-full'>
                    <button className='bg-white text-shedared font-semibold border-solid border-shedared border-[1px] xl:px-10 xl:py-2 rounded flex-grow'>Preview</button>
                    <button className='bg-shedared text-white font-semibold xl:px-10 xl:py-2 rounded flex-grow'>Publish</button>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default CreateAssessmentQuestion