import Head from 'next/head'
import Image from 'next/image'
import FeatureProduct from '../components/FeaturedProduct/FeatureProducts'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import ShopCategoriesContainer from '../components/ShopCategories/ShopCategories.container'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <>
      <HeroSlider/>
      <ShopCategoriesContainer/>
      <FeatureProduct/>

      
    </>
  )
}
