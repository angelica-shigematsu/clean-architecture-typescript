export default interface CaseUse<T, S> {
  create(user: T): Promise<S>
  getUserById?(userId: string): Promise<T | null>
}