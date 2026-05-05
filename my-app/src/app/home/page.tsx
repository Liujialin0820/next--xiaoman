import { Suspense } from "react"
import { cookies } from "next/headers"

const DynamicContent = async () => {
    const data = await fetch('https://www.mocklib.com/mock/random/name') //随机生成一个名称
    const json = await data.json()
    console.log(json)
    const cookieStore = await cookies() //获取cookie
    console.log(cookieStore)
    return (
        <div>
            <h2>动态内容</h2>
            <main>
                <ul>
                    <li>名称：{json.name}</li>
                </ul>
            </main>
        </div>
    )
}

export default async function Home() {

    return (
        <div>
            <h1>Home</h1>
            <Suspense fallback={<div>动态内容Loading...</div>}>
                <DynamicContent />
            </Suspense>
        </div>
    )
}