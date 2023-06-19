import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateProduct = () => {

    const [title, namechange] = useState("");

    const [description, descriptionchange] = useState("");
    const [price, pricechange] = useState("");
    const [brand, brandonchange] = useState("");
    const [category, categoryonchange] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const productdata = { title, description, price, brand, category };


        fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(productdata)
        }).then((res) => {
            console.log(res);
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div className="grid grid-rows-1 grid-flow-col m-11">
            <div className="container w-full p-11">
                <form className=" w-full text-start bg-white shadow-md rounded p-11" onSubmit={handlesubmit}>
                    <h1 className="text-start text-xl text-blue-500 hover:text-blue-400 hover:cursor-pointer">Add New Product</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Product Name
                        </label>
                        {/*<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" required value={title} onChange={e => namechange(e.target.value)}></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Product Description
                        </label>
                        {/*<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"> */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" required value={description} onChange={e => descriptionchange(e.target.value)} ></input>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Product Price
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" required value={price} onChange={e => pricechange(e.target.value)} ></input>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Product Brand
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" required value={brand} onChange={e => brandonchange(e.target.value)} ></input>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Product Category
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" required value={category} onChange={e => categoryonchange(e.target.value)} ></input>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <button className="mr-1 h-11 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
                            <Link className=" bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-3 rounded focus:outline-none focus:shadow-outline" to="/" >Back</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;