
import { Outlet } from 'react-router-dom';
import  React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PhotoIcon from '@mui/icons-material/Photo';
import MarkunreadIcon from '@mui/icons-material/Markunread';

const NAVIGATION = [

    {
        segment: 'Users',
        icon: <AccountCircleIcon />,
    },
    {
        segment: 'Todos',
        icon: <FormatListBulletedIcon />,
    },

    {
        segment: 'Posts',
        icon: <MarkunreadIcon />,
    },

];


function useDemoRouter(link) {
    const [pathname, setPathname] = React.useState(link);

    const router = React.useMemo(() => {
        return {
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}



const Home = () => {
   useDemoRouter('/');
// 
    return (
        <div>
            <AppProvider
                navigation={NAVIGATION}
            >
                <DashboardLayout>
                    <PageContainer>
                        <Outlet/>
                    </PageContainer>
                </DashboardLayout>
            </AppProvider>
           
        </div>

    );
}

export default Home