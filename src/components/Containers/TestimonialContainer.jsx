import {useState} from 'react';
import TestimonialCard from '../Cards/TestimonialCard';

const TestimonialContainer = ({ data = [] }) => {


    const [dot1, setDot1] = useState(true);
    const [dot2, setDot2] = useState(false);
    const [dot3, setDot3] = useState(false);
    const [dot4, setDot4] = useState(false);

    return (
        <div className="w-[70%]">
            {
                dot1 ? (
                    <div className='grid grid-cols-2 flex justify-between'>
                        {
                            data.map((review, idx) => {
                                return (idx < 4) ? <TestimonialCard img ={review.img} name={review.name} content={review.comment} /> : null
                            })
                        }
                    </div>
                ) : (
                    dot2 ? (
                        <div className='grid grid-cols-2 flex justify-between'>
                        {
                            data.map((review, idx) => {
                                return (idx >= 4 && idx < 8) ? <TestimonialCard img ={review.img} name={review.name} content={review.comment} /> : null
                            })
                        }
                        </div>
                    ) : (
                        <div className='grid grid-cols-2 flex justify-between'>
                        {
                            data.map((review, idx) => {
                                return (idx >= 8 && idx < 12) ? <TestimonialCard img ={review.img} name={review.name} content={review.comment} /> : null
                            })
                        }
                        </div>
                    )
                )
            }

                <div className='flex space-x-2 justify-center mt-[20px]'>
                    {dot1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(true)
                        setDot2(false)
                        setDot3(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(true)
                        setDot3(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(false)
                        setDot3(true);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot4 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(false)
                        setDot3(true);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>

        </div>
    );
}

export default TestimonialContainer;


