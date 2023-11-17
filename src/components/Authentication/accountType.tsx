import '../../styles/signUp.css';
import CreatorAccountIcon from '../../assets/auth/creatorAccountIcon.svg';
import AgencyAccountIcon from '../../assets/auth/agencyAccountIcon.svg';
import RightArrow from '../../assets/arrow-right.svg';

export function AccountType(props: any) {
  return (
    <div className='flex flex-col gap-8 '>
      <div className='flex flex-col gap-4'>
        <div className='text-[color:var(--gray-gray-900,#181C32)] text-2xl font-semibold leading-6 tracking-[-0.24px];'>
          Choose an account type
        </div>
        <div className='text-[color:var(--gray-gray-500,#A1A5B7)] text-sm font-medium leading-[14px]'>
          If you need more info, please visit our{' '}
          <span className='text-[color:var(--primary-primary-active,#2884EF)] text-sm font-medium leading-[14px]'>
            help page
          </span>
          .
        </div>
      </div>
      <div className='flex gap-5'>
        <div className='p-6 border rounded-lg border-dashed flex items-center gap-4'>
          <div>
            <img src={CreatorAccountIcon} />
          </div>
          <div>
            <p className='text-[color:var(--white-dark-dark,#181C32)] text-[15px] font-semibold leading-4'>
              Creator
            </p>
            <p className='text-[13px] font-medium leading-[21px] text-[#A1A5B7]'>
              Sign-up as a creator
            </p>
          </div>
        </div>
        <div className='p-6 border rounded-lg border-dashed flex items-center gap-4'>
          <div>
            <img src={AgencyAccountIcon} />
          </div>
          <div>
            <p className='text-[color:var(--white-dark-dark,#181C32)] text-[15px] font-semibold leading-4'>
              Agengy
            </p>
            <p className='text-[13px] font-medium leading-[21px] text-[#A1A5B7]'>
              Sign-up as a agency
            </p>
          </div>
        </div>
      </div>
      <div className='self-end'>
        <button onClick={() => {props.setActiveStep(2)}} className='py-3 px-4 rounded-md bg-[#006CEA] flex items-center gap-1 text-base font-semibold leading-4 text-white'>
          Continue
          <img src={RightArrow} />
        </button>
      </div>
    </div>
  );
}
