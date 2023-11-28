import Image from 'next/image'
import { getAllResidentialData, getOptions, getPageData } from '@/utils/fetchData'
import Header from '@/component/Header/Header'
import Footer from '@/component/Footer/Footer'
import ServicesPage from '@/component/Pages/Services/ServicesPage'
import FaqPage from '@/component/Pages/FaqPage/FaqPage'
import AboutUs from '@/component/Pages/AboutUsPage/AboutUs'
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    // const id = params.id

    // fetch data
    const data = await getPageData('about-us')

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
export default async function Page() {
    const optionsData = await getOptions()
    const data = await getPageData('about-us')
    const whyChooseUsData = await getPageData('why-choose-us-commercial')
    return (
        <main>
            <Header optionsData={optionsData} />
            <AboutUs data={data[0]} testimonialData={optionsData} whyChooseUsData={whyChooseUsData[0]} />
            <Footer optionsData={optionsData} showCTA={true} />
        </main>
    )
}
