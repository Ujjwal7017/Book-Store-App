import React, { useState } from 'react';

import UpdateBooks from '../pages/UpdateBooks';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const BookSection = ({ data,deleteHandler }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handelDelete = async (id) => {
    deleteHandler(id);
    // const res = await fetch(`https://book-store-app-ujjwal7017.onrender.com/api/v1/deleteBook/${id}`);
    // const res = await fetch(`http://localhost:5000/api/v1/deleteBook/${id}`);
    // navigate("/books");
  }
  const handleUpdate = async (data) => {
    console.log(id);
    console.log(data);
    axios.put(`https://book-store-app-ujjwal7017.onrender.com/api/v1/updateBook/${id}`,data)
    .then((res) => alert(res.data.message));
    setShow(false);
  }

  return (
    <>
      {
        show === true ?
          <UpdateBooks handleUpdate={handleUpdate} /> :

          <div className="d-flex justify-content-center align-items-center flex-wrap">
            {data && data.map((item, index) => (
              <div
                className="m-3"
                style={{
                  width: "200px",
                  height: "350px",
                  border: "1px solid white",
                  borderRadius: "20px",
                }}
              >
                <div>
                  <img
                    style={{ width: "200px", height: "210px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                    className="img-fluid"
                    src={item.image}
                    alt="/"
                  />
                </div>
                <h6 style={{ fontSize: "15px" }} className="text-white px-2 my-1">
                  {item.bookname.slice(0, 20)}...
                </h6>
                <b style={{ fontSize: "30px", color: "red" }} className=" px-2">Rs. {item.price}
                </b>
                <div className="d-flex justify-content-around align-items-center my-2">
                  <button className="btn btn-primary" onClick={() => { setShow(true); setId(item._id) }}>UPDATE</button>
                  <button className="btn btn-danger" onClick={() => handelDelete(item._id)}>DELETE</button>
                </div>
              </div>
            ))}


          </div>
      }
    </>

  )
}

export default BookSection;
