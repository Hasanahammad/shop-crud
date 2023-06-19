import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const ProductDetails = () => {
    const { productid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("https://dummyjson.com/products/" + productid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            <div className="grid grid-rows-1 grid-flow-col m-11">

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Product Details</h2>
                        <br></br>
                    </div>
                    {empdata &&
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
                            <img className="w-full" src={empdata.thumbnail} alt={empdata.title} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{empdata.title}</div>
                                <p className="text-gray-700 text-base">
                                    {empdata.description}</p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <p>Price: {empdata.price}</p>
                                <p>Discount: {empdata.discountPercentage}%</p>
                                <p>Rating: {empdata.rating}</p>
                                <p>Stock: {empdata.stock}</p>
                                <p>Brand: {empdata.brand}</p>
                                <p>Category: {empdata.category}</p></div>
                        </div>
                    }
                </div>
                <Link className="bg-purple-400 h-10 w-1/2 hover:bg-purple-800 rounded-lg py-2 text-white" to="/">Back to Listing</Link>
            </div>

        </div >
    );
}

export default ProductDetails;