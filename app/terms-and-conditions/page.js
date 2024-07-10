import Footer from '@/component/Footer/Footer'
import Header from '@/component/Header/Header'
import HtmlPageTemplate from '@/component/Pages/HtmlPageTemplate/HtmlPageTemplate'
import { getPageData, getOptions } from '@/utils/fetchData'


export async function generateMetadata({ params, searchParams }, parent) {


    // fetch data
    const data = await getPageData("terms-and-conditions")
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    if (data.length > 0) {
        const seoData = data[0].yoast_head_json
        return {
            title: seoData.title,
            description: seoData.description,
            openGraph: {
                title: seoData.title,
                description: seoData.description,
                url: 'https://www.assetcleaning.co.nz',
                siteName: 'assetcleaning.co.nz',
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

export default async function Page() {



    const data = await getPageData("terms-and-conditions")
    const options = await getOptions()

    return (
        <>
            <Header optionsData={options} />
            <main >
                <HtmlPageTemplate pageData={data[0]} />
            </main>
            <Footer optionsData={options} />
        </>

    )
}
