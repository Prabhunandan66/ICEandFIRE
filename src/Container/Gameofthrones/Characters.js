import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Characters.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import charicon from "../../Resources/character.png";

function Characters(props) {
  const [details, updateDetails] = useState("house");
  const [founder, updateFounder] = useState("None");
  const [lord, updateLord] = useState("None");
  const [Heir, updateHeir] = useState("None");
  const [allChar, updateAllChar] = useState(null);

  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/houses/${props.name}`)
      .then((res) => res.json())
      .then((res) => {
        updateDetails(res);
        getDeatails(res);
        getChars(res);
        getHeir(res);
        getLord(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getDeatails(url) {
    fetch(url.founder)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        updateFounder(res);
      })
      .catch(() => {
        "wait...";
      });
  }
  function getLord(url) {
    fetch(url.currentLord)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        updateLord(res);
      })
      .catch(() => {
        "wait...";
      });
  }
  function getHeir(url) {
    fetch(url.heir)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        updateHeir(res);
      })
      .catch(() => {
        "wait...";
      });
  }
  function getChars(res) {
    let value = res.swornMembers;
    Promise.all(
      value.map((url) => fetch(`${url}`).then((resp) => resp.json()))
    ).then((res) => {
      updateAllChar(res);
    });
  }

  return (
    <>
      <Header name={`${details.name}`} icon={charicon}></Header>
      <div className="Startdesc">
        <section>
          <b>Titles : </b>
          {details.titles
            ? details.titles.map((val) => {
                let newTitles = val + " ";
                return newTitles;
              })
            : details.titles}
        </section>
        <section>
          <b>Region : </b>
          {details.region}
        </section>
        <section>
          <b>Ancestral Weapons : </b>
          {details.ancestralWeapons
            ? details.ancestralWeapons.map((val) => {
                let newWep = val + " ";
                return newWep;
              })
            : details.ancestralWeapons}
        </section>
        <section>
          <b>Founder : </b>
          {founder.name}
        </section>
        <section>
          <b>Heir : </b>
          {Heir.name}
        </section>
        <section>
          <b>Current Lord : </b>
          {lord.name}
        </section>
      </div>
      <h1></h1>
      <h2 style={{ textAlign: "center" }}>🏛️All Characters</h2>
      <div className="container">
        <section>
          <div className="booksBox">
            <div className="books">
              {allChar &&
                allChar.map((chars, index) => {
                  return (
                    <div className="book" key={index}>
                      <h3>Character {index + 1}</h3>
                      <h2>{chars.name}</h2>
                      <p>👧👦:-{chars.gender}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
      <Footer name={"😉Thank you"}></Footer>
    </>
  );
}
function mapStateToProps(state) {
  const name = state;
  return name;
}

export default connect(mapStateToProps)(Characters);
