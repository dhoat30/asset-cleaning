import Image from 'next/image'
import { getOptions, getPageData, getSingleResidentialData } from '@/utils/fetchData'
import Header from '@/component/Header/Header'
import ResidentialCleaningPage from '@/component/Pages/Services/ResidentialCleaning/ResidentialCleaningPage'
import Footer from '@/component/Footer/Footer'

export default async function singleService({ params }) {
    const slug = params.slug
    const data = await getSingleResidentialData(slug)
    const optionsData = await getOptions()
    const whyChooseUsData = await getPageData('why-choose-us-residential')

    return (
        <main>
            <Header optionsData={optionsData} />
            <ResidentialCleaningPage data={data[0]} whyChooseUsData={whyChooseUsData[0]} />
            <Footer optionsData={optionsData} />
        </main>
    )
}
