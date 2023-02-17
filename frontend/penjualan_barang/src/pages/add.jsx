import React from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

const Add = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        handlePost(form);
    };
    const handlePost = (form) => {
        axios
        // .post("http://localhost:4000/barang/add", form)
        .post(`${process.env.REACT_APP_API_URL}/barang/add`, form)
        .then((res) => {
            console.log(res);
            alert("Data berhasil ditambahkan");
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            alert("Data gagal ditambahkan");
        });
    };

    // const 
    
    return (
        <>
        <div className="container-fluid">
            <h1
            className="text-center mt-5 mb-3"
            >Add Barang</h1>
            <div className="col-md-12">
                <form 
                onSubmit={handleSubmit} className="mx-4"
                >
                    <div className="form-group my-3 px-4">
                        <label className="text-muted">Nama Barang</label>
                        <input type="text" className="mt-1 form-control"
                        name="nama_barang"
                        />
                    </div>
                    <div className="form-group my-3 px-4">
                        <label className="text-muted">Harga Jual</label>
                        <input type="text" className="mt-1 form-control"
                        name="harga_jual"
                        />
                    </div>
                    <div className="form-group my-3 px-4">
                        <label className="text-muted">Harga Beli</label>
                        <input type="text" className="mt-1 form-control"
                        name="harga_beli"
                        />
                    </div>
                    <div className="form-group my-3 px-4">
                        <label className="text-muted">Stok</label>
                        <input type="text" className="mt-1 form-control"
                        name="stok"
                        />
                    </div>
                    <div className="form-group my-3 px-4">
                        <label className="text-muted">Foto Barang</label>
                        <input type="file" className="mt-1 form-control"
                        name="foto_barang"
                        />
                    </div>
                    <div className="col-md-12 px-4 my-4 text-center">
                    <button type="submit" className="btn btn-primary fs-4">
                        <i className="fa fa-save"></i> Tambahkan
                    </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};
export default Add;