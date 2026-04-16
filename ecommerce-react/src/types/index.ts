export type Category = {
  id: string
  name: string
  slug: string
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: Category
  stock: number
  slug: string
  rating?: number
  reviewCount?: number
  createdAt: string
}

export type CartItem = {
  product: Product
  quantity: number
}

export type Cart = {
  items: CartItem[]
  total: number
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export type OrderItem = {
  product: Product
  quantity: number
  priceAtPurchase: number
}

export type Order = {
  id: string
  items: OrderItem[]
  status: OrderStatus
  total: number
  createdAt: string
  shippingAddress: Address
}

export type Address = {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export type User = {
  id: string
  name: string
  email: string
  address?: Address
}

export type CreateProductInput = Omit<Product, 'id' | 'createdAt'>

export type UpdateProductInput = Partial<Omit<Product, 'id'>>

export type PublicUser = Pick<User, 'id' | 'name'>

export type PaginatedResponse<T> = {
  data: T[]
  total: number
  page: number
  pageSize: number
}
