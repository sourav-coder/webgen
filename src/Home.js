import React,{useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Posts from "./Posts"
// import instance from "./axios" 


export default function Home(){

    const [posts,setPosts]=React.useState([]);
    const [loading,setLoading]=React.useState(false);
    const [curr,setCurr]=React.useState(1);
    const [page,setPage]=React.useState(6);

    useEffect(()=>{
        const load = async ()=>{
            setLoading(true);

            axios({ url: "/products/getallproducts", method: "GET" })
      .then((response) => {
        const data = response.data;
        // this.setState({ allData: data });
        console.log(data.payload);
        setPosts(data.payload);

      })
      .catch((error) => {
        console.log("Error Retriving data"+error);
      });
            setLoading(false);
        }
        load();
    },[])

    return (
        <div className="Home">
            <Navbar />
            <Posts loading={loading} posts={posts} />
        </div>
    )
}