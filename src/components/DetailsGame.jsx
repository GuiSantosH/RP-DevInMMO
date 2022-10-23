import axios from "axios";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import { CardDetail } from "./detailcard";

function DetailsGame() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  const fetchData = () => {
    const listaGame = {
      method: "GET",
      url: "https://mmo-games.p.rapidapi.com/game",
      params: { id: id },
      headers: {
        "X-RapidAPI-Key": "8616e76a11msh9b8bc4dcc231edfp1519ffjsnf33e015221a6",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    axios
      .request(listaGame)
      .then((response) => {
        setPost(response.data);
        console.log(post);
      })
      .catch(() => {
        console.log("Erro");
      });
  };

  useEffect(() => fetchData(), []);

  const descriptionHtml = () => {
    return <div dangerouslySetInnerHTML={{ __html: post.description }} />;
  };

  function mostraCard() {
    const titulos = [
      "Descrição",
      "Generos",
      "Plataforma",
      "Comentários",
      "Requisitos de sistema",
      "Sistema operacional",
      "Processador",
      "Memoria",
      "Gráficos",
      "Espaço em disco",
    ];

    return (
      <div id="container">
        <CardDetail
          key={post.id}
          title={post.title}
          releasedate={[post.release_date]}
          titledesc={titulos[0]}
          description={descriptionHtml()}
          alt={post.title}
          thumbnail={post.thumbnail}
        />
      </div>
    );
  }

  return (
    <div id="container">
      {mostraCard()}
    </div>
  );
}

export default DetailsGame;
