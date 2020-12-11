import React from "react";

class Feedstory extends React.Component {
  render() {
    const { feed } = this.props;

    return (
      <li className="mainFeedsStoryLi">
        <img src={feed.src} alt={feed.alt} title={feed.title} />
        <div className="mainFeedsStoryLiDiv"></div>
        <div className="mainFeedsStoryLiName">{feed.name}</div>
      </li>
    );
  }
}

export default Feedstory;
