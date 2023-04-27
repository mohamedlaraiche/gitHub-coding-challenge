import { RiStarSFill } from "react-icons/ri";
import { GoIssueOpened } from "react-icons/go";
const Card = () => {
  return (
    <section className="card">
      <aside className="userImgHolder">
        <img src="./h.png" alt="name" className="userImg" />
      </aside>
      <main className="userDetailsHolder">
        <h2>Name</h2>
        <h4>username</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          quasi!
        </p>
        <section className="moreDetailsHolder">
          <span className="stars">
            <RiStarSFill /> 20
          </span>
          <span className="issues">
            <GoIssueOpened />
            20
          </span>
          <span className="time">timing</span>
        </section>
      </main>
    </section>
  );
};

export default Card;
