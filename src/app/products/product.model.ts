// the format of the expected response
export class Product {
  constructor(
    public id: number,
    public name: string,
    public img_arr: Array<string>,
    public ingredients: string,
    public aroma: string,
    public functionality: string
  ){}
}