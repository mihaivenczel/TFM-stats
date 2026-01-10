/* Local type for players */
type Player = {
  id: string;
  name: string;
  wins: number;
  losses: number;
  muisme: number; // corrected spelling
  matches: number;
};

/* RankingConfig must include `value` and optional `renderValue` */
type RankingConfig = {
  title: string;
  value: (player: Player) => number;
  renderValue?: (value: number) => string;
};

const players = [
  {
    id: "1",
    name: "Brusti",
    wins: 3,
    losses: 1,
    muisme: 1,
    matches: 4,
  },
  {
    id: "2",
    name: "Rares",
    wins: 0,
    losses: 4,
    muisme: 2,
    matches: 4,
  },
  {
    id: "3",
    name: "Marcel",
    wins: 0,
    losses: 0,
    muisme: 0,
    matches: 0,
  },
  {
    id: "4",
    name: "Gabi",
    wins: 1,
    losses: 2,
    muisme: 0,
    matches: 3,
  },
  {
    id: "5",
    name: "Rete",
    wins: 0,
    losses: 0,
    muisme: 0,
    matches: 0,
  },
  {
    id: "6",
    name: "Mihai",
    wins: 0,
    losses: 4,
    muisme: 2,
    matches: 4,
  },
  {
    id: "7",
    name: "Dragos",
    wins: 0,
    losses: 1,
    muisme: 0,
    matches: 1,
  },
];

export default function Rankings() {
  /* Derived stats — single source of truth */
  const winRatio = (p: Player) => (p.matches === 0 ? 0 : p.wins / p.matches);
  const lossRatio = (p: Player) => (p.matches === 0 ? 0 : p.losses / p.matches);
  const muismRate = (p: Player) => (p.matches === 0 ? 0 : p.muisme / p.matches);

  const rankings: RankingConfig[] = [
    {
      title: "Leaderboard",
      value: (p) => p.wins,
      renderValue: (v) => `${v} wins`,
    },
    {
      title: "Win ratio",

      value: winRatio,
      renderValue: (v) => `${(v * 100).toFixed(1)}%`,
    },
    {
      title: "Loss ratio",

      value: lossRatio,
      renderValue: (v) => `${(v * 100).toFixed(1)}%`,
    },
    {
      title: "Muist ranking",

      value: (p) => p.muisme,
      renderValue: (v) => ` ${v}`,
    },
    {
      title: "Muism rate / match",

      value: muismRate,
      renderValue: (v) => v.toFixed(2),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        gap: 32,
        marginBottom: 24,
      }}
    >
      {rankings.map(({ title, value, renderValue }) => (
        <div key={title} style={{ textAlign: "center" }}>
          <h2>{title}</h2>

          {players
            .slice()
            .sort((a, b) => value(b) - value(a))
            .map((player, index) => {
              const computed = value(player);
              return (
                <div key={player.id}>
                  {index + 1}. <strong>{player.name}</strong> —{" "}
                  {renderValue ? renderValue(computed) : computed}
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
}
