import React from 'react';
import { useState } from 'react' 
import { TextField ,Box ,  Button , TableContainer , Table ,  TableBody  ,  TableRow , TableCell} from '@material-ui/core';
import axios from 'axios'

export default function Categories() {
  const [Categories , setCategories] = useState([])
  const [ category , setCategory] = useState({})
  const fetchCategories = async()=>{
    const response= await axios.get('http://localhost:8000/Categories')
    return setCategories(response.data)
  }
  const  fetchCategory = async(categoryID)=>{
    const response = await axios.get(`http://localhost:8000/Categories${categoryID}`)
    return setCategory(response.data)
  }
  const createOrEditCategory = async()=>{
    if (category.categoryID){
      await axios.put(`http://localhost:8000/Categories${category.categoryID}` , category)
    }
    else{
      await axios.post(`http://localhost:8000/Categories` , category)
    }
    await fetch()
    await setCategory({ categoryID: 0 , name: ' ', description: ' '})
  }
  const deleteCategory = async(categoryID)=>{
    await axios.delete(`http://localhost:8000/Categories${categoryID}`)
    await fetchCategories()
  }
 
  return (
    <div>
      
        <Box m = {10}>
            <TableContainer>
            <Button color="primary" >Categories</Button>
              <TextField value={category.categoryID} type="hidden"/>

              <Table  aria-label="simple table">
                <TableBody>
                  <TableRow>
                   
                  <TableCell>
                    <TextField value={category.categoryName} onChange={(e) => setCategory({...category,categoryName:e.target.value })} id = "standard-basic" label ="Name" />
                    </TableCell>
                    <TableCell>
                    <TextField value={category.description} onChange={(e) => setCategory({...category,description:e.target.value })} id = "standard-basic" label ="Description" />
                    </TableCell>
                    
                    <TableCell>
                      <Button onClick={()=> createOrEditCategory()} varian="contained" color="primary">
                        Submit</Button>
                    </TableCell>
                </TableRow>
                  <TableRow>
                      <TableCell >Category Name</TableCell>
                      <TableCell >Description</TableCell>
                      <TableCell >Edit</TableCell>
                      <TableCell>Delete</TableCell>
                  </TableRow>
                  {Categories.map((row) => (
                      <TableRow key={row.categoryID}>
                        <TableCell >{row.name}</TableCell>
                        <TableCell >{row.description}</TableCell>
                       
                    <TableCell>
                      <Button onClick={() => fetchCategory(row.categoryID)} variant="contained" color ="primary" > 
                      edit
                      </Button>
                </TableCell>
                 <TableCell>
                      <Button onClick={()=> deleteCategory(row.categoryID)} variant="contained" color ="secondary" > 
                      delete
                      </Button>
                </TableCell>
                </TableRow>
                  ))}
              </TableBody>
        </Table>
        </TableContainer>
        </Box>
    </div>
  );
}