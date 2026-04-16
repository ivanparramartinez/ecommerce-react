import { faker } from '@faker-js/faker'
import type { Product, User, Order, OrderStatus } from '@/types'

export function createProduct(overrides?: Partial<Product>): Product {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: Number(faker.commerce.price({ min: 10000, max: 500000 })),
    imageUrl: faker.image.url(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      slug: faker.helpers.slugify(faker.commerce.department()).toLowerCase(),
    },
    stock: faker.number.int({ min: 0, max: 100 }),
    slug: faker.helpers.slugify(faker.commerce.productName()).toLowerCase(),
    rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
    reviewCount: faker.number.int({ min: 0, max: 1000 }),
    createdAt: faker.date.past().toISOString(),
    ...overrides,
  }
}

export function createUser(overrides?: Partial<User>): User {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: 'Colombia',
    },
    ...overrides,
  }
}

export function createOrder(overrides?: Partial<Order>): Order {
  const statuses: OrderStatus[] = ['pending', 'processing', 'shipped', 'delivered', 'cancelled']
  const items = Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => {
    const product = createProduct()
    return {
      product,
      quantity: faker.number.int({ min: 1, max: 3 }),
      priceAtPurchase: product.price,
    }
  })

  return {
    id: faker.string.uuid(),
    items,
    status: faker.helpers.arrayElement(statuses),
    total: items.reduce((sum, item) => sum + item.quantity * item.priceAtPurchase, 0),
    createdAt: faker.date.past().toISOString(),
    shippingAddress: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: 'Colombia',
    },
    ...overrides,
  }
}

export const fakeProducts = (n: number) => Array.from({ length: n }, () => createProduct())
export const fakeOrders = (n: number) => Array.from({ length: n }, () => createOrder())
