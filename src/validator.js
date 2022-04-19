export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const checkedName = this.name;
    if (
      /^[A-Za-z]/.test(checkedName)
            && !/[^\w/-]/.test(checkedName)
            && !/\d{4}/.test(checkedName)
            && /[A-Za-z]$/.test(checkedName)
    ) {
      return true;
    }
    return false;
  }
}
