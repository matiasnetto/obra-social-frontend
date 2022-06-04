interface IProps {
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface IReturn {
  ok: boolean;
  message: string;
}

const validate = () => {
  return { ok: true, message: '' };
};

const reject = (message: string) => {
  return { ok: false, message };
};

const validateRegisterForm = ({ username, name, surname, email, password }: IProps) => {
  if (!username || !name || !surname || !email || !password) return reject('Compelte todos los campos');

  if (username.split('').some((e) => e === ' ')) return reject('El usuario no puede contener espacios');

  if (!email.split('').some((e) => e === '@') && !email.split('').some((e) => e === '.'))
    return reject('Ingrese un mail valido');

  return validate();
};

export default validateRegisterForm;
