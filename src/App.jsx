import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./components/Card";
import "./styles/style.css";
const App = () => {
  const [Datas, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`
        );
        const data = await res.data;
        setData((prevData) => [...prevData, ...data.items]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [page]);

  return (
    <section className="container app">
      <h1>GitHub Repos App</h1>
      <section className="dataHolder">
        <InfiniteScroll
          className="cardsHolder"
          dataLength={Datas.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={<h4 className="loadText">Loading...</h4>}
          endMessage={<p>No more items to load.</p>}>
          {Datas.map((data, index) => (
            <Card
              key={index}
              name={data.full_name}
              username={data.owner.login}
              img={data.owner.avatar_url}
              desc={data.description}
              stars={data.stargazers_count}
              issues={data.open_issues_count}
              timing={data.created_at}
            />
          ))}
        </InfiniteScroll>
      </section>
    </section>
  );
};

export default App;
