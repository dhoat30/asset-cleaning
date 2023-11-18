import Image from 'next/image'
import { getAllCommercialData, getOptions, getPageData } from '@/utils/fetchData'
import Header from '@/component/Header/Header'
import Footer from '@/component/Footer/Footer'
import ServicesPage from '@/component/Pages/Services/ServicesPage'

export default async function Home() {
    const data = await getPageData('commercial-cleaning')
    const optionsData = await getOptions()
    const allServicesData = await getAllCommercialData()
    return (
        <main>
            <Header optionsData={optionsData} />
            <ServicesPage data={data[0]} testimonialData={optionsData} allServicesData={allServicesData} />
            <Footer optionsData={optionsData} showCTA={true} />
        </main>
    )
}
