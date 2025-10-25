"use client";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

interface DataVisualizationChartsProps {
  variant?: "default" | "wide";
}

export default function DataVisualizationCharts({ variant = "wide" }: DataVisualizationChartsProps) {
  // ⬆️ plus large
  const cardPadding = "p-6 md:p-8";
  const cardHeight = variant === "wide" ? 520 : 360;
  const chartHeight = variant === "wide" ? 460 : 300;

  // Données
  const trafficData = [
    { month: "Jan", traditional: 45, llm: 12 },
    { month: "Fév", traditional: 48, llm: 18 },
    { month: "Mar", traditional: 47, llm: 28 },
    { month: "Avr", traditional: 51, llm: 35 },
    { month: "Mai", traditional: 49, llm: 45 },
    { month: "Jun", traditional: 50, llm: 58 },
  ];

  const conversionData = [
    { source: "Google Search", rate: 2.8 },
    { source: "ChatGPT", rate: 15.2 },
    { source: "Perplexity", rate: 13.8 },
    { source: "Claude", rate: 16.5 },
  ];

  const TRAFFIC_SYNC = "traffic-sync";
  const CONV_SYNC = "conv-sync";

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Évolution du trafic */}
      <div
        className={`rounded-3xl border border-black/10 bg-white shadow-[0_18px_64px_-24px_rgba(0,0,0,0.25)] ${cardPadding}`}
        style={{ height: cardHeight }}
      >
        <div className="mb-3 text-sm font-medium text-neutral-800">
          Évolution du trafic
        </div>
        <div className="mb-4 h-px w-full bg-black/5" />
        <div style={{ width: "100%", height: chartHeight }}>
          <ResponsiveContainer>
            <LineChart
              data={trafficData}
              syncId={TRAFFIC_SYNC}
              margin={{ top: 8, right: 16, bottom: 40, left: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="month"
                stroke="#9CA3AF"
                tickMargin={12}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0F172A",
                  border: "1px solid #334155",
                  borderRadius: 8,
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="llm"
                name="LLMs"
                stroke="#F2B94B"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="traditional"
                name="Traditionnel"
                stroke="#94A3B8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Taux de conversion */}
      <div
        className={`rounded-3xl border border-black/10 bg-white shadow-[0_18px_64px_-24px_rgba(0,0,0,0.25)] ${cardPadding}`}
        style={{ height: cardHeight }}
      >
        <div className="mb-3 text-sm font-medium text-neutral-800">
          Taux de conversion par source (%)
        </div>
        <div className="mb-4 h-px w-full bg-black/5" />
        <div style={{ width: "100%", height: chartHeight }}>
          <ResponsiveContainer>
            <BarChart
              data={conversionData}
              syncId={CONV_SYNC}
              margin={{ top: 8, right: 16, bottom: 48, left: 8 }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="source"
                stroke="#9CA3AF"
                tickMargin={14}
                interval={0}
                padding={{ left: 14, right: 14 }}
              />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0F172A",
                  border: "1px solid #334155",
                  borderRadius: 8,
                  color: "#fff",
                }}
                formatter={(v: number) => [`${v}`, "Taux de conv. (%)"]}
              />
              <Bar
                dataKey="rate"
                name="Taux de conv. (%)"
                fill="#444684"
                radius={[12, 12, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
