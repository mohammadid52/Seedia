import Card from 'components/atoms/Card'
import faker from 'faker'
import { map } from 'lodash'

const ProductsDetails = () => {
  const fakeProducts = [
    {
      name: faker.commerce.productName(),
      image: faker.image.food(240, 288),
      description: faker.lorem.sentence(10),
    },

    {
      name: faker.commerce.productName(),
      image: faker.image.food(240, 288),
      description: faker.lorem.sentence(10),
    },

    {
      name: faker.commerce.productName(),
      image: faker.image.food(240, 288),
      description: faker.lorem.sentence(10),
    },

    {
      name: faker.commerce.productName(),
      image: faker.image.food(240, 288),
      description: faker.lorem.sentence(10),
    },
    {
      name: faker.commerce.productName(),
      image: faker.image.food(240, 288),
      description: faker.lorem.sentence(10),
    },

    {
      name: faker.commerce.productName(),
      image: faker.image.food(240, 288),
      description: faker.lorem.sentence(10),
    },

    {
      name: faker.commerce.productName(),
      image: faker.image.food(240, 288),
      description: faker.lorem.sentence(10),
    },

    {
      name: faker.commerce.productName(),
      image: faker.image.food(240, 288),
      description: faker.lorem.sentence(10),
    },
  ]
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
                  src={product.image}
                  alt="no img"
                  className="h-full rounded-t-xl w-full"
                />
              </div>
              <div className="p-4">
                <div className="text-white font-medium text-lg">
                  {product.name}
                </div>
                <div className="text-gray-400 mt-2 font-medium whitespace-normal text-xs">
                  {product.description}
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
