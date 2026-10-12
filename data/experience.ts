export const experience = [
  {
    id: 'delta-holding',
    company: 'Delta Holding',
    focus: 'Python Development & Data Analysis',
    type: 'Internship',
    project: 'Price Monitor',
    summary:
      'Developed Price Monitor, a market-monitoring application for diesel, Brent, and bitumen, connecting traceable data collection, analysis, forecasting, and a responsive dashboard.',
    highlights: [
      'Automated API collection, data-quality checks, and historical comparisons while keeping market prices, supplier quotes, and the bitumen index distinct.',
      'Built a reproducible data science workflow covering cleaning, exploratory analysis, feature engineering, and time-series forecasting with backtesting and baseline comparisons.',
      'Added price alerts, supplier-quote management, budget tracking, and CSV/Excel exports to support purchasing analysis.',
    ],
    technologies: [
      'Python',
      'pandas',
      'scikit-learn',
      'MySQL / SQLite',
      'Time-series forecasting',
    ],
  },
] as const;
