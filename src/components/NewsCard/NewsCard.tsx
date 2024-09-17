import noImageAvailable from "../../assets/noImageAvailable.jpeg";
import "./NewsCard.css";

const NewsCard = (newsArticles: any) => {
  const imageUrl = newsArticles?.imageUrl
    ? newsArticles.imageUrl
    : noImageAvailable;
    
  return (
    <>
      <div className="news-card">
        <span className="trending-tag">Trending</span>
        <img className="news-image" src={imageUrl} alt="No Image Available" />
        <div className="card-body">
          <h5 className="card-title">
            {newsArticles?.title}
            <small>
              <span className="new-tag">New</span>
            </small>
          </h5>
          <p className="card-text">{newsArticles?.description}</p>
          <p className="card-text">
            <small className="text-red">
              By{" "}
              {newsArticles?.author?.name
                ? newsArticles?.author?.name
                : "Unknown"}{" "}
              on{" "}
              {newsArticles?.date
                ? new Intl.DateTimeFormat("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZoneName: "short",
                  }).format(new Date(newsArticles.date))
                : "Date not available"}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsArticles?.newsUrl}
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
