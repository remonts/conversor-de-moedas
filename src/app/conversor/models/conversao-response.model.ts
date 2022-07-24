export class ConversaoResponse {

  constructor(
    public success: boolean,
    public timestamp: number,
    public base: string,
    public date: string,
    public rates: any
  ) {}
}
