/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🦝 Todo: CREATE AN AWESOME AND MAINTAINABLE FORM COMPONENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import Swal from 'sweetalert2';

import { Input } from '@/components/input';
import {
  email_validation,
  name_validation,
  password_validation,
} from '@/utils/input-validations';

// Direct imports
import '@/assets/styles/styles.css';

export default function Signup() {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
    Swal.fire({
      icon: 'success',
      title: 'Enviado',
      text: 'Registro exitoso',
    });
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...password_validation} />
        </div>
        <div className="mt-5">
          {success && (
            <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
              <BsFillCheckSquareFill /> El formulario se ha enviado
              correctamente
            </p>
          )}
          <button
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            <GrMail />
            Enviar Formulario
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
