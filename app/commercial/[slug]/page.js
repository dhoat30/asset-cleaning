import Image from 'next/image'
import { getOptions, getPageData, getSingleCommercialData, getSingleResidentialData } from '@/utils/fetchData'
import Header from '@/component/Header/Header'
import SingleServicePage from '@/component/Pages/Services/SingleServicePage/SingleServicePage'
import Footer from '@/component/Footer/Footer'

export default async function singleService({ params }) {
    const slug = params.slug
    const data = await getSingleCommercialData(slug)
    const optionsData = await getOptions()
    const whyChooseUsData = await getPageData('why-choose-us-commercial')

    return (
        <main>
            <Header optionsData={optionsData} />
            <SingleServicePage data={data[0]} whyChooseUsData={whyChooseUsData[0]} />
            <Footer optionsData={optionsData} />
        </main>
    )
}
