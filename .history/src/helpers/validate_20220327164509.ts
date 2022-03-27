import { ChangeEvent } from 'react';

export const validate = (name, value, setError: any, setMessage: any) => {
  console.log(e.target);

  e.target.value.length < 1
    ? (setError(true), setMessage('Поле обязательно для заполнения'))
    : setError(false);
  e.target.name === 'email' && /.+@.+\..+/i.test(e.target.value)
    ? setError(false)
    : (setError(true), setMessage('Неверный формат e-mail'));
  e.target.name === 'phone' && /\d{9,12}$/g.test(e.target.value)
    ? setError(false)
    : (setError(true),
      setMessage('Телефонный номер должен содержать только цифры'));
  e.target.name === 'zipcode' &&
  /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(e.target.value)
    ? setError(false)
    : (setError(true), setMessage('Неверный формат zip code'));
  e.target.name === 'website' && /.+\..+/i.test(e.target.value)
    ? setError(false)
    : (setError(true), setMessage('Неверный формат website'));
  (e.target.name === 'name' ||
    e.target.name === 'username' ||
    e.target.name === 'street' ||
    e.target.name === 'city') &&
  /^[a-zA-Zа-яА-ЯёЁ\s]+$/g.test(e.target.value)
    ? setError(false)
    : (setError(true),
      setMessage('Поле должно содержать только буквы и пробелы'));
};
