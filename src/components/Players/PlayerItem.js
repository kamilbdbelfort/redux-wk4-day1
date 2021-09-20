export default function PlayerItem({ player }) {
  return (
    <div
      style={{
        width: "25%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <strong>{player.name}</strong>Age: {player.age} Nationality:{" "}
      {player.nationality}
    </div>
  );
}
