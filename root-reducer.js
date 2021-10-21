import { combineReducers } from "redux";
import { OurTeamReducer } from "./components/OurTeam/OurTeam.reducer";
import ShopCatergoriesReducer from "./components/ShopCategories/ShopCatergories";
import cartReducer from "./reducers/cart";
import productsReducer from "./reducers/products.reducer";

export const rootReducer = combineReducers({
    teamMembers :OurTeamReducer,
    ShopCategories:ShopCatergoriesReducer,
    cart:cartReducer,
    products: productsReducer,
})