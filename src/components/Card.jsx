/* eslint-disable react/prop-types */
import { RiStarSFill } from "react-icons/ri";
import { GoIssueOpened } from "react-icons/go";
const Card = ({ name, username, img, desc, stars, issues, timing }) => {
  return (
    <section className="card">
      <aside className="userImgHolder">
        <img src={img} alt="name" className="userImg" />
      </aside>
      <main className="userDetailsHolder">
        <h2> {name} </h2>
        <h4>{username}</h4>
        <p>{desc}</p>
        <section className="moreDetailsHolder">
          <span className="stars">
            <RiStarSFill /> {stars}
          </span>
          <span className="issues">
            <GoIssueOpened />
            {issues}
          </span>
          <span className="time">{timing}</span>
        </section>
      </main>
    </section>
  );
};

export default Card;
