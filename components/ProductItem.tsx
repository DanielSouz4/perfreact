import { memo } from 'react'

interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
  }
  onAddToWishList: (id: number) => void
}

function ProductItemComponente({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishList(product.id)}>
        Add to wishlist
      </button>
    </div>
  )
}

export const ProductItem = memo(
  ProductItemComponente,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
  }
)
