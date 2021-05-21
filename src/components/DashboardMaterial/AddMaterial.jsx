import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { db } from '../../firebase';
import { useStorage } from '../../utils/useStorage';
import { useStorageMaterials } from '../../utils/useStorageMaterials';

const AddMaterial = () => {
     const [file, setFile] = useState(null);
     const [file1, setFile1] = useState(null);
     const [title, setTitle] = useState('')
     const [desc, setDesc] = useState('')
     const [subject, setSubject] = useState('')
     const [topic, setTopic] = useState('')
     const [error, setError] = useState('')
     const types = ["image/png", "image/jpeg", "image/jpg"];

    const handleChange = (e) => {
        let selectedFile = e.target.files[0];
        
        if (selectedFile) {
            if (types.includes(selectedFile.type)) {
                setError(null);
                setFile(selectedFile);
            } else {
                setFile(null);
                setError("Please select an image file (png or jpg)");
            }
        } 
    }
     const handleMaterial = (e) => {
        let selectedFile = e.target.files[0];
        
        if (selectedFile) {
            setFile1(selectedFile)
        }  
    }
    const {progress, url} = useStorage(file)
     const {progress1, url1} = useStorageMaterials(file1)

     const handleSubmit = (e) => {
        
        const href= url1 
        db.collection('material').add({title,subject,topic,desc,url,href}).then(() => {
            window.location.reload()
        })
     }
    return (
        <div>
            {error && <b className='text-red-500 text-center'>{error}</b>}
          <div class="container items-center px-4 py-12 lg:px-15">
              
            <form  class="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">
             <Typography variant='h3' align='center'><b>Add New Material</b></Typography> 
             {url && <img className= 'mx-10' src={url} width={300} height={300} />}
              <section class="flex flex-col w-full h-full p-1 overflow-auto">
                <header class="flex flex-col items-center justify-center py-12 text-base text-gray-500 transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                  <p class="flex flex-wrap justify-center mb-3 text-base leading-7 text-gray-500">
                    <span>Drag and drop your</span>&nbsp;<span>Image anywhere or</span>
                  </p>
                  
                  <input onChange={handleChange} placeholder='Choose the Header' type='file' />
                  
                </header>
              </section>
              <div class="relative pt-4">
                <label for="name" class="text-base leading-7 text-gray-500">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text"  placeholder="Enter the Material Title" class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"/>
              </div>
              <div class="relative mt-4">
                <label for="name" class="text-base leading-7 text-gray-500">Subject</label>
                <input onChange={(e) => setSubject(e.target.title)} type="text"   placeholder="Enter Subject name" class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"/>
              </div>
             <div class="relative mt-4">
                <label for="name" class="text-base leading-7 text-gray-500">Topic</label>
                <input onChange={(e) => setTopic(e.target.title)} type="text"   placeholder="Enter Topic" class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"/>
              </div>
             
              <div class="flex flex-wrap mb-6 -mx-3">
                <div class="w-full px-3">
                  <label class="text-base leading-7 text-gray-500" for="description"> Description </label>
                  <textarea onChange={(e) => setDesc(e.target.value)} class="w-full h-32 px-4 py-2 text-base text-gray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand" id="description" type="text" name="description" placeholder="Describe your material...." required=""></textarea>
                </div>
              </div>
               <header class="flex flex-col items-center justify-center py-12 text-base text-gray-500 transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                  <p class="flex flex-wrap justify-center mb-3 text-base leading-7 text-gray-500">
                    <span>Drag and drop your</span>&nbsp;<span>study Material anywhere or</span>
                  </p>
                  
                  <input onChange={handleMaterial} placeholder='Choose the Header' type='file' />
                  
                </header>
            {  progress1 &&  <h4><b>{progress}% uploaded</b></h4>}
              <div class="flex items-center w-full pt-4">
                <Button onClick={handleSubmit} style={{backgroundColor: '#126e82'}} class="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "> Add New Material </Button>
              </div>
            </form>
          </div>
      
        </div>
    )
}

export default AddMaterial
