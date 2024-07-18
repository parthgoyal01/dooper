// import React from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';

// const SemiDonutGraph = ({ percentage, color, text, direction}) => {
//   const data = [
//     { name: 'Filled', value: percentage },
//     { name: 'Empty', value: 100 - percentage },
//   ];

//   return (
//     <div className='relative flex flex-col items-center'>
//       <ResponsiveContainer width="100%" height={200} className="">
//           <PieChart>
//             <Pie
//               dataKey="value"
//               data={data}
//               startAngle={180}
//               endAngle={0}
//               innerRadius="70%"
//               outerRadius="80%"
//               fill="#DBDADE"
//             >
//               <Cell fill={color} />
//             </Pie>
//           </PieChart>
//       </ResponsiveContainer>
//         <div className='flex justify-center space-x-1 absolute bottom-[100px] w-full items-center'>
//           <p className=' text-[#4B465C] font-medium text-[14px] lg:text-[20px] text-center'>{percentage}%</p>
//           {
//             direction === "up" ? <img src="/Assets/UpwardArrow.png" alt="arrow" className='w-[16px] lg:w-[20px]' /> : <img src="/Assets/DownwardArrow.png" alt="arrow" className='w-[15px]' />
//           }
//         </div>
//         <p className='absolute bottom-[60px] mt-[2px] lg:bottom-[45px] text-[10px] lg:text-[16px] text-[#4B465C90] text-center w-[85%] lg:w-[80%] mt-[20px] '>{text}</p>
//     </div>
//   );
// };

// export default SemiDonutGraph;


//good code

//practice
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';

const SemiDonutGraph = ({ percentage, color, text, direction }) => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
    onChange: (inView) => {
      if (inView) {
        setAnimationTriggered(false);
      }
    }
  });

  const data = [
    { name: 'Filled', value: percentage },
    { name: 'Empty', value: 100 - percentage },
  ];

  return (
    <div ref={ref} className='relative flex flex-col items-center'>
      <ResponsiveContainer width="100%" height={200} className="">
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius="70%"
            outerRadius="80%"
            fill="#DBDADE"
            isAnimationActive={!animationTriggered && inView}
            onAnimationEnd={() => setAnimationTriggered(true)}
            animationDuration={1500}
          >
            <Cell fill={color} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='flex justify-center space-x-1 absolute bottom-[100px] w-full items-center'>
        {/* <p className=' text-[#4B465C] font-medium sm:text-[5px] md:text-[10px] lg:text-[20px] text-center'>{percentage}%</p> */}
        <p className="text-[#4B465C] font-medium text-[8px] sm:text-[20px] md:text-[20px] lg:text-[30px] text-center">{percentage}%</p>

        {direction === "up" ? (
          <img src="/Assets/UpwardArrow.png" alt="arrow" className='w-[16px] lg:w-[20px]' />
        ) : (
          <img src="/Assets/DownwardArrow.png" alt="arrow" className='w-[10px]' />
        )}
      </div>
      {/* <p className='absolute bottom-[60px] mt-[4px] lg:bottom-[45px] text-[10px] lg:text-[16px] text-[#4B465C90] text-center w-[85%] lg:w-[80%] mt-[20px]'>{text}</p> */}
      <p className='absolute bottom-[60px] top-[90px] lg:bottom-[45px] text-[10px]  lg:text-[16px] text-[#4B465C90] text-center w-[85%] lg:w-[80%] mt-[20px]'>{text}</p>
    </div>
  );
};

export default SemiDonutGraph;
