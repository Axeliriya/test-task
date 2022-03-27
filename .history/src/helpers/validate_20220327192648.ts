export const validateRules = () => ({
  name: {
    rule: (val: string) => {
      return /^[a-zA-Z]+$/.test(val);
    },
    errorMesagge: 'Поле должно содердать только английские буквы',
  },
  phone: {
    rule: (val: string) => {
      return /^[0-9]+$/.test(val);
    },
    errorMesagge: 'Поле должно содердать только цифры',
  },
});
