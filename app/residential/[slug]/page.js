import { getOptions, getPageData, getSingleResidentialData } from '@/utils/fetchData'
import Header from '@/component/Header/Header'
import SingleServicePage from '@/component/Pages/Services/SingleServicePage/SingleServicePage'
import Footer from '@/component/Footer/Footer'
import ResidentialSingleServicePage from '@/component/Pages/Services/ResidentialSingleServicePage/ResidentialSingleServicePage'
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const slug = params.slug

    // fetch data
    const data = await getSingleResidentialData(slug)

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
    if (data.length > 0) {
        const seoData = data[0].yoast_head_json
        return {
            title: seoData.title,
            description: seoData.description,
            openGraph: {
                title: seoData.title,
                description: seoData.description,
                url: "https://assetcleaning.co.nz",
                siteName: "assetcleaning.co.nz",
                images: [
                    {
                        url: seoData.og_image && seoData.og_image[0].url,
                        width: 800,
                        height: 600,
                    },

                ],
                type: 'website',
            },
        }
    }

}
export default async function singleService({ params }) {
    const slug = params.slug
    const data = await getSingleResidentialData(slug)
    const optionsData = await getOptions()
    const whyChooseUsData = await getPageData('why-choose-us-residential')

    return (
        <main>
            <Header optionsData={optionsData} />
            <ResidentialSingleServicePage data={data[0]} whyChooseUsData={whyChooseUsData[0]} />

            <Footer optionsData={optionsData} showCTA={true} />
        </main>
    )
}
