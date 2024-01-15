import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ data }) => {
  const { slug, title } = data;

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
