import { useState } from 'react';
import { AccountType } from '../../components/Authentication/accountType';
import { AccountDetails } from '../../components/Authentication/accountDetails';
import '../../styles/signUp.css';
import AuthLogo from '../../assets/auth/AuthLogo.svg';

const steps = [
  { label: 'Account Type', caption: 'Select your account type' },
  { label: 'Personal Info ', caption: 'Add your personal info' },
  { label: 'Verification ', caption: 'Verify your account' },
  { label: 'Creator Info ', caption: 'Setup Creator Details' },
  { label: 'Completed ', caption: 'Your account is created' },
];

export default function SignUp() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className='w-full h-screen flex overflow-y-hidden'>
      <section className='signUp-stepper bg-[url("./assets/auth/signUpbackground.svg")]'>
        <img src={AuthLogo} />
        <div className='flex flex-col gap-1.5'>
          {steps.map((step, index) => (
            <div key={index}>
              <div className='flex items-center gap-5'>
                <div
                  className={`h-fit w-fit py-3 px-4 border rounded-lg border-dashed border-white border-opacity-30 ${
                    activeStep === index + 1
                      ? 'bg-green-300'
                      : 'bg-white bg-opacity-10'
                  }`}
                >
                  <p className='text-lg font-semibold text-white leading-[18px] tracking-[-0.18px]'>
                    {index + 1}
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='step-label'>{step.label}</div>
                  <div className='step-caption'>{step.caption}</div>
                </div>
              </div>
              {index !== steps.length - 1 && (
                <div className='h-10 ml-5 border-l border-dashed border-white border-opacity-30'></div>
              )}
            </div>
          ))}
        </div>
        <div className='flex gap-10 text-[color:var(--success-success,#50CD89)] text-[13px] font-medium leading-[14px]'>
          <p>Terms</p>
          <p>Plans</p>
          <p>Contact Us</p>
        </div>
      </section>
      <section className='h-full flex justify-center items-center grow overflow-y-hidden'>
        {activeStep === 1 ? (
          <AccountType activeStep={activeStep} setActiveStep={setActiveStep} />
        ) : (
          <AccountDetails />
        )}
      </section>
    </div>
  );
}
