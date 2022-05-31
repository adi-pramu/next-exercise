import { newsData } from "../../data";

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(newsData);
    } else if (req.method === "POST") {
        const title = req.body.title;
        const url = req.body.url;
        const content = req.body.content;
        const image = req.body.image;
        const newNews = {
            id: Date.now(),
            title,
            url,
            content,
            image
        };
        newsData.push(newNews);
        res.status(201).json(newNews);
    }
}