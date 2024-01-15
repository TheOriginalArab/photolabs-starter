import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ label }) => {
  const { slug, title } = label;

  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <a href={`/topics/${slug}`} className="topic-list__item-link">
        {title}
      </a>
    </div>
  );
};

export default TopicListItem;
