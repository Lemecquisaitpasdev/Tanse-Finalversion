'use client';

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "M1", ca: 0 },
  { month: "M2", ca: 0 },
  { month: "M3", ca: 3900 },
  { month: "M4", ca: 6500 },
  { month: "M5", ca: 10200 },
  { month: "M6", ca: 15600 },
  { month: "M7", ca: 18500 },
  { month: "M8", ca: 20800 },
  { month: "M9", ca: 22100 },
  { month: "M10", ca: 24500 },
  { month: "M11", ca: 26000 },
  { month: "M12", ca: 27300 },
];

const ProjectionChart = () => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-green-200 shadow-lg">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">Projection CA sur 12 mois</h4>
          <p className="text-slate-600 text-sm">CA additionnel mensuel estimé grâce aux stratégies OkurAI</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">27 300€</div>
          <div className="text-slate-600 text-sm">/mois à M+12</div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCa" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.4}/>
                <stop offset="100%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 30000]}
              tick={{ fontSize: 12, fill: "#64748B" }}
              tickFormatter={(value) => `${value / 1000}k€`}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ stroke: '#10B981', strokeWidth: 1, strokeDasharray: '4 4' }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}
              formatter={(value: number) => [`${value.toLocaleString()}€`, "CA mensuel"]}
            />
            <Area
              type="monotone"
              dataKey="ca"
              stroke="#10B981"
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
