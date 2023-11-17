import { useForm } from 'react-hook-form';
import GoogleIcon from '../../assets/auth/GoogleIcon.svg';
import AppleIcon from '../../assets/auth/appleIcon.svg';
import '../../styles/signUp.css';

export function AccountDetails() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitDetails = (data: any) => console.log(data);

  return (
    <div className='flex flex-col items-center gap-9'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[color:var(--gray-gray-900,#181C32)] text-2xl font-semibold leading-6 text-center tracking-[-0.24px]'>
          Account Details
        </h1>
        <p className='text-[color:var(--gray-gray-500,#A1A5B7)] text-center text-sm font-medium leading-[14px]'>
          Add your personal info
        </p>
      </div>
      <div className='flex gap-3'>
        <button className='py-3 px-5 border rounded-md flex items-center gap-3'>
          <img src={GoogleIcon} />
          <p className='text-xs font-semibold leading-3 text-[color:var(--gray-gray-600,#7E8299)]'>
            Sign in with Google
          </p>
        </button>
        <button className='py-3 px-5 border rounded-md flex items-center gap-3'>
          <img src={AppleIcon} />
          <p className='text-xs font-semibold leading-3 text-[color:var(--gray-gray-600,#7E8299)]'>
            Sign in with Apple
          </p>
        </button>
      </div>
      <div>
        <p className=' text-xs font-medium leading-3 text-[color:var(--gray-gray-500,#A1A5B7)] text-center'>
          or with email
        </p>
      </div>
      <div>
        <form
          className='flex flex-col gap-5'
          onSubmit={handleSubmit(submitDetails)}
        >
          <div className='flex gap-5'>
            <input
              {...register('firstName')}
              type='text'
              placeholder='First Name'
              name='firstName'
              className='form-input'
            />
            <input
              {...register('lastName')}
              type='text'
              placeholder='Last Name'
              name='lastName'
              className='form-input'
            />
          </div>
          <input
            {...register('creatorName')}
            type='text'
            placeholder='Creator Name'
            name='creatorName'
            className='form-input'
          />
          <input
            {...register('email')}
            type='email'
            placeholder='Email'
            name='email'
            className='form-input'
          />
          <input
            {...register('phoneNumber')}
            type='number'
            placeholder='Phone Number'
            name='phoneNumber'
            className='form-input'
          />
          <input
            {...register('password')}
            type='password'
            placeholder='Password'
            name='password'
            className='form-input'
          />
          <input
            {...register('confirmPassword')}
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            className='form-input'
          />

          <label htmlFor='acceptTerms' className='flex gap-2'>
            {' '}
            <input type='checkbox' name='acceptTerms' />
            <span className=' text-xs font-semibold leading-3 text-[color:var(--gray-gray-700,#5E6278)]'>
              I Accept the Terms
            </span>
          </label>
          <button className='w-full py-3 rounded-md bg-[#006CEA] flex justify-center gap-1 text-base font-semibold leading-4 text-white'>
            Continue
          </button>
          <div className=' text-center text-sm not-italic font-medium leading-4 text-[color:var(--gray-gray-500,#A1A5B7)]'>
            Already have an Account? Sign in
          </div>
        </form>
      </div>
    </div>
  );
}
