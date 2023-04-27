import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import "./styles/style.css";

const App = () => {
  const [Datas, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${1}`
      );
      const data = await res.data;

      setData(data.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="container app">
      <h1>GitHub Repos App</h1>
      <div className="cardsHolder">
        {Datas.length === 0 ? (
          <p>Load...</p>
        ) : (
          Datas.map((data) => (
            <Card
              key={data.id}
              name={data.name}
              username={data.owner.login}
              img={data.owner.avatar_url}
              desc={data.description}
              stars={data.stargazers_count}
              issues={data.open_issues_count}
              timing={data.size}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default App;
