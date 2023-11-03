import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'

export default function Home() {
  return (
    <main>
      <h1>Next js Practice</h1>
      <Link href="/users">users</Link>
      <ProductCart />
    </main>
  )
}
