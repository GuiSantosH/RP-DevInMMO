import axios from "axios";
import { React, useState, useEffect } from "react";

import "../index.css";

import { CardNews } from "./detailnews";

function LatestNews() {
  const [post, setPost] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = () => {
    const listaNoticias = {
      method: "GET",
      url: "https://mmo-games.p.rapidapi.com/latestnews",
      headers: {
        "X-RapidAPI-Key": "8616e76a11msh9b8bc4dcc231edfp1519ffjsnf33e015221a6",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    axios
      .request(listaNoticias)
      .then((response) => {
        setPost(response.data);
      })
      .catch(() => {
        console.log("Erro");
      });
  };

  useEffect(() => fetchData(), []);
  let array = [];

  post.forEach(({ thumbnail, title, short_description, id }) =>
    array.push(
      <CardNews
        key={id}
        title={title}
        description={short_description}
        imgUrl={thumbnail}
        alt={title}
      />
    )
  );

  return (
    <div id="containerNews">
      <div className="searchNews">
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {array
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
            return <div key={val.id}>{val}</div>;
          })}
      </div>
    </div>
  );
}

export default LatestNews;
