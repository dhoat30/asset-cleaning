import Image from 'next/image'
import styles from './page.module.css'
import { getOptions, getPageData, getSingleCommercialData } from '@/utils/fetchData'
import Header from '@/component/Header/Header'

export default async function Home() {
  const data = await getPageData('home')
  const optionsData = await getOptions()
  console.log(data)
  return (
    <main>
      <Header optionsData={optionsData} />

    </main>
  )
}
