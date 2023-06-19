/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
const MyComponent = () => {
    const [data, setData] = useState(null);

    const navigate = useNavigate();
    const LoadDetail = (id) => {
        navigate("/product/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/product/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("https://dummyjson.com/products/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
                console.log(res);
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products'); // Replace with your API endpoint
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Render the data once it is fetched
    return (
        <div className="grid grid-rows-1 grid-flow-col m-11">
            <div className="card-body">
                <div className="btn">
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="product/create">Add New (+)</Link>
                </div>
                <br></br>
                <table className="table-auto text-start table-design">
                    <thead>
                        <tr className='bg-blue-400 text-start'>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>


                    {data ? (
                        <tbody>
                            {data.products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>Price: {product.price}</td>
                                    <td><a onClick={() => { LoadEdit(product.id) }} className="bg-green-500 hover:bg-green-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded mr-1">Edit</a>
                                        <a onClick={() => { Removefunction(product.id) }} className="bg-red-500 hover:bg-red-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded mr-1">Remove</a>
                                        <a onClick={() => { LoadDetail(product.id) }} className="bg-orange-500 hover:bg-orange-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded mr-1">Details</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <></>
                    )}



                </table>
            </div>
        </div>

    );
};

export default MyComponent;
