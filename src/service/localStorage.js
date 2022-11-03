export default class LocalStorage {
  static get(key) {
    try {
      const savedData = localStorage.getItem(key);
      const parseData = JSON.parse(savedData);

      return parseData;
    } catch (error) {
      console.log(error);
    }
  }

  static set(key, value) {
    const valueStringify = JSON.stringify(value);
    localStorage.setItem(key, valueStringify);
  }
}
