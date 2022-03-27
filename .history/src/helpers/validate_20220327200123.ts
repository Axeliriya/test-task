export const validateRules = () => ({
  email: {
    rule: (val: string) => {
      return /.+@.+\..+/i.test(val);
    },
    errorMesagge: 'Поле должно содердать только английские буквы',
  },
  phone: {
    rule: (val: string) => {
      return /\d{9,12}$/g.test(val);
    },
    errorMesagge: 'Поле должно содердать только цифры',
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
    errorMesagge: 'Поле должно содердать только цифры',
  },
  username: {
    rule: (val: string) => {
      return /^[a-zA-Zа-яА-ЯёЁ\s]+$/g.test(val);
    },
    errorMesagge: 'Поле должно содердать только цифры',
  },
  street: {
    rule: (val: string) => {
      /*eslint no-useless-escape: "error"*/
      return /^[a-zA-Zа-яА-ЯёЁ\.\s]+$/g.test(val);
    },
    errorMesagge: 'Поле должно содердать только цифры',
  },
  city: {
    rule: (val: string) => {
      return /^[a-zA-Zа-яА-ЯёЁ\s]+$/g.test(val);
    },
    errorMesagge: 'Поле должно содердать только цифры',
  },
});
