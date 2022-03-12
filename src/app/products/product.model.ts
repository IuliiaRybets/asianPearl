// the format of the expected response
export interface MediaAttribute {
  alternativeText: string
  caption: string
  createdAt: Date
  name: string
  url: string
}

export interface Media {
  attributes: MediaAttribute
}

export interface Attribute {
  color: string
  createdAt: Date
  ingredient: string
  name: string
  price: number
  product_id: string
  publishedAt: Date
  size: string
  smell: string
  type: string
  updatedAt: Date
  weight: number
  media: Media[]
}

export class Product {
  constructor(
    public id: number,
    public attributes: Attribute
  ){}
}