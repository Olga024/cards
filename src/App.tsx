import { useState } from "react";
import CardComponent from "./components/Card";

function App() {
  const [showFirstCard, setShowFirstCard] = useState(true);

  const toggleCard = () => {
    if (showFirstCard) {
      setShowFirstCard(false);
    } else {
      setShowFirstCard(true);
    }
  }

  return (
    <div className="App">
      <div className="card-container">
        {showFirstCard ? (
          <CardComponent
            title="Card Title"
            image="https://via.placeholder.com/150"
            content="Some quick example text to build on the card title and make up the bulk of the card's content."
            onClick={toggleCard}
          />
        ) : (
          <CardComponent
            title="Special Title Treatment"
            content="With supporting text below as a natural lead-in to additional content."
            onClick={toggleCard}
          />
        )
        }
      </div>
    </div>
  );
}

export default App;