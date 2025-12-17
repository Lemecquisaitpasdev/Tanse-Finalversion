import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "M1", leads: 0, clients: 0 },
  { month: "M2", leads: 10, clients: 2 },
  { month: "M3", leads: 25, clients: 5 },
  { month: "M4", leads: 32, clients: 6 },
  { month: "M5", leads: 37, clients: 7 },
  { month: "M6", leads: 42, clients: 8 },
];

const TimelineChart = () => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h4 className="font-semibold text-foreground mb-1">
            Montée en charge progressive
          </h4>
          <p className="text-muted-foreground text-sm">Évolution des leads et conversions sur 6 mois</p>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">Leads</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-chart-secondary" />
            <span className="text-sm text-muted-foreground">Clients</span>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1 }}
              contentStyle={{ 
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)"
              }}
            />
            <Line 
              type="monotone" 
              dataKey="leads" 
              name="Leads organiques"
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--background))", stroke: "hsl(var(--primary))", strokeWidth: 2, r: 5 }}
              activeDot={{ fill: "hsl(var(--primary))", stroke: "hsl(var(--background))", strokeWidth: 2, r: 7 }}
            />
            <Line 
              type="monotone" 
              dataKey="clients" 
              name="Clients convertis"
              stroke="hsl(var(--chart-secondary))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--background))", stroke: "hsl(var(--chart-secondary))", strokeWidth: 2, r: 5 }}
              activeDot={{ fill: "hsl(var(--chart-secondary))", stroke: "hsl(var(--background))", strokeWidth: 2, r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimelineChart;