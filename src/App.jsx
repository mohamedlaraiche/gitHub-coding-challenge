import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import "./styles/style.css";
import { slice } from "lodash";

const App = () => {
  const [Datas, setData] = useState([]);
  const [pagination, setPagination] = useState(5);
  const initPage = slice(Datas, 0, pagination);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`
      );
      const data = await res.data;

      setData(data.items);
    } catch (error) {
      console.log(error.message);
    }
  };
  const loadMore = () => {
    setPagination(pagination + 5);
    console.log(pagination);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="container app">
      <h1>GitHub Repos App</h1>
      <div className="cardsHolder">
        {initPage.length === 0 ? (
          <p>Loading...</p>
        ) : (
          initPage.map((data) => (
            <Card
              key={data.id}
              name={data.full_name}
              username={data.owner.login}
              img={data.owner.avatar_url}
              desc={data.description}
              stars={data.stargazers_count}
              issues={data.open_issues_count}
              timing={data.created_at}
            />
          ))
        )}
        {initPage.length === 0 ? null : (
          <button className="LoadBtn" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default App;
