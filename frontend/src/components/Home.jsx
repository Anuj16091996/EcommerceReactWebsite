import Button from "react-bootstrap/Button";

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Button variant="primary">Button</Button>
        </div>
        <div className="col">
          <Button variant="primary">Button</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
