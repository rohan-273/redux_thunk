import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function State() {
  const [item, setItem] = useState([]);
  const [product, setProduct] = useState(item);
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjk4ZmExMGM5NDY4NGIwNTZjNjhjOCIsInRva2VuIjoiODIzMThiYmM2ODZkMDU3ZTM1YWQ5MWMxYTJlM2U4NzIiLCJpYXQiOjE2NDAyNjEwOTV9.geiKjS2vMeGGvTOe6aE9EohD4uPrXLZaFKe3bJUSczI";
  function handleSearchClick(e) {
    if (e.target.value === "") {
      setProduct(item);
      return;
    }
    
    const filterBySearch = item?.filter((items) => {    
      console.log(items, "items");
      if (
        items._id?.toLowerCase().includes(e.target.value?.toLowerCase()) ||
        items.country?.toLowerCase().includes(e.target.value?.toLowerCase()) ||
        items.stateTitle?.toLowerCase().includes(e.target.value?.toLowerCase())
      ) {
        return items;
      }
    });
    setProduct(filterBySearch);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/noAuth/state/?page=${1}&size=${100}`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res, "reslist");
          setItem(res.data.data);
          setProduct(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div>State List</div>
      <div>
        <Link to={"/addState"}>Add State</Link>
      </div>
      <div>
        <span>Search : </span>
        <input type="search" style={{border: "1px solid black"}} onChange={(e) => handleSearchClick(e)} />
      </div>
      <table>
        <tr>
          <th>ID</th>
          <th>Country Name</th>
          <th>State Name</th>
          <th>Action</th>
        </tr>
        {product?.map((items) => (
          <tr>
            <td>{items._id}</td>
            <td>{items.country}</td>
            <td>{items.stateTitle}</td>
            <td>
              <Link to={"/editState"} state={items}>
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
