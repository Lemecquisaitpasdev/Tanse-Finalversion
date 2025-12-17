import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Compte pub désactivé", volume: 1900 },
  { name: "Feedback score", volume: 880 },
  { name: "Débloquer BM", volume: 720 },
  { name: "DMCA dropshipping", volume: 590 },
  { name: "Agence urgence", volume: 390 },
];

const SearchVolumeChart = () => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="font-semibold text-foreground mb-1">
            Volume de recherche mensuel
          </h4>
          <p className="text-muted-foreground text-sm">Par requête cible</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-foreground stat-number">4 480</div>
          <div className="text-muted-foreground text-sm">recherches/mois</div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis 
              type="number"
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              dataKey="name" 
              type="category"
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              width={140}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'hsl(var(--muted) / 0.3)' }}
              contentStyle={{ 
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)"
              }}
              formatter={(value: number) => [`${value.toLocaleString()} recherches`, ""]}
            />
            <Bar 
              dataKey="volume" 
              radius={[0, 8, 8, 0]}
              maxBarSize={40}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === 0 ? "hsl(var(--primary))" : "hsl(var(--chart-muted))"} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SearchVolumeChart;