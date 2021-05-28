import { Doughnut } from 'react-chartjs-2'

import './TrafficChart.scss'

export const TrafficChart = () => {
  return (
    <div className='traffic-chart'>
      <Doughnut
        type='doughnut'
        data={{
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [55, 34, 11],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(254,198,0)',
              ],
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  )
}
