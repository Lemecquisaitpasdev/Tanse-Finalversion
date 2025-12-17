import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "M1", ca: 0 },
  { month: "M2", ca: 1600 },
  { month: "M3", ca: 4000 },
  { month: "M4", ca: 5200 },
  { month: "M5", ca: 5800 },
  { month: "M6", ca: 6400 },
  { month: "M9", ca: 8000 },
  { month: "M12", ca: 9600 },
];

const ProjectionChart = () => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="font-semibold text-foreground mb-1">
            Projection du chiffre d'affaires
          </h4>
          <p className="text-muted-foreground text-sm">CA additionnel mensuel</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold gradient-text stat-number">9 600€</div>
          <div className="text-muted-foreground text-sm">à M+12</div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCa" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              tickFormatter={(value) => `${value / 1000}k€`}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '4 4' }}
              contentStyle={{ 
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)"
              }}
              formatter={(value: number) => [`${value.toLocaleString()}€`, "CA mensuel"]}
            />
            <Area 
              type="monotone" 
              dataKey="ca" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              fill="url(#colorCa)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionChart;