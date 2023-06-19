import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const { productid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("https://dummyjson.com/products/" + productid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            titlechange(resp.title);
            pricechange(resp.price);
            descriptionchange(resp.description);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState("");
    const [title, titlechange] = useState("");
    const [price, pricechange] = useState("");
    const [description, descriptionchange] = useState("");
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { title, price, description };
        console.log(empdata);

        fetch("https://dummyjson.com/products/" + productid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
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

                    <div className="mb-4">
                        <label>ID</label>
                        <input value={id} disabled="disabled" className="form-control"></input>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Product Name
                        </label>
                        <input required value={title} onMouseDown={e => valchange(true)} onChange={e => titlechange(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                        {title.length == 0 && validation && <span className="text-danger">Enter the Title</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Price
                        </label>
                        <input value={price} onChange={e => pricechange(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <input value={description} onChange={e => descriptionchange(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input></div>

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

export default EditProduct;