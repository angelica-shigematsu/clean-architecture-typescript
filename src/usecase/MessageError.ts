export default class MessageError implements Error {

  constructor(
    public name: string,
    public  status: number,
    public message: string
  ) {}
}