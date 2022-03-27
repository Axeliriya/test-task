export const validateRules = () => ({
  email: {
    rule: (val: string) => {
      return /.+@.+\..+/i.test(val);
    },
    errorMesagge: 'Неверный формат e-mail',
  },
  phone: {
    rule: (val: string) => {
      return /\d{9,12}$/.test(val);
    },
    errorMesagge: 'Поле должно содержать только цифры',
  },
  zipcode: {
    rule: (val: string) => {
      return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(val);
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
      return /^[a-zA-Zа-яА-ЯёЁ\s]+$/g.test(val);
    },
    errorMesagge: 'Поле должно содержать только буквы и пробелы',
  },
  username: {
    rule: (val: string) => {
      return /^[a-zA-Zа-яА-ЯёЁ\s]+$/g.test(val);
    },
    errorMesagge: 'Поле должно содержать только буквы и пробелы',
  },
  street: {
    rule: (val: string) => {
      return /^[a-zA-Zа-яА-ЯёЁ\s]+$/g.test(val);
    },
    errorMesagge: 'Поле должно содержать только буквы и пробелы',
  },
  city: {
    rule: (val: string) => {
      return /^[a-zA-Zа-яА-ЯёЁ\s]+$/g.test(val);
    },
    errorMesagge: 'Поле должно содержать только буквы и пробелы',
  },
});
