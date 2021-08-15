/* eslint-disable quotes */
import React, { useState } from 'react'

import Selector from 'components/atoms/Selector'
import { productsArray, departmentsArray } from '../values/values'
import CountryListDropdown from 'components/CountryListDropdown'
import { find } from 'lodash'
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core'

const CustomSearchPanel = () => {
  const list = [
    { name: 'Receive quotes', href: '#/' },
    { name: 'Trending', href: '#/' },
    { name: 'Jobs', href: '#/' },
    { name: 'Remarkable', href: '#/' },
    { name: 'New', href: '#/' },
  ]

  const [selectedProduct, setSelectedProduct] = useState(productsArray[0])

  const searchPlaceHolder =
    ['products', 'bulk', 'all'].indexOf(selectedProduct.value) !== -1
      ? 'Search'
      : 'Find a'

  const [selectedDepartment, setSelectedDepartment] = useState(
    departmentsArray[0]
  )

  const tooltipData = [
    {
      heading: 'Bulk items',
      content: 'Bulk items are items that are offered in large numbers.',
    },
    {
      heading: 'Commercial agent',
      content:
        "A commercial agent acts on your company's behalf. Find a commercial agent abroad to sell your products abroad.",
    },

    {
      heading: 'Distributor',
      content:
        'A distributor acts for its own account and risk. Find a distributor who wants to buy your products.',
    },

    {
      heading: 'Manufacturer',
      content:
        'A manufacturer is a company that produces goods. Find a manufacturer who wants to produce your product.',
    },

    {
      heading: 'Supplier',
      content:
        'A supplier provides goods or services in exchange for money. Find a supplier who sells your products for your webshop, for example',
    },
  ]

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#374151',
      color: '#fff',
      maxWidth: '18rem',
      fontSize: theme.typography.pxToRem(12),
      borderRadius: '.5rem',
      padding: '1rem',
    },
  }))(Tooltip)

  return (
    <div className="mx-auto w-full max-w-md my-12  px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <div className="grid sm:grid-cols-12 rounded-t-xl h-12 grid-cols-1 dark:border-gray-700 border">
        <HtmlTooltip
          title={
            <div>
              {tooltipData.map((item, idx) => (
                <div key={item.heading + idx} className="p-1 text-sm">
                  <strong className=" mb-1">
                    {item.heading}
                    <br />{' '}
                  </strong>

                  <p className="text-gray-300 font-medium">{item.content}</p>
                </div>
              ))}
            </div>
          }
          placement="left"
        >
          <div className="col-span-3 tooltip-ref ml-2">
            <Selector
              selectedItem={selectedProduct.label}
              list={productsArray.map((product) => ({ name: product.label }))}
              required
              border={false}
              onSelect={(item) => {
                const selectedItem = find(
                  productsArray,
                  (_item) => _item.label === item.name
                )
                setSelectedProduct(selectedItem)
              }}
            />
          </div>
        </HtmlTooltip>
        <div className="col-span-5">
          <input
            id="search"
            name="search"
            type="text"
            className="relative dark:bg-gray-800 dark:text-white w-full border-none focus:outline-none text-sm  pl-3 pr-10 py-2 text-left  dark:placeholder-gray-400 placeholder-gray-500 h-full"
            placeholder={searchPlaceHolder + ' ' + selectedProduct.label}
          />
        </div>
        <div className="col-span-3">
          <Selector
            selectedItem={selectedDepartment.label}
            list={departmentsArray.map((department) => ({
              name: department.label,
            }))}
            border={false}
            required
            onSelect={(item) => {
              const selectedItem = find(
                departmentsArray,
                (_item) => _item.label === item.name
              )
              setSelectedDepartment(selectedItem)
            }}
          />
        </div>
        <div className="relative flex items-center justify-center col-span-1">
          <CountryListDropdown />
        </div>
      </div>
      <div className="grid space-x-12 sm:grid-cols-5 rounded-b-xl h-12 grid-cols-1 px-10 dark:border-gray-700 border">
        {list.map((item, idx) => {
          return (
            <>
              <div
                key={item.name + idx}
                className="dark:text-white flex items-center justify-center  text-gray-600 link-hover cursor-pointer"
              >
                {item.name}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default CustomSearchPanel
