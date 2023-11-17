import Image from 'next/image'
import { getOptions } from '@/utils/fetchData'
import Header from '@/component/Header/Header'

export default async function Home() {

    const optionsData = await getOptions()

    return (
        <main>
            <Header optionsData={optionsData} />

        </main>
    )
}
