import PageHeader from "../component/util/HeaderPage"
const Home = () => {
  const meta = [{ name: "keyword", content: "lawer, office" }];
  return (
    <div className="home">
      <PageHeader title={"יוסי אשרוב | עורך דין"} meta={meta} />
      <div className="wrapper">
        <h5>Home</h5>
      </div>
    </div>
  )
}

export default Home;
