import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const navigate = useNavigate();
//   const [data, setData] = useState([]);
  const { state } = useLocation();

  const [idBarang, setId_barang] = useState("");
  const [form, setForm] = useState({
    nama_barang: "",
    harga_jual: "",
    harga_beli: "",
    stok: "",
    foto_barang: "",
  })

  const handleUpdate = (form) => {
    axios
      .put(`http://localhost:4000/barang/update/${idBarang}`, form,
      {
        headers: {
            "Content-Type": "multipart/form-data",
        }
      })
      .then((res) => {
        console.log(res);
        alert("Data berhasil diupdate");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Data gagal diupdate");
      });
  }

    useEffect(() => {
        if (state) {
            setId_barang(state.id_barang);
            setForm({
                nama_barang: state.nama_barang,
                harga_jual: state.harga_jual,
                harga_beli: state.harga_beli,
                stok: state.stok,
                foto_barang: state.foto_barang,
            })
            console.log(state);
        } else {
            navigate("/", { replace: true });
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        handleUpdate(form);
    };
  return (
    <>
      <div className="container-fluid">
        <h1
        className="text-center mt-5 mb-3"
        >Update Barang</h1>
        <div className="col-md-12">
              <form
                onSubmit={handleSubmit} 
                className="mx-4"
              >
                <div className="form-group my-3 px-4">
                  <label className="text-muted">Nama Barang</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    name="nama_barang"
                    onChange={(e) => setForm({ ...form, nama_barang: e.target.value })}
                    defaultValue={form.nama_barang}
                  />
                </div>
                <div className="form-group my-3 px-4">
                  <label className="text-muted">Harga Jual</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    name="harga_jual"
                    onChange={(e) => setForm({ ...form, harga_jual: e.target.value })}
                    defaultValue={form.harga_jual}
                  />
                </div>
                <div className="form-group my-3 px-4">
                  <label className="text-muted">Harga Beli</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    name="harga_beli"
                    onChange={(e) => setForm({ ...form, harga_beli: e.target.value })}
                    defaultValue={form.harga_beli}
                  />
                </div>
                <div className="form-group my-3 px-4">
                  <label className="text-muted">Stok</label>
                  <input type="text" className="form-control mt-1" name="stok" 
                  onChange={(e) => setForm({ ...form, stok: e.target.value })}
                    defaultValue={form.stok}
                  />
                </div>
                <div className="form-group my-3 px-4">
                  <label className="text-muted">Foto Barang</label>
                  <input
                    type="file"
                    className="form-control mt-1"
                    name="foto_barang"
                    onChange={(e) => setForm({ ...form, foto_barang: e.target.files[0] })}
                    defaultValue={form.foto_barang}
                  />
                </div>
                <div className="col-md-12 px-4 my-4 text-center">
                <button type="submit" className="btn btn-warning fs-4">
                  <i className="fa fa-save"></i> Update
                </button>
                </div>
              </form>
        </div>
      </div>
    </>
  );
};
export default Update;
