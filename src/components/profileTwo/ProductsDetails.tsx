import Card from 'components/atoms/Card'
import { map } from 'lodash'
import faker from 'faker'
const ProductsDetails = () => {
  const fakeProducts = [0, 1, 2, 3, 4, 5, 6, 7]
  return (
    <Card
      secondary
      cardTitle="Product details"
      content={
        <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {map(fakeProducts, (product) => (
            <div className="relative overflow-hidden min-h-72 border border-gray-600 rounded-xl w-60">
              <div className="h-1/2">
                <img
                  src={faker.image.business()}
                  alt=""
                  className="h-full rounded-t-xl w-full"
                />
              </div>
              <div className="p-4 mb-4">
                <div className="text-white font-medium text-lg">
                  {faker.commerce.productName()}
                </div>
                <div className="text-gray-400 mt-2 font-medium whitespace-normal text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas
                </div>
              </div>
              <span className="px-4   font-bold  text-base my-2 absolute left-0 bottom-0 flex items-center justify-end dark:text-white">
                ${faker.commerce.price()}
              </span>
            </div>
          ))}
        </div>
      }
    />
  )
}

export default ProductsDetails
