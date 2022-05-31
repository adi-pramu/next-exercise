import { useRouter } from "next/router"

const Detail = () => {
    const router = useRouter();
    const { query } = router;

    return (
        <>
            <h1>Detail Berita</h1>
            <h3>{query.title}</h3>
            <p>{query.content}</p>
        </>
    )
}

export default Detail;