export class Questions {
  constructor(
    public id?: number,
    public from_user?: string,
    public question?: string,
    public question_icon?: string,
    public date?: number,
    public answer?: string,
    public date_answer?: number,
  ) { }
}
