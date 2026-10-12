import type { SkillGroup } from '@/types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Machine Learning',
    description:
      'Modeling choices backed by evaluation, calibration, and clear limitations.',
    items: [
      'scikit-learn',
      'PyTorch',
      'XGBoost',
      'LightGBM',
      'Supervised learning',
      'Anomaly detection',
      'Feature engineering',
      'Model calibration',
      'Threshold selection',
    ],
  },
  {
    title: 'Data Analysis',
    description:
      'Exploratory analysis, statistical modeling, and reproducible data preparation.',
    items: [
      'Python',
      'R',
      'pandas',
      'NumPy',
      'Jupyter',
      'Exploratory data analysis',
      'Data cleaning',
      'Missing-value handling',
      'Feature scaling',
    ],
  },
  {
    title: 'Visualization & Evaluation',
    description:
      'Interactive dashboards, clear visualizations, and reliable model evaluation.',
    items: [
      'Power BI',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Cross-validation',
      'ROC-AUC',
      'Precision & recall',
      'Confusion matrices',
      'Feature importance',
    ],
  },
  {
    title: 'Data Engineering & Databases',
    description:
      'Query, process, orchestrate, and store the data behind analytical applications.',
    items: [
      'SQL',
      'PySpark (Apache Spark)',
      'Apache Airflow',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'MongoDB',
      'ETL/ELT',
      'Data warehousing',
    ],
  },
  {
    title: 'Backend & Products',
    description:
      'Turning model artifacts into interfaces and services people can actually use.',
    items: [
      'Django',
      'FastAPI',
      'REST APIs',
      'Streamlit',
      'API design',
      'Authentication',
      'Testing',
    ],
  },
  {
    title: 'MLOps & Delivery',
    description:
      'Experiment tracking, cloud platforms, and operational controls around model delivery.',
    items: [
      'MLflow',
      'AWS',
      'Microsoft Azure',
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'CI',
      'Health checks',
      'Drift monitoring',
      'Git',
    ],
  },
];
