import { fakeProducts } from '@/mocks/factories'
import { ProductCard } from './ProductCard'

const products = fakeProducts(20)

export function ProductGrid() {
  return [
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>,
  ]
}
