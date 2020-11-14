const { json } = require('express');
const mysql=require('mysql');

const pool=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'eshtri_db',
    multipleStatements: true
});

let eshtridb = {};

eshtridb.core_about = () => {
return new Promise((resolve, reject) => {
    let sql="SELECT * FROM core_about";
    pool.query(sql, (err,results)=>{
        if(err){
            return reject(err);
        }
        return resolve(results);
        
    });
});
};
eshtridb.core_backend_config = () => {
    return new Promise((resolve, reject) => {
        let sql="SELECT * FROM core_backend_config";
        pool.query(sql, (err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
            
        });
    });
    };
    eshtridb.core_images = () => {
        return new Promise((resolve, reject) => {
            let sql="SELECT * FROM core_images";
            pool.query(sql, (err,results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
                
            });
        });
        };
        // core_modules
        eshtridb.core_modules = () => {
            return new Promise((resolve, reject) => {
                let sql="SELECT * FROM core_modules";
                pool.query(sql, (err,results)=>{
                    if(err){
                        return reject(err);
                    }                   
                    return resolve(results);
                    
                });
            });
            };
           
            // core_paypal_config
            eshtridb.core_paypal_config = () => {
                return new Promise((resolve, reject) => {
                    let sql="SELECT * FROM core_paypal_config";
                    pool.query(sql, (err,results)=>{
                        if(err){
                            return reject(err);
                        }
                        return resolve(results);
                        
                    });
                });
                };


              
            // mk_shops list
            eshtridb.mk_shops = (limit,offset) => {
                return new Promise((resolve, reject) => {
                  
                    // let sql="SELECT * ,default_photo.* FROM mk_shops AS shops INNER JOIN core_images as default_photo ON default_photo.img_parent_id=shops.id LIMIT "+ limit +" OFFSET " + offset;
                
                   let sql=`SELECT shops.id,shops.name, CONCAT( '[', GROUP_CONCAT( CONCAT( '{"img_id":"', b.img_id, '", "img_parent_id":"', b.img_parent_id, '", "img_type":"', b.img_type, '"}' ) ORDER BY b.img_type, b.img_id ), ']') AS default_photo FROM mk_shops AS shops LEFT JOIN core_images AS b ON shops.id = b.img_parent_id GROUP BY shops.id  LIMIT `+ limit +` OFFSET ` + offset;            
            
                   pool.query(sql, (err,results)=>{
                        if(err){
                            return reject(err);
                        }  
                        return resolve(results);  
                    });
                });
                };


module.exports = eshtridb;