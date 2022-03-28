const regExp = /^[a-zA-Zа-яА-ЯёЁ\s]+$/g;
const regExpEmail = /.+@.+\..+/i;
const regExpZipcode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

export const validateRules = () => ({
  email: {
    rule: (val: string) => {
      return regExpEmail.test(val);
    },
    errorMesagge: 'Неверный формат e-mail',
  },
  phone: {
    rule: (val: string) => {
      return /\d+$/.test(val);
    },
    errorMesagge: 'Поле должно содержать только цифры',
  },
  zipcode: {
    rule: (val: string) => {
      return regExpZipcode.test(val);
    },
    errorMesagge: 'Неверный формат zip code',
  },
  website: {
    rule: (val: string) => {
      return /.+\..+/i.test(val);
    },
    errorMesagge: 'Неверный формат website',
  },
  name: {
    rule: (val: string) => {
      return regExp.test(val);
    },
    errorMesagge: 'Поле должно содержать только буквы и пробелы',
  },
  username: {
    rule: (val: string) => {
      return regExp.test(val);
    },
    errorMesagge: 'Поле должно содержать только буквы и пробелы',
  },
  street: {
    rule: (val: string) => {
      return regExp.test(val);
    },
    errorMesagge: 'Поле должно содержать только буквы и пробелы',
  },
  city: {
    rule: (val: string) => {
      return regExp.test(val);
    },
    errorMesagge: 'Поле должно содержать только буквы и пробелы',
  },
});
