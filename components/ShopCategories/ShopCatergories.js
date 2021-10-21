import React from "react";
import ShopCategoriesInitialState from "./ShopCatergories.initialstate";

function ShopCatergoriesReducer(
    state = ShopCategoriesInitialState,
    action = {}

) {
    switch(action.type){
        default:
            return state;
    }
}

export default ShopCatergoriesReducer;
