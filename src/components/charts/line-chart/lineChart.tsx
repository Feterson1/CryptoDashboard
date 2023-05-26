import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import { iLineChartProps } from '../../common/types/assets';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);







export function LineChart(props: iLineChartProps) {

    const {data} = props;

     const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      };

      
 const values = {
    labels: data[0].price_chart_data.map((element: any) => {
       return moment(element[0]).format('DD.MM.YY');
    }),
    datasets: [
      {
        label: 'Цена',
        data: data[0].price_chart_data.map((element: any) => element[1]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      
    ],
  };
      
  return ( <Line options={options} data={values} width={'100%'} height={'20%'}  />);
}