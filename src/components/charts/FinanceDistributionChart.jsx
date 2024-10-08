import Plot from 'react-plotly.js';
import { ResponsiveBar } from "@nivo/bar"

const FinanceDistributionChart = () => {
  const data = [
    { month: 'Jan', 2024: 50000 },
    { month: 'Feb', 2024: 70000 },
    { month: 'Mar', 2024: 75000 },
    { month: 'Apr', 2024: 90000 },
    { month: 'May', 2024: 60000 },
    { month: 'Jun', 2024: 50000 },
    { month: 'Jul', 2024: 70000 },
    { month: 'Aug', 2024: 85000 },
    { month: 'Sep', 2024: 65000 },
    { month: 'Oct', 2024: 10000 },
    { month: 'Nov', 2024: 5000 },
    { month: 'Dec', 2024: 10000 },
];

  return (
    <div className='h-full'>
        <ResponsiveBar
            data={data}
            keys={['2024']}
            indexBy="month"
            margin={{ top: 50, right: 80, bottom: 50, left: 50 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Month',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Value',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'top-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart"
        />
    </div>
  );
};

export default FinanceDistributionChart;
