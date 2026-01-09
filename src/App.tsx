import Rankings from "./components/Ranking";
import MARS from "./assets/MARS.png"; // Vite can import images like this

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // horizontal centering
        justifyContent: "flex-start",
        minHeight: "100vh", // full viewport height
        padding: "2rem",
        boxSizing: "border-box",
        backgroundImage: `url(${MARS})`, // set background
        backgroundSize: "cover", // cover whole container
        backgroundPosition: "center", // center image
        backgroundRepeat: "no-repeat", // don't tile
      }}
    >
      <h1> Terraformuistii - Ranking </h1>
      <Rankings />
    </div>
  );
}

export default App;
