import Card from 'components/atoms/Card'
import { map } from 'lodash'

const ProductsDetails = () => {
  const fakeProducts = [0, 1, 2, 3, 4, 5, 6, 7]
  return (
    <Card
      secondary
      cardTitle="Product details"
      content={
        <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {map(fakeProducts, (product) => (
            <div className="h-72 border border-gray-600 rounded-xl w-60">
              <div className="h-1/2">
                <img
                  src={'https://source.unsplash.com/random/240x288'}
                  alt="no img"
                  className="h-full rounded-t-xl w-full"
                />
              </div>
              <div className="p-4">
                <div className="text-white font-medium text-lg">
                  Lorem ipsum dolor
                </div>
                <div className="text-gray-400 mt-2 font-medium whitespace-normal text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    />
  )
}

export default ProductsDetails
