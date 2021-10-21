import React from 'react'
import { useSelector } from 'react-redux'

import ShopCategories from './ShopCategories'

export default function ShopCategoriesContainer() {
    const ShopCategoriesArr = useSelector((state)=>state.ShopCategories)
    return (
        <div>
            <ShopCategories categories={ShopCategoriesArr} />
        </div>
    )
}
