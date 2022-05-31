import Image from "next/image";
import { useState } from "react";

function NewsPage() {
  const [title, setTitle] = useState([]);
  const [url, setUrl] = useState([]);
  const [content, setContent] = useState([]);
  const [image, setImage] = useState([]);
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await fetch("/api/news");
    const data = await response.json();
    console.log(data);
    setNews(data);
  };

  const submitNews = async () => {
    const response = await fetch("/api/news", {
      method: "POST",
      body: JSON.stringify({
        title,
        url,
        content,
        image,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <div align="center">
        {"Title: "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        {"URL: "}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        {"Content: "}
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        {"Image: "}
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <button onClick={submitNews}>Submit book</button>
      </div>{" "}
      <br />
      <br /> <br />
      <div align="center">
        <button onClick={fetchNews}>Get the latest news</button>
      </div>{" "}
      {news.map((item) => {
        return (
          <div align="center" key={item.id}>
            {item.id}.<br />
            {"Title: "}
            {item.title}.<br />
            {"URL: "} 
            {item.url}.<br />
            {"Content: "}
            {item.content} <br />
            <Image src={item.image} alt="Gambar" width={200} height={200} /> <br />
            <hr />
          </div>
        );
      })}{" "}
    </>
  );
}

export default NewsPage;