import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const ReservationForm = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required('First Name is Required'),
    lastName: yup.string().required('Last Name is Required'),
    email: yup.string().email('Please enter valid email').required('Email is Required'),
    phoneNumber: yup.string().matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits').required('Phone number is required'),
    numberOfGuests: yup.number().positive().integer().min(1).max(12, 'Limit of 12 guests per reservation').required('Number Of guests is required')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='First Name' {...register('firstName')} />
      <p>{errors.firstName?.message as unknown as string}</p>
      <input type='text' placeholder='Last Name' {...register('lastName')} />
      <p>{errors.lastName?.message as unknown as string}</p>
      <input type='text' placeholder='Enter an email address' {...register('email')} />
      <p>{errors.email?.message as unknown as string}</p>
      <input type='text' placeholder='Enter a phone number' {...register('phoneNumber')} />
      <p>{errors.phoneNumber?.message as unknown as string}</p>
      <input type='text' placeholder='Number of guests' {...register('numberOfGuests')} />
      <p>{errors.numberOfGuests?.message as unknown as string}</p>
      <input type='submit'/>
    </form>
  )
};