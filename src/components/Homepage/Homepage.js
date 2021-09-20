// src/pages/HomePage.js
import { useState } from "react";
import axios from "axios";
import PlayerItem from "../Players/PlayerItem";

export default function HomePage(player) {
  const [getPlayers, set_getPlayers] = useState([]);

  async function renderPlayers() {
    try {
      const response = await axios.get(`http://localhost:4000/players`);
      set_getPlayers(response.data);
      player = getPlayers;
    } catch (e) {
      console.log(e.message);
    }
  }
  renderPlayers();

  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <h2> List of players </h2>
      {getPlayers.map((player, id) => (
        <PlayerItem key={id} player={player} />
      ))}
    </div>
  );
}
