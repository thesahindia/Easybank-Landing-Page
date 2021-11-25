import React from 'react'
import ArticleSection from '../components/article-section/ArticleSection'
import Banner from '../components/banner/Banner'
import FeatureSection from '../components/feature-section/FeatureSection'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
export default function Homepage() {
    return (
        <div>
            <Navbar />
            <Banner/>
            <FeatureSection />
            <ArticleSection />
            <Footer />
        </div>
    )
}
