import React from 'react'
import AdvertScreen from '../components/AdvertScreen/AdvertScreen'
import StudyMaterial from './StudyMaterial'
import Skeleton from '@material-ui/lab/Skeleton';
import DrawerHome from '../components/Drawer/Drawer'
import TestSeries from './TestSeries';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <DrawerHome/>
            <AdvertScreen/>
            <StudyMaterial/>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <TestSeries/>
            <Footer/>
        </div>
    )
}

export default Home
