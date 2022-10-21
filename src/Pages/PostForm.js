import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostForm.css';
import videobg8 from '../Assets/videobg8.mp4';
// const galleryStyle ={
//   border: 'none',
//   margin: 0,
//   color: '#fff',
//   fontWeight: 'bold',
//   padding: '16px 20px',
//   position: 'absolute',
//   top: '35px',
//   right: '200px',
//   background: '#7bc74d',
// }
// const postBtnStyle = {
//   border: 'none',
//   margin: 0,
//   color: '#fff',
//   fontWeight: 'bold',
//   padding: '16px 20px',
//   background: '#7D4C92 ',
//   width: '417px',
// }
// const parentDiv = {
//   align: 'center',
//   margin: '0px auto auto auto',
//   textAlign: 'center',
// }
// const formStyle = {
//   width: '400px',
//   border: '1px solid lightgray',
//   margin: '10px auto 10px auto',
//   textAlign: 'center',
//   padding: '30px 40px 30px 40px',
// }
// const inputFields = {
//   width: 'inherit',
//   fontFamily: 'arial',
//   padding: '6px',
// }
  
class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const image = this.getImage.value;
    localStorage.setItem('title', title);
    localStorage.setItem('message', message);
    localStorage.setItem('image', image);
    this.getTitle.value='';
    this.getMessage.value = '';
    this.getImage.value = '';
  }
render() {
  return (
    <div className="parentDivv">
      <video className="videoo" src={videobg8} autoPlay loop muted />
    <h1 style={{color:'#FFFFFF'}}>Courses
      <span style={{color:'#FFFFFF'}}>You</span>
    </h1>
      
<p style={{color:'#FFFFFF'}}>One place stop for all kinds of images</p>
  
    <hr></hr>
      <h3 style={{color:'#FFFFFF'}}>Create a new Post</h3>
      <form onSubmit={this.handleSubmit} className="formStylee">
         <input className="inputFieldss" required type="text" 
         placeholder="Enter Post Title" 
          ref={(input)=> this.getTitle = input }
         /><br /><br />
         <input className="inputFieldss" required type="text" 
         placeholder="Paste your image url here"
         ref={(input) => this.getImage = input}
         /><br></br>
         <br></br>
         <textarea className="inputFieldss" 
           required rows="5" cols="28" 
  
         placeholder="Enter Comment" 
           ref={(input)=>this.getMessage = input}/>
         <br /><br />
         <button className="postBtnStylee">Post</button>
      </form>
      <Link to='/gallery'>
        <button className="galleryStylee">
          View Gallery
        </button>
      </Link>
    </div>
   );
}
}
export default PostForm;