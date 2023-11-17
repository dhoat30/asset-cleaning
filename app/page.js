import Image from 'next/image'
import styles from './page.module.css'
import { getOptions, getPageData, getSingleCommercialData } from '@/utils/fetchData'
import Header from '@/component/Header/Header'
import Footer from '@/component/Footer/Footer'
import HomePage from '@/component/Pages/HomePage/HomePage'

export default async function Home() {
  const data = await getPageData('home')
  const optionsData = await getOptions()

  return (
    <main>
      <Header optionsData={optionsData} />
      <HomePage data={data[0]} />
      <Footer optionsData={optionsData} />
    </main>
  )
}
