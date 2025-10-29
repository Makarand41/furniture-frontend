import React from 'react'
import Header from '../components/Header'
import HomeCarousel from '../components/HomeCarousel'
import FeaturedCollections from '../components/FeaturedCollections'
import NoticeBar from '../components/NoticeBar'
import PromoSplit from '../components/PromoSplit'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FurnitureGrid from '../components/FurnitureGrid'
import ProductsWithSidebar from '../components/ProductsWithSidebar'
import Testimonials from '../components/Testimonials '

// import HomeBoxA from '../components/HomeBoxA'

const Home = () => {
  return (
    <>
  
    {/* <ProductsWithSidebar/> */}
     <Header/>
     
     <HomeCarousel/>
     <FeaturedCollections/>
     <NoticeBar/>
     <PromoSplit/>
     <Testimonials/> 
   
     <Footer/>
     <ScrollToTopButton/>
    </>
  )
}

export default Home