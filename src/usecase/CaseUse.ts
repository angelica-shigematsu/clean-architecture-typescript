export default interface CaseUse<T, N> {
  create(user: T): Promise<T>
  getUserById(userId: string): Promise<T | N>
}