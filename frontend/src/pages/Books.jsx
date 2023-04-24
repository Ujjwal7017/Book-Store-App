import React from 'react'
import axios from "axios";
import BookSection from '../components/BookSection';
import { useEffect } from 'react';
import { useState } from "react";
const Books = () => {
  const [Data, setData] = useState()
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:1000/api/v1/getBooks")
        .then((res) => setData(res.data.books));
    };
    fetch();
  }, [])
  return (
    <div className="bg-dark book box " >
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-white">Books Section</h4>
      </div>
      {Data ? <BookSection data={Data} /> : <div className="text-white">Loading...</div>}
    </div>

  );
};

export default Books;
