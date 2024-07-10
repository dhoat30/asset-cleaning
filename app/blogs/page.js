import { getPageData, getBlogsData, getOptions } from '@/utils/fetchData';
import BlogsArchive from '@/component/Pages/BlogsPage/BlogsArchive'
import Header from '@/component/Header/Header'
import Footer from '@/component/Footer/Footer'
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    // const id = params.id

    // fetch data
    const data = await getPageData('blogs')

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
    if (data.length > 0) {
        const seoData = data[0].yoast_head_json;
        return {
            title: seoData?.title,
            description: seoData?.description,
            metadataBase: new URL('https://assetcleaning.co.nz'),

            openGraph: {
                title: seoData?.title,
                description: seoData?.description,
                url: "https://assetcleaning.co.nz",
                siteName: "assetcleaning.co.nz",
                images: [
                    {
                        url: seoData?.og_image && seoData?.og_image[0]?.url,
                        width: 800,
                        height: 600,
                    },
                    {
                        url: seoData?.og_image[0] && seoData.og_image[0].url,
                        width: 1800,
                        height: 1600,
                    },
                ],
                type: "website",
            },
        };
    }
}
export default async function Home() {
    const data = await getPageData('blogs')
    const blogsData = await getBlogsData()
    const optionsData = await getOptions()

    return (
        <main>
            <Header optionsData={optionsData} />

            {/* <ServicesPage data={data[0]} /> */}
            <BlogsArchive data={data[0]} blogsData={blogsData} />
            <Footer optionsData={optionsData} />

        </main>
    )
}
