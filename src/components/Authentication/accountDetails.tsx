import { useForm } from 'react-hook-form';
import GoogleIcon from '../../assets/auth/GoogleIcon.svg';
import AppleIcon from '../../assets/auth/appleIcon.svg';
import '../../styles/signUp.css';
import { FormError } from '../common/formError';

export function AccountDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitDetails = (data: any) => console.log(data);

  console.log(errors);

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
            <div>
              <input
                type='text'
                {...register('firstName', {
                  required: 'This field is required',
                })}
                placeholder='First Name'
                className='form-input'
              />
              <FormError error={errors?.firstName?.message} />
            </div>
            <div>
              <input
                type='text'
                {...register('lastName', {
                  required: 'This field is required',
                })}
                placeholder='Last Name'
                className='form-input'
              />
              <FormError error={errors?.lastName?.message} />
            </div>
          </div>
          <div>
            <input
              type='text'
              {...register('creatorName', {
                required: 'This field is required',
              })}
              placeholder='Creator Name'
              className='form-input'
            />
            <FormError error={errors?.creatorName?.message} />
          </div>
          <div>
            <input
              type='email'
              {...register('email', { required: 'This field is required' })}
              placeholder='Email'
              className='form-input'
            />
            <FormError error={errors?.email?.message} />
          </div>
          <div>
            <input
              type='number'
              {...register('phoneNumber', {
                required: 'This field is required',
                minLength: 10,
                maxLength: 10,
              })}
              placeholder='Phone Number'
              className='form-input'
            />
            <FormError error={errors?.phoneNumber?.message} />
          </div>

          <div>
            <input
              type='password'
              {...register('password', { required: 'This field is required' })}
              placeholder='Password'
              className='form-input'
            />
            <FormError error={errors?.password?.message} />
          </div>

          <div>
            <input
              type='password'
              {...register('confirmPassword', {
                required: 'This field is required',
              })}
              placeholder='Confirm Password'
              className='form-input'
            />
            <FormError error={errors?.confirmPassword?.message} />
          </div>

          <div>
            <label htmlFor='acceptTerms' className='flex gap-2'>
              {' '}
              <input
                type='checkbox'
                {...register('acceptTerms', {
                  required: 'This field is required',
                })}
              />
              <span className=' text-xs font-semibold leading-3 text-[color:var(--gray-gray-700,#5E6278)]'>
                I Accept the Terms
              </span>
            </label>
            <FormError error={errors?.acceptTerms?.message} />
          </div>

          <input
            type='submit'
            value='Continue'
            className='account-details-submit'
          />

          <div className=' text-center text-sm not-italic font-medium leading-4 text-[color:var(--gray-gray-500,#A1A5B7)]'>
            Already have an Account? Sign in
          </div>
        </form>
      </div>
    </div>
  );
}
