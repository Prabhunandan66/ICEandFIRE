import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Books from "./Container/Books/Books";
import icon from "./Resources/icons8-hex-burner-16.png";
import Footer from "./Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function App(props) {
  let navigate = useNavigate();
  function navigateToExplore(evt) {
    navigate("/GameofThrones");
  }

  return (
    <div>
      <Header name={"ICE and FIRE"} icon={icon} />
      <article className="overview">
        <h1>🧐 OVERVIEW</h1>
        <p className="overviewDesc">
          A Song of Ice and Fire is a series of epic fantasy novels by the
          American novelist and screenwriter <i>George R. R. Martin.</i> He
          began the first volume of the series, <i>A Game of Thrones</i>, in
          1991; the book was published in 1996. Martin, who initially envisioned
          the series as a trilogy, has published five out of a planned seven
          volumes. The fifth and most recent volume of the series,
          <i>A Dance with Dragons</i>, was published in 2011 and took Martin six
          years to write. He is currently writing the sixth novel, The Winds of
          Winter. A seventh novel, A Dream of Spring, is planned. A Song of Ice
          and Fire takes place on the fictional continents Westeros and Essos.
          The point of view of each chapter in the story is a limited
          perspective of a range of characters growing from nine in the first
          novel, to 31 characters by the fifth novel. Three main stories
          interweave: a dynastic war among several families for control of
          Westeros, the rising threat of the supernatural Others in northernmost
          Westeros, and the ambition of the deposed king's exiled daughter to
          assume the Iron Throne. Martin's inspirations included the Wars of the
          Roses and the French historical novels The Accursed Kings by Maurice
          Druon.An assortment of disparate and subjective points of view
          confronts the reader, and the success or survival of point-of-view
          characters is never assured. Within the often morally ambiguous world
          of A Song of Ice and Fire, questions concerning loyalty, pride, human
          sexuality, piety, and the morality of violence frequently arise.
        </p>
        <h1></h1>
      </article>
      <Books />
      <h1></h1>
      <div className="explore">
        <button
          onClick={(e) => {
            navigateToExplore(e);
          }}
        >
          Click Here to Explore{" "}
          <q>
            <i>A Game of Thrones</i>
          </q>
        </button>
      </div>

      <footer>
        <Footer name={"😉Welcome"}></Footer>
      </footer>
    </div>
  );
}
