# Price Monitor: research evaluation

Source: the project's generated `reports/data_science/report.md` and `manifest.json`, reviewed on 13 October 2026. These are results for the delivered historical snapshot, not a new live evaluation or a measurement of purchasing savings.

## Dataset

- Snapshot: 10 September 2021 to 9 September 2026, 1,287 dated rows.
- Snapshot SHA-256: `98aa047ab90dfec93ab188f50c79fd33b4b60188047560b6f132458ebb12aa26`.
- Research manifest generated: 21 September 2026.
- Brent and diesel use their published USD/barrel and USD/gallon units respectively. The rows contain missing product observations.
- Bitumen is excluded because a comparable daily transaction-price history is unavailable.

## Protocol

Chronological development (first 65%), interval calibration (next 15%), and final holdout (last 20%). Training labels crossing boundaries are purged. Preprocessing is fitted on training folds. Candidates are persistence, corrected damped Holt, Ridge, histogram gradient boosting, and random forest. Selection uses validation MAE and requires at least 2% improvement over persistence before replacing the baseline. Holdout results do not change selection.

## Selected-model holdout results

Persistence (last known price) was selected for both products at all horizons.

| Product | Calendar days | Selected model | MAE | RMSE | Interval coverage |
| --- | --- | --- | --- | --- | --- |
| Brent | 1 | Persistence | 2.3677 | 3.6559 | 79.05% |
| Brent | 7 | Persistence | 5.4362 | 7.7109 | 87.15% |
| Brent | 30 | Persistence | 12.4009 | 17.8250 | 66.09% |
| Brent | 90 | Persistence | 23.8418 | 30.6490 | 52.36% |
| Diesel | 1 | Persistence | 0.0866 | 0.1252 | 85.54% |
| Diesel | 7 | Persistence | 0.1862 | 0.2548 | 86.18% |
| Diesel | 30 | Persistence | 0.4587 | 0.6310 | 72.93% |
| Diesel | 90 | Persistence | 0.7799 | 1.0459 | 56.61% |

MAE and RMSE are in each product's own price units. They must not be averaged across products. Coverage is below the nominal 95% level. The portfolio reports the range to one decimal place using the source report's displayed percentages (52.4–87.1%).

## Interpretation and limits

The operational API's Holt projections and window backtests are separate from this research evaluation. Historical publication timestamps and revisions are unavailable, so source-date splitting does not prove a fully realistic information-at-the-time backtest. Intervals require further calibration and evaluation on new chronological observations. Market benchmarks omit executable quotes, freight, FX, and supplier terms. No cost saving, profitability, or production-adoption claim is inferred from these results.

[Project repository](https://github.com/KHALIDKARROUM/prices_monitor)
