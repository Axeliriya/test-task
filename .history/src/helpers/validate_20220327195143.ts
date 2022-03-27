export const validateRules = () => ({
  email: {
    rule: (val: string) => {
      return /.+@.+\..+/i.test(val);
    },
    errorMesagge: 'Поле должно содердать только английские буквы',
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
    errorMesagge: 'Неверный формат e-mail',
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
  phone: {
    rule: (val: string) => {
      return /^[0-9]+$/.test(val);
    },
    errorMesagge: 'Поле должно содердать только цифры',
  },
});
