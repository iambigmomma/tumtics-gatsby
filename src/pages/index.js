import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Welcome to TUMTICS"
          subTitle="Using a combination of Gatsby and Contentful, Barcadia is ready to deploy and simple to use."
        />
        <BasicTextModule
          title="Servus!"
          content="慕尼黑工大成為了我們生命中的第一個共通點，讓我們從這個點出發，串連起每位校友們互助的全球網絡"
          link="/products"
          linkText="View Products"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="串連起全球 TUM 的校友網路"
          introduction="除了學校提供的德文資訊之外，TUMTICS 用中文和英文分享更多不同背景的校友故事。讓我們以文字為橋樑，展開一場跨世代、國界及專業的經驗交流之旅"
        />
        <LatestPosts
          title="The Latest from Barcadia"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
      </Layout>
    </>
  )
}

export default Index
