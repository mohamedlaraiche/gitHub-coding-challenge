import Card from "./components/Card";
import "./styles/style.css";
const App = () => {
  return (
    <section className="container app">
      <h1>Github Repos in last 30 days</h1>
      <div className="cardsHolder">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default App;
