import { Line } from 'react-chartjs-2'

export const MainChart = () => {
  return (
    <Line
      type='line'
      title='Online'
      data={{
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'Online',
            data: [12, 9, 10, 15, 20, 0],
            borderColor: 'rgb(239,203,146)',
            // backgroundColor: `rgba(60, 50, 255, 0.5)`,
            fill: false,
            tension: 0.4,
          },
          {
            label: 'Store',
            data: [15, 27, 14, 25, 11, 1],
            backgroundColor: `skyblue`,
            borderColor: 'rgba(5, 122, 68, 0.5)',
            fill: false,
            tension: 0.4,
          },
        ],
      }}
      options={{
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
            },
            align: 'end',
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'linear',
            grid: {
              display: true,
              drawBorder: 'dashed',
            },
          },
          y: {
            suggestedMin: 0,
            suggestMax: 35,
            grid: {
              drawBorder: false,
            },
          },
        },
      }}
    />
  )
}
