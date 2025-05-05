import { Metadata } from "next"
import { Suspense } from "react"

type IData = {
    results:{
        name: string;
        status: string;
        id: string;
    }[];
}

export const metadata: Metadata = {
    title: "batata boa",
    description: "aplicação teste com consumo de api"
}
const ServerSide = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IData = await res.json()

    return(
    <>
        <div>ServerSide page try</div>
        {data?.results.map((item, index) => {
            return(
                <div className="mb-20" key={index}>
                    <h1>{item.name}</h1>
                    <h2>{item.id}</h2>
                    <p>{item.status}</p>
                </div>
            )
        })}
    </>
    )
}

   


export default ServerSide