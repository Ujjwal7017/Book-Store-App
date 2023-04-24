import React from 'react'
import { useState } from 'react';

 const UpdateBooks = ({handleUpdate}) => {
   
    const [data, setData] = useState({
        bookname: "",
        author: "",
        description: "",
        price: "",
        image: "",
    },[]);
    console.log(data);

    const change = ((e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    });

    const submit = async (e) => {
        e.preventDefault();
        handleUpdate(data);
        setData({
            bookname: "",
            author: "",
            description: "",
            price: "",
            image: "",
        });
    };
    
    return (
        <div 
        className=" bg-dark d-flex justify-content-center align-items-center update-book"
            
        >
            <div className="container p-4">
                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label text-white"
                    >
                        Book Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Book Name"
                        name="bookname"
                        value={data.bookname}
                        onChange={(e)=>change(e)}
                    />
                </div>

                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label text-white"
                    >
                        Author
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter The Name of Author"
                        name="author"
                        value={data.author}
                        onChange={(e)=>change(e)}
                    />
                </div>

                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label text-white"
                    >
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Description of the Book"
                        name="description"
                        value={data.description}
                        onChange={(e)=>change(e)}
                    />
                </div>

                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label text-white"
                    >
                        Image
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter the Url of the Image"
                        name="image"
                        value={data.image}
                        onChange={(e)=>change(e)}
                    />
                </div>

                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label text-white"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter the Price"
                        name="price"
                        value={data.price}
                        onChange={(e)=>change(e)}
                    />
                </div>
                <button className="btn btn-success" onClick={(e)=>submit(e)}>Submit</button>
            </div>
        </div>
    );
};

export default UpdateBooks;
