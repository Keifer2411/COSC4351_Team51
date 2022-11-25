import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export const ReservationForm = () => {
  const [formData, setFormData] = useState({});

  const schema = yup.object().shape({
    firstName: yup.string().required('First Name is Required'),
    lastName: yup.string().required('Last Name is Required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is Required'),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(10, 'Must be exactly 10 digits')
      .max(10, 'Must be exactly 10 digits')
      .required('Phone number is required'),
    numberOfDiners: yup
      .number()
      .positive()
      .integer()
      .min(1)
      .max(12, 'Limit of 12 guests per reservation')
      .required('Number Of guests is required'),
  });

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function saveReservation(e: any) {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch('/api/reservations', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (response.status !== 200) {
        console.log(response.status);
      } else {
        console.log('success');
      }
    } catch (error) {
      console.log('Error submitting form', error);
    }
  }

  return (
    <form onSubmit={saveReservation}>
      <input
        type="text"
        placeholder="First Name"
        {...register('firstName')}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <p>{errors.firstName?.message as unknown as string}</p>
      <input
        type="text"
        placeholder="Last Name"
        {...register('lastName')}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <p>{errors.lastName?.message as unknown as string}</p>
      <input
        type="text"
        placeholder="Enter an email address"
        {...register('email')}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <p>{errors.email?.message as unknown as string}</p>
      <input
        type="text"
        placeholder="Enter a phone number"
        {...register('phone')}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <p>{errors.phone?.message as unknown as string}</p>
      <input
        type="number"
        placeholder="Number of diners"
        {...register('numberOfDiners')}
        onChange={(e) =>
          setFormData({ ...formData, numberOfDiners: e.target.value })
        }
      />
      <p>{errors.numberOfDiners?.message as unknown as string}</p>
      <input type="submit" />
    </form>
  );
};
