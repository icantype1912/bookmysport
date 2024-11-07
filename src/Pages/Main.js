import React from "react";

const Main = () => {
  return (
    <div className="main flex flex-col gap-3 p-3">
      <div className="search-bar flex flex-col justify-center items-start text-xl">
        <h1 className="text-center text-white">
          Find the perfect activity for your next outing! Select the sport you’d
          like to book.
        </h1>
      </div>
      <div className="sport-selector flex flex-row">
        <div
          className="sport badminton flex flex-col justify-center items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1721760886493-61c47c1caec9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="w-full text-center text-white text-xl">Badminton</h1>
        </div>
        <div
          className="sport table-tennis flex flex-col justify-center items-center"
          style={{
            backgroundImage:
              "url(https://c4.wallpaperflare.com/wallpaper/874/523/610/sports-tennis-wallpaper-preview.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="w-full text-center text-white text-xl">Table-Tennis</h1>
        </div>
        <div
          className="sport squash flex flex-col justify-center items-center"
          style={{
            backgroundImage:
              "url(https://static5.depositphotos.com/1053142/522/i/600/depositphotos_5220561-stock-photo-squash-racket-and-ball.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="w-full text-center text-white text-xl">Squash</h1>
        </div>
        <div
          className="sport pickleball flex flex-col justify-center items-center"
          style={{
            backgroundImage: "url(https://wallpapercave.com/wp/wp12538298.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="w-full text-center text-white text-xl">Pickleball</h1>
        </div>
        <div
          className="sport pool flex flex-col justify-center items-center"
          style={{
            backgroundImage:
              "url(https://wallpapers.com/images/high/cue-ball-pool-table-closer-look-5dctc8ddagadv6f6.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="w-full text-center text-white text-xl">Pool</h1>
        </div>
        <div
          className="sport chess flex flex-col justify-center items-center"
          style={{
            backgroundImage:
              "url(https://c0.wallpaperflare.com/preview/436/964/1007/black-background-black-and-white-board-game-checkmate.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="w-full text-center text-white text-xl">Chess</h1>
        </div>
        <div
          className="sport darts flex flex-col justify-center items-center"
          style={{
            backgroundImage:
              "url(https://c1.wallpaperflare.com/preview/44/269/233/target-darts-darts-machine-sport.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="w-full text-center text-white text-xl">Darts</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
