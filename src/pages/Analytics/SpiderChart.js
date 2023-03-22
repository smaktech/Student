import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, CardHeader } from '@mui/material';
import useMediaQuery from '@material-ui/core/useMediaQuery';
//
import { BaseOptionChart } from '../../components/chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
    height: CHART_HEIGHT,
    marginTop: theme.spacing(2),
    '& .apexcharts-canvas svg': {
        height: CHART_HEIGHT,
    },
    '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
        overflow: 'visible',
    },
    '& .apexcharts-legend': {
        height: LEGEND_HEIGHT,
        alignContent: 'center',
        position: 'relative !important',
        borderTop: `solid 1px ${theme.palette.divider}`,
        top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
    },
}));

// ----------------------------------------------------------------------

const CHART_DATA = [
    { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
    { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
    // { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
];

export default function SpiderChart() {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

    const chartOptions = merge(BaseOptionChart(), {
        stroke: { width: 2 },
        fill: { opacity: 0.48 },
        chart: {
            offsetX: 0,
            offsetY: 30
        },
        legend: {
            horizontalAlign: 'center',
            show: false
        },
        xaxis: {
            categories: ['Math', 'Chemistry', 'Physics', 'English', 'Geography', 'History'],
            labels: {
                style: {
                    colors: [
                        theme.palette.text.primary,
                        theme.palette.text.primary,
                        theme.palette.text.primary,
                        theme.palette.text.primary,
                        theme.palette.text.primary,
                        theme.palette.text.primary,
                    ],
                },
            },
        },
    });

    return (

        <Card sx={{ boxShadow: 10, p: 3, pt:0,height: { md: '300px', lg: '400px' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardHeader title="Current Subjects" sx={{ p: 0 }} />
            <Box sx={{ height: { md: '200px', lg: '300px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ReactApexChart type="radar" series={CHART_DATA} options={chartOptions} width={isLarge ? 550 : 400} />
            </Box>
        </Card>

    );
}
