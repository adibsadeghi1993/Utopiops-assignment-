import axios from 'axios'
import React,{useEffect,useState} from 'react'
import "./Edit.css"

const Edit = (props) => {
   const {userPosts,setUserPosts}=props
    const [EditPost, setEditPost] = useState({})
    const [title, setTitle] = useState("")
 
    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
       .then((response) =>setEditPost(response.data),
       )
       .then((err) => console.log(console.log(err)));
       
    }, [])

    useEffect(() => {
      setTitle(EditPost.title)
    }, [EditPost])

   const titleHandler=(e)=>{
     
      setTitle(e.target.value)
    }
    const cancelHandler=()=>{
       props.history.push("/users")
    }

    const editHandler=(e)=>{
      
       e.preventDefault()
       const oldUserPosts=[...userPosts]
       
       const body={
          userId:EditPost.userId,
          id:EditPost.id,
          title:title,
          body:EditPost.body
       }
       axios.put(`https://jsonplaceholder.typicode.com/posts/${EditPost.id}`,body)
       .then((response)=>{
          console.log(response.data)
          const {id}=response.data
          setUserPosts(userPosts.map((item)=>{
             return item.id===id ? {...response.data} :item
          }))
       })
       .catch((err)=>console.log(err))
       props.history.push("/users")

    }

    return (
        <div>
           
           <form className="form" onSubmit={editHandler}>
           <label className="label">Edit title</label>
              <input value={title} className="input" onChange={titleHandler}/>
             <div className="btns">
             <button className="btn" onClick={cancelHandler} >Cancel</button>
              <button  className="btn">Update</button>
             </div>
           </form>
        </div>
    )
}

export default Edit
