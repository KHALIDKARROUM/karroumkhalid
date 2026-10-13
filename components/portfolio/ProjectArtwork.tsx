type ProjectArtworkProps = { slug: string };

export function ProjectArtwork({ slug }: ProjectArtworkProps) {
  if (slug === 'price-monitor') {
    return (
      <div className="project-artwork artwork-price-monitor" aria-hidden="true">
        <img
          src="/projects/price-monitor/dashboard.jpg"
          alt=""
          width={1265}
          height={712}
          loading="lazy"
        />
        <span className="artwork-label">energy / market monitoring</span>
      </div>
    );
  }

  return (
    <div className={`project-artwork artwork-${slug}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 210"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {slug === 'aegis-credit' ? (
          <>
            <path
              className="chart-area"
              d="M0 182C75 182 115 165 157 151S220 128 266 105S329 84 366 61S462 26 600 21V210H0Z"
            />
            <path
              className="chart-line"
              d="M0 182C75 182 115 165 157 151S220 128 266 105S329 84 366 61S462 26 600 21"
            />
            <path
              className="chart-guide"
              d="M0 182L600 21M366 61V210M0 61H600"
            />
            <circle className="chart-point" cx="366" cy="61" r="6" />
            <circle className="chart-halo" cx="366" cy="61" r="16" />
          </>
        ) : slug === 'netguard' ? (
          <>
            <path
              className="chart-area"
              d="M0 135L26 141L48 119L73 127L96 143L124 111L144 122L165 30L183 142L211 127L237 136L266 110L291 123L319 146L350 128L375 134L401 64L419 131L447 119L475 140L501 126L528 137L559 114L582 126L600 123V210H0Z"
            />
            <path
              className="chart-line"
              d="M0 135L26 141L48 119L73 127L96 143L124 111L144 122L165 30L183 142L211 127L237 136L266 110L291 123L319 146L350 128L375 134L401 64L419 131L447 119L475 140L501 126L528 137L559 114L582 126L600 123"
            />
            <path className="chart-guide" d="M0 78H600" />
            <circle className="chart-point" cx="165" cy="30" r="5" />
            <circle className="chart-point" cx="401" cy="64" r="5" />
          </>
        ) : slug === 'telco-churn' ? (
          <>
            {[98, 62, 130, 78, 149, 108, 58, 122, 82].map((height, index) => (
              <rect
                key={index}
                className={index === 4 ? 'chart-bar highlighted' : 'chart-bar'}
                x={36 + index * 61}
                y={185 - height}
                width="32"
                height={height}
                rx="5"
              />
            ))}
            <path className="chart-guide" d="M25 185H580M25 105H580" />
          </>
        ) : slug === 'diabetes-prediction' ? (
          <>
            {Array.from({ length: 42 }, (_, index) => (
              <circle
                key={index}
                className={
                  index % 3 === 0 ? 'scatter-point secondary' : 'scatter-point'
                }
                cx={40 + ((index * 73) % 520)}
                cy={30 + ((index * 47) % 150)}
                r={index % 4 === 0 ? 5 : 3.5}
              />
            ))}
            <path
              className="chart-line"
              d="M30 178C160 173 174 107 290 110S418 54 565 30"
            />
          </>
        ) : (
          <>
            <rect
              className="market-window"
              x="110"
              y="25"
              width="380"
              height="180"
              rx="12"
            />
            <path className="chart-guide" d="M110 58H490" />
            <circle className="scatter-point" cx="130" cy="41" r="3" />
            <circle className="scatter-point" cx="142" cy="41" r="3" />
            <circle className="scatter-point" cx="154" cy="41" r="3" />
            {[0, 1, 2].map((index) => (
              <g key={index}>
                <rect
                  className="market-item"
                  x={132 + index * 118}
                  y="78"
                  width="100"
                  height="75"
                  rx="5"
                />
                <path
                  className="chart-line"
                  d={`M${132 + index * 118} 172h60`}
                />
                <path
                  className="chart-guide"
                  d={`M${132 + index * 118} 184h85`}
                />
              </g>
            ))}
          </>
        )}
      </svg>
      <span className="artwork-label">
        {slug === 'aegis-credit'
          ? 'risk / modeling'
          : slug === 'netguard'
            ? 'network / anomalies'
            : slug === 'telco-churn'
              ? 'customer / classification'
              : slug === 'diabetes-prediction'
                ? 'data / exploration'
                : 'product / marketplace'}
      </span>
    </div>
  );
}
