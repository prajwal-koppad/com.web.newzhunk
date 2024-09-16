import noImageAvailable from "../../assets/noImageAvailable.jpeg";
import "./NewsCard.css";

const NewsCard = (newsArticles: any) => {
  const imageUrl = newsArticles.imageUrl
    ? newsArticles.imageUrl
    : noImageAvailable;
  return (
    <>
      <div className="news-card">
        <span className="trending-tag">Trending</span>
        <img className="news-image" src={imageUrl} alt="No Image Available" />
        <div className="card-body">
          <h5 className="card-title">
            {/* {newsArticles.title} */} Microsoft 365 Copilot Wave 2 Live updates: Microsoft unveils Copilot Pages, AI agents, Narrative Builder, and more
            <small>
              <span className="new-tag">New</span>
            </small>
          </h5>
          <p className="card-text">
            {/* {newsArticles.description}*/}
            Microsoft 365 Copilot Wave 2 Live updates: Microsoft unveils Copilot Pages, AI agents, Narrative Builder, and more
            </p>
          <p className="card-text">
            <small className="text-red">
              By {newsArticles.author?.name ? newsArticles.author?.name : "Unknown"} on{" "}
              {newsArticles.date || "17-09-2024"}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsArticles.newsUrl}
            target="_blank"
            className="read-more"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
