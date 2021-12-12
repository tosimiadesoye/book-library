import { useContext, useEffect, useState } from "react";
import { getCategory } from "../services";
import HomePage from "./Books";
import Navigation from "./Navigation";
import { bookCategory } from "../model/array"
import { BookContext } from "../utils/store";
import { useParams } from "react-router";
const Category = () =>{
    const value = useContext(BookContext)
    const [category, setCategory] = useState([])
    const [type] = useState([])
    const param = useParams()
    console.log(param)
        const categoryResult = async (term, category) =>{
            const response = await getCategory(term,category);
            if (response){
                setCategory(response.data.items)
            }
        }  

    console.log(category)

useEffect(() =>{
bookCategory.map((item)=>(
    categoryResult("subject", item)
))

}, [])

    return(
        <>
        <Navigation/>
        <div>{category && (
        <div>
            {category.map((item)=>{
                
                    return(
                        <div>
                                    <HomePage 
                                        info={item} 
                                        AddToStorage={value.AddToStorage}
                                        Author = {value.authorOrCategory}
                                        />             
                                    </div>
                    )
            })}
        </div>
    )}</div> 
       
        </>
    )
};
export default Category
