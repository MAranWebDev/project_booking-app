/*-------------------------------------------------------------------
|  🐼 Input Validators
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
  name: 'name',
  label: 'Nombre de usuario',
  type: 'text',
  id: 'name',
  placeholder: 'Escriba su nombre de usuario',
  validation: {
    required: {
      value: true,
      message: 'Este campo es obligatorio',
    },
    maxLength: {
      value: 30,
      message: 'Máximo 30 caracteres',
    },
  },
};

export const desc_validation = {
  name: 'description',
  label: 'Descripción',
  multiline: true,
  id: 'description',
  placeholder: 'Entrega una breve descripción de tu problema',
  validation: {
    required: {
      value: true,
      message: 'Este campo es obligatorio',
    },
    maxLength: {
      value: 200,
      message: 'Máximo 200 caracteres',
    },
  },
};

export const password_validation = {
  name: 'password',
  label: 'Contraseña',
  type: 'password',
  id: 'password',
  placeholder: 'Crea tu contraseña',
  validation: {
    required: {
      value: true,
      message: 'Este campo es obligatorio',
    },
    minLength: {
      value: 6,
      message: 'Mínimo 6 caracteres',
    },
  },
};

export const num_validation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  placeholder: 'write a random number',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
};

export const email_validation = {
  name: 'email',
  label: 'email',
  type: 'email',
  id: 'email',
  placeholder: 'Ingrese su correo de la empresa',
  validation: {
    required: {
      value: true,
      message: 'Este campo es obligatorio',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
};
