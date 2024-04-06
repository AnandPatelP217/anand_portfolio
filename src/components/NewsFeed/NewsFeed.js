import React, { useState } from 'react';
import newsData from '../../APIs/newData.json';
import './NewsFeedstylesheets/NewsFeed.css';

const NewsFeed = () => {
  const [news] = useState(newsData);

  return (
    <div className="news-feed">
      <h2>Latest News</h2>
      <div className="news-list">
        {news.map((item, index) => (
          <div className="news-item" key={index}>
            <img src={item.urlToImage} alt={item.title} className="news-image" />
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
