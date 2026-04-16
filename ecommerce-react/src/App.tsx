import { Layout } from './components/layout/Layout'
import { ProductGrid } from './features/catalog/components/ProductGrid'

function App() {
  return (
    <Layout>
      <h1 className="text-2xl font-medium p-8">Mi ecommerce</h1>
      <ProductGrid />
    </Layout>
  )
}

export default App
