'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js/auto';
interface TAChartProps {
	data: ChartData<'bar'>;
	options?: ChartOptions<'bar'>;
}
export default function TAChart({ data, options }: TAChartProps) {
	return <Bar data={data} options={options} />;
}
