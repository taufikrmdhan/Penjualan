// const db = require('../config/db');
const db = require('../config/db');

const barangModel = {
    insert: (nama_barang, harga_beli, harga_jual, stok, foto_barang) => new Promise((resolve, reject) => {
        db.query(`INSERT INTO barang (nama_barang, harga_beli, harga_jual, stok, foto_barang) VALUES ('${nama_barang}', ${harga_beli}, ${harga_jual}, ${stok}, '${foto_barang}')`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    }),
    list: (limit, offset) => new Promise((resolve, reject) => {
        db.query(`SELECT * FROM barang LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    }),
    listBarangById: (id_barang) => new Promise((resolve, reject) => {
        db.query(`SELECT * FROM barang WHERE id_barang = ${id_barang}`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    }),
    update: (id_barang, nama_barang, harga_beli, harga_jual, stok, foto_barang) => new Promise((resolve, reject) => {
        db.query(`UPDATE barang SET nama_barang = '${nama_barang}', harga_beli = ${harga_beli}, harga_jual = ${harga_jual}, stok = ${stok}, foto_barang = '${foto_barang}' WHERE id_barang = ${id_barang}`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    }),
    destroy: (id_barang) => new Promise((resolve, reject) => {
        db.query(`DELETE FROM barang WHERE id_barang = ${id_barang}`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
};
module.exports = barangModel;

// const userModel = {
//   insert: (nama, email, password, phone) => new Promise((resolve, reject) => {
//     db.query(`INSERT INTO users (nama, email, password, phone) VALUES ('${nama}', '${email}', '${password}', '${phone}')`, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   }),
//   register: ({
//     nama, email, password, phone, level
//   }) => new Promise((resolve, reject) => {
//     db.query(`INSERT INTO users (nama, email, password, phone, level) VALUES ('${nama}', '${email}', '${password}', '${phone}', ${level})`, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   }),
//   checkUsername: (email) => new Promise((resolve, reject) => {
//     db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   }),
//   list: (limit, offset) => new Promise((resolve, reject) => {
//     db.query(`SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   }),
//   listUserById: (id_user) => new Promise((resolve, reject) => {
//     db.query(`SELECT * FROM users WHERE id_user = ${id_user}`, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   }),
//   destroy: (id_user) => new Promise((resolve, reject) => {
//     db.query(`DELETE FROM users WHERE id_user = ${id_user}`, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   }),
//   update: (id_user, image) => new Promise((resolve, reject) => {
//     db.query(`UPDATE users SET image = '${image}' WHERE id_user = ${id_user}`, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   }),
//   updateByEmail: (email, password) => new Promise((resolve, reject) => {
//     db.query(`UPDATE users SET password = '${password}' WHERE email = '${email}'`, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   }),
// };
// module.exports = userModel;
