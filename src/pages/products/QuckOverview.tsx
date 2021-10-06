import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { StarIcon, XIcon } from '@heroicons/react/solid'
import Button from 'components/atoms/Button'
import React, { Fragment, useState } from 'react'
import { classNames } from 'utils/classNames'

const QuickOverview = ({ show, setShow, product }: any) => {
  const [selectedColor, setSelectedColor] = useState(
    product
      ? product.availableColors[0]
      : { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' }
  )
  const [selectedSize, setSelectedSize] = useState(
    product ? product.availableSizes[1] : { name: 'XXS', inStock: false }
  )

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        style={{ zIndex: 9999 }}
        className="fixed inset-0 overflow-y-auto"
        onClose={setShow}
      >
        <div
          className="pb-20 flex items-end justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0"
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed dark:bg-black inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative flex items-center bg-white dark:bg-gray-800 px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => setShow(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 dark:bg-gray-700 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img
                      src={product.images[0].url}
                      alt={product.images[0].alt}
                      className="object-center object-cover"
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-extrabold dark:text-white text-gray-900 sm:pr-12">
                      {product.productName}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-2"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900 dark:text-white">
                        ${product.price}
                      </p>

                      {/* Reviews */}
                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  4 > rating
                                    ? 'text-yellow-500'
                                    : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {product.rating} out of 5 stars
                          </p>
                          <a
                            href="#/"
                            className="ml-3 text-sm font-medium gradient-text"
                          >
                            {113} reviews
                          </a>
                        </div>
                      </div>
                    </section>

                    <section
                      aria-labelledby="options-heading"
                      className="mt-10"
                    >
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        {/* Colors */}
                        <div>
                          <h4 className="text-sm text-gray-900 dark:text-white font-medium">
                            Color
                          </h4>

                          <RadioGroup
                            value={selectedColor}
                            onChange={setSelectedColor}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a color
                            </RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                              {product.availableColors.map((color: any) => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  style={{ background: color.code }}
                                  className={({ active, checked }) =>
                                    classNames(
                                      active && checked
                                        ? 'ring ring-offset-1'
                                        : '',
                                      !active && checked ? 'ring-2' : '',
                                      '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="p" className="sr-only">
                                    {color.name}
                                  </RadioGroup.Label>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                    )}
                                  />
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Sizes */}
                        <div className="mt-10">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm text-gray-900 dark:text-white font-medium">
                              Size
                            </h4>
                            <a
                              href="#/"
                              className="text-sm font-medium gradient-text "
                            >
                              Size guide
                            </a>
                          </div>

                          <RadioGroup
                            value={selectedSize}
                            onChange={setSelectedSize}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a size
                            </RadioGroup.Label>
                            <div className="grid grid-cols-4 gap-4">
                              {product.availableSizes.map((size: any) => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  // disabled={!size.inStock}
                                  className={({ active }) =>
                                    classNames(
                                      'bg-gray-50 text-gray-200 cursor-not-allowed',
                                      active ? 'ring-2 ring-indigo-500' : '',
                                      'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <RadioGroup.Label as="p">
                                        {size.name}
                                      </RadioGroup.Label>
                                      <div
                                        className={classNames(
                                          active ? 'border' : 'border-2',
                                          checked
                                            ? 'border-indigo-500'
                                            : 'border-transparent',
                                          'absolute -inset-px rounded-md pointer-events-none'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        <Button
                          size="xl"
                          className="mt-10"
                          fullWidth
                          gradient
                          label="Add to bag"
                        />
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default QuickOverview
