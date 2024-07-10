import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
         <Hero />
         <LeftSection imageUrl="/media/products-kite.png" productName="Kite" ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />
         <RightSection imageUrl="/media/products-console.png" productName="Console" ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. " learnMore="" />
         <LeftSection imageUrl="/media/products-coin.png" productName="Coin" ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."  googlePlay="" appStore="" />
         <RightSection imageUrl="/media/products-kiteconnect.png" productName="Kite Connect API" ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." kiteConnect="" googlePlay="" appStore="" />
         <LeftSection imageUrl="/media/varsity-products.png" productName="Varsity mobile" ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  />
         <Universe />
        </>
     );
}

export default ProductPage;