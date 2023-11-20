import Image from 'next/image'
import { getAllResidentialData, getOptions, getPageData } from '@/utils/fetchData'
import Header from '@/component/Header/Header'
import Footer from '@/component/Footer/Footer'
import ServicesPage from '@/component/Pages/Services/ServicesPage'
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    // const id = params.id

    // fetch data
    const data = await getPageData('residential-cleaning')

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
