import Image from 'next/image';
import Link from 'next/link'
import { newsData } from './data';

const News = () => {
    return (
        <div>
            <h1>Daftar Berita</h1>

            {newsData && 
                newsData.map((item) => (
                <ul>
                    <Link href={{
                    pathname: `/berita/${item.url}`,
                    query: { content: item.content }
                    }}
                    as={`/berita/${item.url}`}
                    >
                    <li><h3>{item.title}</h3>
                        <Image src={item.image} alt="Gambar" width={200} height={200} />
                        <p>{item.content}</p>
                    </li>
                    </Link>
                </ul>
            ))}

            <style jsx>{`
                h3 {
                    color: blue;
                }

                div {
                    background: grey;
                }
            `}
            </style>
        </div>
    )
}

export default News