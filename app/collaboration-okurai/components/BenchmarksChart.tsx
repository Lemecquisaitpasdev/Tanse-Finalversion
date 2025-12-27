'use client';

import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// Données des modèles d'IA avec scores de benchmark
const benchmarkData = [
  { name: "GPT-4", score: 86.4, date: new Date('2023-03-14').getTime(), org: "OpenAI", color: "#10B981" },
  { name: "Claude 3.5", score: 88.7, date: new Date('2024-06-20').getTime(), org: "Anthropic", color: "#3B82F6" },
  { name: "Gemini 1.5 Pro", score: 85.9, date: new Date('2024-02-15').getTime(), org: "Google", color: "#EF4444" },
  { name: "GPT-4 Turbo", score: 87.2, date: new Date('2023-11-06').getTime(), org: "OpenAI", color: "#10B981" },
  { name: "Claude 3", score: 86.8, date: new Date('2024-03-04').getTime(), org: "Anthropic", color: "#3B82F6" },
  { name: "Llama 3 70B", score: 82.0, date: new Date('2024-04-18').getTime(), org: "Meta", color: "#8B5CF6" },
  { name: "Mistral Large", score: 81.2, date: new Date('2024-02-26').getTime(), org: "Mistral", color: "#F59E0B" },
  { name: "GPT-3.5", score: 70.0, date: new Date('2022-11-30').getTime(), org: "OpenAI", color: "#10B981" },
  { name: "Gemini Pro", score: 79.1, date: new Date('2023-12-06').getTime(), org: "Google", color: "#EF4444" },
  { name: "Claude 2", score: 78.5, date: new Date('2023-07-11').getTime(), org: "Anthropic", color: "#3B82F6" },
];

const BenchmarksChart = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 md:p-8 border-2 border-green-200 shadow-lg">
      <div className="mb-6">
        <h4 className="font-semibold text-slate-900 text-xl mb-2">Évolution des modèles d'IA</h4>
        <p className="text-slate-600 text-sm">Analyse comparative des performances - Données OkurAI</p>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 60, left: 60 }}>
            <XAxis
              type="number"
              dataKey="date"
              name="Date"
              domain={['dataMin', 'dataMax']}
              tickFormatter={(timestamp) => {
                const date = new Date(timestamp);
                return date.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
              }}
              tick={{ fontSize: 11, fill: "#64748B" }}
              label={{ value: 'Date de sortie', position: 'bottom', offset: 40, style: { fontSize: 12, fill: '#475569', fontWeight: 600 } }}
            />
            <YAxis
              type="number"
              dataKey="score"
              name="Score"
              domain={[65, 95]}
              tick={{ fontSize: 11, fill: "#64748B" }}
              label={{ value: 'Score de performance', angle: -90, position: 'left', offset: 40, style: { fontSize: 12, fill: '#475569', fontWeight: 600 } }}
            />
            <ZAxis range={[100, 400]} />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-4 rounded-lg shadow-xl border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-1">{data.name}</p>
                      <p className="text-green-600 font-medium">Score : {data.score}</p>
                      <p className="text-slate-600 text-xs mt-1">Organisation : {data.org}</p>
                      <p className="text-slate-500 text-xs">
                        {new Date(data.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter name="Modèles IA" data={benchmarkData} fill="#8884d8">
              {benchmarkData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Légende */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-xs text-slate-600">OpenAI</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-xs text-slate-600">Anthropic</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-xs text-slate-600">Google</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
          <span className="text-xs text-slate-600">Meta</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <span className="text-xs text-slate-600">Mistral</span>
        </div>
      </div>
    </div>
  );
};

export default BenchmarksChart;
