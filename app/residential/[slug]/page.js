import { getOptions, getPageData, getSingleResidentialData } from '@/utils/fetchData'
import Header from '@/component/Header/Header'
import SingleServicePage from '@/component/Pages/Services/SingleServicePage/SingleServicePage'
import Footer from '@/component/Footer/Footer'

export default async function singleService({ params }) {
    const slug = params.slug
    const data = await getSingleResidentialData(slug)
    const optionsData = await getOptions()
    const whyChooseUsData = await getPageData('why-choose-us-residential')

    return (
        <main>
            <Header optionsData={optionsData} />
            <SingleServicePage data={data[0]} whyChooseUsData={whyChooseUsData[0]} />
            <Footer optionsData={optionsData} showCTA={true} />
        </main>
    )
}
