import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Dialog, DialogActions, FormHelperText, TextField } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { TimeToLeave } from '@material-ui/icons';
import { useStorage } from '../../utils/useStorage';
import { db } from '../../firebase';

const MaterialInfo = ({data}) => {
    const [title, setTitle] = useState(data.title)
    const [topic, setTopic] = useState(data.topic)
    const [subject, setSubject] = useState(data.subject)
    const [desc, setDesc] = useState(data.desc)
     const [open, setOpen] = useState(false)
     const [file1, setFile1] = useState(null)
     const [openEdit, setOpenEdit] = useState(false)
    function handleOpen() {
        setOpen(true)
    }
    function handleClose (){
        setOpen(false)
    }
     function handleOpenEdit() {
        setOpenEdit(true)
    }
    function handleCloseEdit (){
        setOpenEdit(false)
    }
     const handleChange = (e) => {
        let selectedFile = e.target.files[0];
        
        if (selectedFile) {
            setFile1(selectedFile)
        }  
    }
    const {progress, url} = useStorage(file1)
    const handleDelete = (id) => {
        db.collection('material').doc(id).delete()
    }
    const handleUpdate = (id) => {
        const href = ''
        if(url){
            href = url
        }
            const data = {title, desc, subject,topic,href}
        db.collection('material').doc(id).update(data)
    }
    return (
        <>
             
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={data.url} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{data.subject}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{data.title}</h1>
            <p className="leading-relaxed mb-3">{data.desc}</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Download
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto cursor-pointer md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <EditIcon onClick={handleOpenEdit}/>
              </span>
              <span className="text-gray-400 cursor-pointer inline-flex items-center leading-none text-sm">
               <DeleteIcon onClick={handleOpen}/>
              </span>
            </div>
          </div>
        </div>
      </div>
    
     <div>
           <Dialog fullWidth open={open} onClose={handleClose}>
                <Alert severity='error'>
                   <AlertTitle><b>Are you sure you want to delete?</b></AlertTitle> 
                    Deleting will be a permanent action and data deleted can't be retrieved back
                    </Alert>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={(e) =>handleDelete(data.id)} style={{color: 'red'}}>Delete</Button>
            </DialogActions>
           </Dialog>
           <Dialog fullWidth open={openEdit} onClose={handleCloseEdit}>
               <Alert>Editing Details of {title}</Alert>
               <form style={{ padding: '30px'}} >
                   <TextField style={{marginBottom: '25px'}} variant='outlined' fullWidth onChange={(e) => setTitle(e.target.value) } placeholder='Title' label='Title'  defaultValue={title} />
                     <TextField style={{marginBottom: '25px'}} variant='outlined' fullWidth onChange={(e) => setSubject(e.target.value) } placeholder='Subject' label='Subject'  defaultValue={subject} />
              <TextField style={{marginBottom: '25px'}} variant='outlined' fullWidth onChange={(e) => setTopic(e.target.value) } placeholder='Topic' label='Topic'  defaultValue={topic} />
              <TextField style={{marginBottom: '25px'}} variant='outlined' fullWidth onChange={(e) => setDesc(e.target.value) } placeholder='Description' label='Description' multiline rows={5}  defaultValue={desc} />
              <FormHelperText>Replace the current file with new one</FormHelperText>
              <TextField type="file" onChange={handleChange} style={{marginBottom: '25px'}} variant='outlined' fullWidth   />
              
               </form>
              <DialogActions>
                   <Button onClick={handleCloseEdit} style={{backgroundColor: 'darkBlue', color: 'white'}}>cancel</Button>
                  <Button  onClick={(e) => handleUpdate(data.id)} style={{backgroundColor: 'darkcyan', color: 'white'}}>Update</Button>
              </DialogActions> 
           </Dialog>
        </div>
        </>
    )
}

export default MaterialInfo
