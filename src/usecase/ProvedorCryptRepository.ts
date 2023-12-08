export default interface ProvedorCryptRepository {
  crypt(text: string): string;
  comparatePassword(password: string, passwordCrypt: string): boolean;
}