import React from 'react';
import Header from '../components/Header';
import ProductsWithSidebar from '../components/ProductsWithSidebar';
import Footer from '../components/Footer';
import ProductsHeader from '../components/ProductsHeader';

const Products = () => {
  return (
    <>
      <Header />
      {/* 👇 Add padding so content appears below fixed header */}
      <div className="pt-[96px]">
      <ProductsHeader/>
        <ProductsWithSidebar />
        <Footer />
      </div>
    </>
  );
};

export default Products;
