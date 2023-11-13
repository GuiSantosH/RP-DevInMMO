import axios from "axios";
import { React, useState, useEffect } from "react";
import { Card } from "./card";
import { Link } from "react-router-dom";
import "../index.css";

function ListGames() {
  const [searchTerm, setSearchTerm] = useState("");
  const [post, setPost] = useState([]);

  const fetchData = () => {
    const ListaGames = {
      method: "GET",
      url: "https://mmo-games.p.rapidapi.com/games",
      headers: {
        "X-RapidAPI-Key": "8616e76a11msh9b8bc4dcc231edfp1519ffjsnf33e015221a6",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };
    axios
      .request(ListaGames)
      .then((response) => {
        console.log("Tamanho: " + response.data.length);
        setPost(response.data);
      })
      .catch(() => {
        console.log("Erro");
      });
  };

  useEffect(() => fetchData(), []);

  let arrayGames = [];

  post.forEach(({ thumbnail, title, short_description, id }) =>
    arrayGames.push(
      <Card
        key={id}
        title={title}
        description={short_description}
        imgUrl={thumbnail}
        alt={title}
        details={
          <Link key={id} to={`/game/${id}`}>
            Details
          </Link>
        }
      />
    )
  );

  return (
    <div key={1} id="container">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      {arrayGames
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.props["title"]
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
        })
        .map((val) => {
          return (
            <div className="unavaible" key={val.id}>
              {val}
            </div>
          );
        })}
    </div>
  );
}

export default ListGames;
