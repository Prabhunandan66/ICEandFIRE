import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Houses.css";
import updateChars from "../../Utils/Redux/actions/actionChar";
import { connect } from "react-redux";

function Houses() {
  const [Houses, updateHouses] = useState(null);
  let reduxstore = useDispatch();
  let navigateToChar = useNavigate();
  useEffect(() => {
    const fetchReq1 = fetch(
      `https://anapioficeandfire.com/api/houses/378`
    ).then((res) => res.json());

    const fetchReq2 = fetch(
      `https://anapioficeandfire.com/api/houses/362`
    ).then((res) => res.json());

    const fetchReq3 = fetch(
      `https://anapioficeandfire.com/api/houses/229`
    ).then((res) => res.json());

    const fetchReq4 = fetch(
      `https://anapioficeandfire.com/api/houses/398`
    ).then((res) => res.json());

    const fetchReq5 = fetch(`https://anapioficeandfire.com/api/houses/17`).then(
      (res) => res.json()
    );

    const fetchReq6 = fetch(
      `https://anapioficeandfire.com/api/houses/285`
    ).then((res) => res.json());

    const fetchReq7 = fetch(
      `https://anapioficeandfire.com/api/houses/271`
    ).then((res) => res.json());

    const fetchReq8 = fetch(
      `https://anapioficeandfire.com/api/houses/169`
    ).then((res) => res.json());

    const fetchReq9 = fetch(
      `https://anapioficeandfire.com/api/houses/395`
    ).then((res) => res.json());

    const fetchReq10 = fetch(
      `https://anapioficeandfire.com/api/houses/34`
    ).then((res) => res.json());

    const allData = Promise.all([
      fetchReq1,
      fetchReq2,
      fetchReq3,
      fetchReq4,
      fetchReq5,
      fetchReq6,
      fetchReq7,
      fetchReq8,
      fetchReq9,
      fetchReq10,
    ]);
    allData.then((res) => {
      updateHouses(res);
    });
  }, []);

  function showCharacter(evt) {
    reduxstore(updateChars(evt.target.id));
    navigateToChar("/Characters");
  }
  return (
    <>
      <article className="overview">
        <h1>🧐 OVERVIEW</h1>
        <p className="overviewDesc">
          <li>
            <b>A Game of Thrones </b>is the first novel in A Song of Ice and
            Fire, a series of fantasy novels by the American author George R. R.
            Martin.
          </li>
          <li>
            In the novel, recounting events from various points of view, Martin
            introduces the plot-lines of the noble houses of Westeros, the Wall,
            and the Targaryens. The novel has inspired several spin-off works,
            including several games.
          </li>
          <li>
            Martin characteristically deviates from the traditional fantasy
            model and clear-cut lines of good versus evil. Martin reflects: "I
            think the battle between good and evil is fought largely within the
            individual human heart, by the decisions that we make. It's not like
            evil dresses up in black clothing and you know, they're really
            ugly".This viewpoint characterizes the book and is evident in the
            actions of several different families which frequently have
            conflicts with each other.{" "}
          </li>
          <li>
            Each chapter concentrates on the third-person limited point of view
            of a single character; the book presents the perspective of eight
            main characters. Additionally, a minor character provides the
            prologue.
          </li>
        </p>
        <h1></h1>
      </article>
      <div className="booksBox">
        <h2>🏛️Top 10 Houses</h2>

        <div className="books">
          {Houses &&
            Houses.map((house, index) => {
              return (
                <div className="book" key={index}>
                  <h3>House {index + 1}</h3>
                  <h2>{house.name}</h2>
                  <p>🏴󠁧󠁮󠁭󠁿 {house.region}</p>
                  <p>🦑 󠁧󠁮{house.coatOfArms}</p>
                  <p>🔥 {house.words}</p>
                  <button
                    className="viewChar"
                    id={
                      index === 0
                        ? 378
                        : index === 1
                        ? 362
                        : index == 2
                        ? 229
                        : index === 3
                        ? 398
                        : index === 4
                        ? 17
                        : index === 5
                        ? 285
                        : index == 6
                        ? 271
                        : index === 7
                        ? 169
                        : index === 8
                        ? 385
                        : 34
                    }
                    onClick={(e) => {
                      showCharacter(e);
                    }}
                  >
                    Explore More and Characters
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default connect()(Houses);
