import Image from 'next/image'
import { getAllResidentialData, getOptions, getPageData } from '@/utils/fetchData'
import Header from '@/component/Header/Header'
import Footer from '@/component/Footer/Footer'
import ServicesPage from '@/component/Pages/Services/ServicesPage'

export default async function Home() {
    const optionsData = await getOptions()
    const data = await getPageData('residential-cleaning')
    const allServicesData = await getAllResidentialData()
    const whyChooseUsData = await getPageData('why-choose-us-commercial')
    return (
        <main>
            <Header optionsData={optionsData} />
            <ServicesPage data={data[0]} testimonialData={optionsData} allServicesData={allServicesData} whyChooseUsData={whyChooseUsData[0]} />
            <Footer optionsData={optionsData} showCTA={true} />
        </main>
    )
}
