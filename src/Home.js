import React,{useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Posts from "./Posts"
import Pagination from "./Pagination"
import { useSelector,useDispatch } from "react-redux";
import Cookies from "js-cookie"




export default function Home(){


    
    const [posts,setPosts]=React.useState([]);
    const [loading,setLoading]=React.useState(false);
    const [curr,setCurr]=React.useState(1);
    const [page,setPage]=React.useState(6);
    const [cookie,setCookie]=React.useState(Cookies.get('jwt'));


    const productState = useSelector((state) => state) // fetches the data from store
    const dispatch=useDispatch();
    const loadingFunc=()=>{
        console.log("calle")
        setCookie(undefined)
        console.log("cleared",cookie)
    }



    useEffect(()=>{

        const load = async ()=>{
            setLoading(true);

            axios({ url: "/products/getallproducts", method: "GET" })
      .then((response) => {
        const data = response.data;
        setPosts(data.payload);
        console.log("data",data.payload)
        dispatch({type:"LOAD_PRODUCT",payload:data.payload})


      })
      .catch((error) => {
        console.log("Error Retriving data"+error);
      });
            setLoading(false);
        }
        load();        
    },[])


    const indexoflast=curr*page;
    const firstpost=indexoflast-page
    const currentPosts=productState.slice(firstpost,indexoflast)


    const paginate = (n) =>{
        setCurr(n)
    }


    return (
        <div className="Home">
            <Navbar onload={loadingFunc} cookie={cookie} />
            <Posts loading={loading} posts={currentPosts} />
            {productState.length>6?<Pagination page={page} totalPosts={posts.length} paginate={paginate} />:null}
        </div>
    )
}