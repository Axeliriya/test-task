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
  phone: {
    rule: (val: string) => {
      return /^[0-9]+$/.test(val);
    },
    errorMesagge: 'Поле должно содердать только цифры',
  },
  phone: {
    rule: (val: string) => {
      return /^[0-9]+$/.test(val);
    },
    errorMesagge: 'Поле должно содердать только цифры',
  },
  phone: {
    rule: (val: string) => {
      return /^[0-9]+$/.test(val);
    },
    errorMesagge: 'Поле должно содердать только цифры',
  },
  phone: {
    rule: (val: string) => {
      return /^[0-9]+$/.test(val);
    },
    errorMesagge: 'Поле должно содердать только цифры',
  },
});
