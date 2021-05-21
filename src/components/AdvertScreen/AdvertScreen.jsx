import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import { db } from '../../firebase';
import { firebaseLooper } from '../../tools/tools';
import Stats from '../Stats/Stats';

const AdvertScreen = () => {
    const [advertData, setAdvertData] = useState([])
    useEffect(() => {
        db.collection('youtube').onSnapshot(snapshot => {
            const data = firebaseLooper(snapshot)
            setAdvertData(data[0])
            console.log(data)
        })
    }, [])
    return (
        <div style={{padding: '20px'}}>
            <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">PSC MODERN INDIAN HISTORY/ആധുനിക ഇന്ത്യ ചരിത്രം/Class 2/
        <br class="hidden lg:inline-block"/>Ajith Sumeru/Aastha Academy
      </h1>
     
      <div style={{justifyContent: 'space-between'}} class="flex  p-6 m-5">
        <Button href={advertData.href} startIcon={<YouTubeIcon/>} style={{backgroundColor: 'red', color: 'whitesmoke', width: '150px'}}>Watch Now</Button>
         <div class="p-2 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      </div>
     
    </div>
    
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://i.ytimg.com/vi/ctuAFss0wlo/maxresdefault.jpg"/>
    </div>
  </div>
</section>
        </div>
    )
}

export default AdvertScreen
