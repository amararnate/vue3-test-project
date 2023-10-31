export default class GenerateUniqueNumberUtils {

  static generateUniqueNumber(): number {
    const timestamp = new Date().getTime();
    const randomPart = Math.floor(Math.random() * 100000);
    const uniqueNumber = timestamp * 100000 + randomPart;

    return uniqueNumber;
  }
}