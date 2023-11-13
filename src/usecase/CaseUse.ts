export default interface CaseUse<T, V, N> {
  create(user: T): Promise<T[]>
  getUserById(userId: string): Promise<T | N>
}