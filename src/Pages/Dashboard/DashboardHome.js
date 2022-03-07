import { Copyright } from '@mui/icons-material';
import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import BloggerInfo from './BloggerInfo';
import Chart from './Chart';
import TotalViews from './TotalViews';

const DashboardHome = () => {
    return (
        <div>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                        >
                            <Chart />
                        </Paper>
                    </Grid>
                    {/* Total Views */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                        >
                            <TotalViews />
                        </Paper>
                    </Grid>
                    {/* Blogger Info */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <BloggerInfo />
                        </Paper>
                    </Grid>
                </Grid>
                <Copyright sx={{ pt: 4 }} />
            </Container>
        </div>
    );
};

export default DashboardHome;