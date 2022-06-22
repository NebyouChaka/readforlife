import React ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios
              .get(
                "https://www.googleapis.com/books/v1/volumes?q=" +
                 search +
                  "&key=AIzaSyCj41LeueJ7PweqwNLAPQiTxAvdo2ZFsKQ" +
                  "&maxResults=40"
              )
              .then((res) => setData(res.data.items))
              .catch((err) => console.log(err));
        }
    }
    return (
      <>
        <div className="header">
          <div className="row1">
            <h1>Never blame people in Life</h1>
            <h1>The good people give you happiness</h1>
            <h1>The bad people give you experiencess</h1>
            <h1>The worst people give you lessons</h1>
            <h1>The best people give you ....</h1>
          </div>
          <div className="row2">
            {/* <h4>Search </h4> */}
            <div className="search">
              <input
                type="text"
                placeholder="reading is good"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchBook}
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
            {/* <img src="./images/Book-Shelve" alt="" /> */}
          </div>
        </div>

        <div className="container">{<Card book={bookData} />}</div>
      </>
    );
}
export default Main;