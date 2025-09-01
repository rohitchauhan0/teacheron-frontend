'use client'
import { useStep } from '@/context/step_context';
import React from 'react'
import Step1 from './_components/step1';
import Step2 from './_components/step2';
import Step3 from './_components/step3';
import Step4 from './_components/step4';
import Step5 from './_components/step5';
import Step6 from './_components/step6';
import Step7 from './_components/step7';
import Step8 from './_components/step8';
import Step9 from './_components/step9';
import Step10 from './_components/step10';


const Page = () => {
  const { currentStep } = useStep();
  return (
    <div className=' '>
        {
            currentStep === 1 && <Step2 />
        }
        {
            currentStep === 2 && <Step3/>
        }
        {
            currentStep === 3 && <Step4/>
        }
        {
            currentStep === 4 && <Step5/>
        }
        {
            currentStep === 5 && <Step6/>
        }
        {
            currentStep === 6 && <Step7/>
        }
        {
            currentStep === 7 && <Step8/>
        }
        {
            currentStep === 8 && <Step10/>
        }
        {/* {
            currentStep === 9 && <Step10/>
        } */}
    </div>
  )
}

export default Page