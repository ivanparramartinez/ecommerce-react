import type { Product } from '@/types'
import { Icon } from '@iconify/react'

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col p-4">
      <div className="h-80 overflow-hidden rounded-2xl">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-1 pt-3 font-instrument text-start">
        <h2 className="text-lg font-medium text-black">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.category.name}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <Icon icon="solar:star-bold-duotone" className="text-yellow-400" width={24} />
            <span className="text-sm text-gray-700"> {product.rating?.toFixed(1)} ({product.reviewCount} reviews)</span>
          </div>
          <p className="text-lg font-semibold text-black">${(product.price / 100).toFixed(0)}</p>
        </div>
      </div>
    </div>
  )
}
