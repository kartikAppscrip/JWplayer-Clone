import React from "react";
import Banner from "./Banner";
import Playlist from "./Playlist";

function Body() {
  const structureJson = [
    {
      type: "banner",
      containerType: "BannerSlider",
      playlistId: "JSKF03bk",
    },
    {
      type: "playlist",
      containerType: "CardSlider",
      title: "Trending",
      playlistId: "dGSUzs9o",
    },
    {
      type: "playlist",
      containerType: "CardSlider",
      title: "Favourites",
      playlistId: "xQaFzykq",
    },
  ];
  const BASE_URL = "https://cdn.jwplayer.com/v2/playlists/";

  return (
    <div>
      {structureJson.map((ele, index) =>
        ele.type === "banner" ? (
          <Banner playlistId={ele.playlistId} baseUrl={BASE_URL} key={index} />
        ) : (
          <Playlist
            playlistId={ele.playlistId}
            baseUrl={BASE_URL}
            key={index}
          />
        )
      )}
    </div>
  );
}
export default Body;
