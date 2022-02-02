import React from "react";
import { Chrono } from "react-chrono";

const Home = () => {
    const items = [{
      title: "dez 2021",
      cardTitle: "",
      url: "https://github.com/jhonnyhubb/Counter",
      cardSubtitle:"Counter",
      cardDetailedText: "start programming",
      media: {
        type: "IMAGE",
        source: {
          url: "https://github.com/jhonnyhubb/Counter/blob/main/public/Gif/Counter.gif"
        }
      }
    }, {
        title: "dez 2021",
        cardTitle: "",
        url: "https://github.com/jhonnyhubb/Counter",
        cardSubtitle:"Counter",
        cardDetailedText: "start programming",
        media: {
          type: "IMAGE",
          source: {
            url: "https://github.com/jhonnyhubb/Counter/blob/main/public/Gif/Counter.gif"
          }
        }
      }];

    return (
        <div style={{ margin: "auto", width: "1000px", height: "1000px" }}>
            <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            />
        </div>
    )
  }

  export default Home;