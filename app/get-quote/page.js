import { getOptions, getPageData } from '@/utils/fetchData'
import Header from '@/component/Header/Header'
import Footer from '@/component/Footer/Footer'
import HomePage from '@/component/Pages/HomePage/HomePage'
import ContactPage from '@/component/Pages/ContactPage/ContactPage'
import GetQuotePage from '@/component/Pages/GetQuotePage/GetQuotePage'
import { getQuoteFormData } from '@/component/Forms/GetQuoteForm/getQuoteFormData'
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    // const id = params.id

    // fetch data
    const data = await getPageData('get-quote-residential')

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
    if (data.length > 0) {
        const seoData = data[0].yoast_head_json;
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
                type: "website",
            },
        };
    }
}
export default async function Home() {
    const data = await getPageData('get-quote-residential')
    const optionsData = await getOptions()
    return (
        <main>
            <Header optionsData={optionsData} />
            <GetQuotePage data={data[0]} testimonialData={optionsData} />
            <Footer optionsData={optionsData} />
        </main>
    )
}
