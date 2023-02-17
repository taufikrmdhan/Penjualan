import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios
        // .get("http://localhost:4000/barang/list")
        .get(`${process.env.REACT_APP_API_URL}/barang/list`)
        .then((res) => {
            setData(res.data.data.rows);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const deleteBarang = (id_barang) => {
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            axios
            // .delete(`http://localhost:4000/barang/delete/${id_barang}`)
            .delete(`${process.env.REACT_APP_API_URL}/barang/delete/${id_barang}`)
            .then((res) => {
                alert("Data berhasil dihapus");
                setData(data.filter((item) => item.id_barang !== id_barang));
            })
            .catch((err) => {
                console.log(err);
                alert("Data gagal dihapus");
            });
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const handleNextPagination = () => {
        if (currentPage < 5) {
            setCurrentPage(currentPage + 1);
            axios
            // .get(`http://localhost:4000/barang/list?page=${currentPage}`)
            .get(`${process.env.REACT_APP_API_URL}/barang/list?page=${currentPage}`)
            .then((res) => {
                setData(res.data.data.rows);
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );
        }
    };

    const handlePrevPagination = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            axios
            // .get(`http://localhost:4000/barang/list?page=${currentPage}`)
            .get(`${process.env.REACT_APP_API_URL}/barang/list?page=${currentPage}`)
            .then((res) => {
                setData(res.data.data.rows);
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );
        }
    };

    let startNumber = 1;
    if (currentPage !== 1) {
        startNumber = (currentPage - 1) * 3 + 1;
    }

    const [namaBarang, setNamaBarang] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (namaBarang !== "") {
            axios
            // .get(`http://localhost:4000/barang/list/search/${namaBarang}`)
            .get(`${process.env.REACT_APP_API_URL}/barang/list/search/${namaBarang}`)
            .then((res) => {
                setData(res.data.data.rows);
                // navigate ke halaman dengan parameter nama barang
            })
            .catch((err) => {
                console.log(err);
            });
        }
    };
    return (
        <>
        <div className="container-fluid">
            <h1 className="text-center mt-5 mb-3 ">Persediaan Barang</h1>
            <div className="col-md-12 my-4">
                <Link to="/add"
                >
                <button className="btn btn-dark fs-4">
                    <i className="fa fa-plus "></i> Add Barang
                </button>
                </Link>
            </div>
            {/* search barang */}
            <div className="col-md-12">
                <form onSubmit={(e)=>handleSearch(e)}>
                <div className="input-group mb-3">
                    <input 
                    onChange={(e)=>setNamaBarang(e.target.value)}
                    type="text" className="form-control" placeholder="Search Barang" aria-label="Search Barang" aria-describedby="button-addon2"
                    name="nama_barang"
                    />
                    <button className="btn btn-dark" type="button" id="button-addon2">Search</button>
                </div>
                </form>
            </div>
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead className="bg-light">
                        <tr>
                            <th className="fs-4">No</th>
                            <th className="fs-4">Nama Barang</th>
                            <th className="fs-4">Harga Jual</th>
                            <th className="fs-4">Harga Beli</th>
                            <th className="fs-4">Stok</th>
                            <th className="fs-4">Foto Barang</th>
                            <th className="fs-4">Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="fs-5">{startNumber++}</td>
                                        <td className="fs-5">{item.nama_barang}</td>
                                        <td className="fs-5">{item.harga_jual}</td>
                                        <td className="fs-5">{item.harga_beli}</td>
                                        <td className="fs-5">{item.stok}</td>
                                        <td className="text-center">
                                            <img src={`http://localhost:4000/${item.foto_barang}`} width="100" height="100" alt="foto_barang" />
                                        </td>
                                        <td>
                                            {/* <Link to={`/update/${item.id_barang}`} */}
                                            <Link to='/update'
                                            state={{
                                                id_barang: item.id_barang,
                                                nama_barang: item.nama_barang,
                                                harga_jual: item.harga_jual,
                                                harga_beli: item.harga_beli,
                                                stok: item.stok,
                                                foto_barang: item.foto_barang
                                            }}
                                            >
                                            <button className="btn btn-warning me-2">
                                                <i className="fa fa-edit fs-5 text-white"></i>
                                            </button>
                                            </Link>
                                            <button className="btn btn-danger"
                                            type="button"
                                            onClick={() => deleteBarang(item.id_barang)}
                                            >
                                                <i className="fa fa-trash fs-5"></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item me-2">
                            <button className="page-link fs-5" onClick={handlePrevPagination}>
                                Previous
                            </button>
                        </li>
                        <li className="page-item me-2">
                            <button className="page-link fs-5">
                                {currentPage}
                            </button>
                        </li>
                        <li className="page-item me-2">
                            <button className="page-link fs-5" onClick={handleNextPagination}>
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    );
};
export default Home;