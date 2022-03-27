import { ChangeEvent } from 'react';

export const validate = (
  name: string,
  value: string,
  setError: any,
  setMessage: any,
) => {
  console.log(name, value);

  value.length < 1
    ? (setError(true), setMessage('Поле обязательно для заполнения'))
    : setError(false);
  name === 'email' && /.+@.+\..+/i.test(value)
    ? setError(false)
    : (setError(true), setMessage('Неверный формат e-mail'));
  name === 'phone' && /\d{9,12}$/g.test(value)
    ? setError(false)
    : (setError(true),
      setMessage('Телефонный номер должен содержать только цифры'));
  name === 'zipcode' && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)
    ? setError(false)
    : (setError(true), setMessage('Неверный формат zip code'));
  name === 'website' && /.+\..+/i.test(value)
    ? setError(false)
    : (setError(true), setMessage('Неверный формат website'));
  (name === 'name' ||
    name === 'username' ||
    name === 'street' ||
    name === 'city') &&
  /^[a-zA-Zа-яА-ЯёЁ\s]+$/g.test(value)
    ? setError(false)
    : (setError(true),
      setMessage('Поле должно содержать только буквы и пробелы'));
};
