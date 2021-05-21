import { Button, Dialog, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

import { db } from '../../firebase';
import { firebaseLooper } from '../../tools/tools';
import AddMaterial from './AddMaterial';
import MaterialInfo from './MaterialInfo';
const StudyMaterialDash = () => {
   
    const [materials, setMaterials] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        db.collection('material').onSnapshot(snapshot => {
            const data = firebaseLooper(snapshot)
            setMaterials(data)
        })
    }, [])

     function handleOpen() {
        setOpen(true)
    }
    function handleClose (){
        setOpen(false)
    }
    return (
        <div>
          <div style={{display: 'flex', justifyContent: 'flex-end', padding: '25px'}}>
              <Button style={{backgroundColor: '#126e82', color: 'white'}} onClick={handleOpen} variant='outlined'>Add new Material</Button>
          </div>
           <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
           {
       materials.map(data => (
           <MaterialInfo key={data.id} data={data}/>
       ))
   }
  
              </div>
              <Dialog fullScreen open={open} onClose={handleClose}>
                <Toolbar>
                    <Button onClick={handleClose}>Close</Button>
                </Toolbar>
   <AddMaterial/>
              </Dialog>
  
  </div>
</section>
        </div>
    )
}

export default StudyMaterialDash
