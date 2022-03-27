const validateRules = () => ({
  name: {
    rule: val => {
      return /^[a-zA-Z]+$/.test(val);
    },
    errorMesagge: 'Поле должно содердать только английские буквы',
  },
  phone: {
    rule: val => {
      return /^[0-9]+$/.test(val);
    },
    errorMesagge: 'Поле должно содердать только цифры',
  },
});
