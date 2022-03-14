import { useState } from "react";

import InTheNews from './InTheNews'
import Press from './Press';

const Main = () => {
    const [step, setStep] = useState(1);
    return(
        <div className="bg-main object-cover bg-no-repeat bg-opacity-60 pb-20">
            <div className=" h-[15rem]  w-full">
                {
                    step === 1 ?
                    <h1 className="text-4xl font-bold text-primary text-center pt-12 px-2">Enterprise League <span className="text-accent">In the News</span></h1>
                    :
                    <h1 className="text-4xl font-bold text-primary text-center pt-12 px-2">Enterprise League <span className="text-accent">Press</span></h1>
                }
                {
                    <ul className="text-2xl font-semibold text-primary w-full flex gap-8 justify-center pt-8">
                        <li className={`${step === 1 && 'underline decoration-accent underline-offset-2 text-gray-600'} cursor-pointer`} onClick={() => setStep(1)}>In the News</li>
                        <li className={`${step === 2 && 'underline decoration-accent underline-offset-2 text-gray-600 '} cursor-pointer`} onClick={() => setStep(2)}>Press</li>
                    </ul>
                }
                
            </div>
            {
                step === 1 ? <InTheNews/> : <Press/>
            }
        </div>
    )
}
export default Main;