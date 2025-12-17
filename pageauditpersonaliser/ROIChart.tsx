import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Quick Win", investissement: 2900, ca: 5600, roi: "+93%" },
  { name: "Domination", investissement: 4900, ca: 19200, roi: "+292%" },
];

const ROIChart = () => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h4 className="font-semibold text-foreground mb-1">
            Comparaison ROI par formule
          </h4>
          <p className="text-muted-foreground text-sm">Investissement vs. CA généré à M+6</p>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-chart-muted" />
            <span className="text-sm text-muted-foreground">Investissement</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-chart-success" />
            <span className="text-sm text-muted-foreground">CA généré</span>
          </div>
        </div>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} barGap={8}>
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 13, fill: "hsl(var(--foreground))", fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k€`}
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
              formatter={(value: number) => [`${value.toLocaleString()}€`]}
            />
            <Bar 
              dataKey="investissement" 
              name="Investissement"
              radius={[8, 8, 0, 0]}
              maxBarSize={60}
            >
              {data.map((_, index) => (
                <Cell key={`cell-inv-${index}`} fill="hsl(var(--chart-muted))" />
              ))}
            </Bar>
            <Bar 
              dataKey="ca" 
              name="CA généré"
              radius={[8, 8, 0, 0]}
              maxBarSize={60}
            >
              {data.map((_, index) => (
                <Cell key={`cell-ca-${index}`} fill="hsl(var(--chart-success))" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* ROI badges */}
      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
        {data.map((item) => (
          <div key={item.name} className="text-center">
            <div className="text-2xl font-bold text-chart-success stat-number">{item.roi}</div>
            <div className="text-muted-foreground text-sm">ROI {item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ROIChart;