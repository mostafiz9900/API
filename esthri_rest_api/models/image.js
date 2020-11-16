

module.exports=(sequelize, DataType)=>{
    const image=sequelize.define("core_images",{
        img_id:{
            type:DataType.STRING,    
            allowNull:false,
            field:'img_id',
            // autoIncrement: true,
            primaryKey: true
        },
        img_type:{
            type: DataType.STRING,
            field:'img_type',
            allowNull:false
        }
        
    },{
        freezeTableName: true,
        createdAt:false,
        updatedAt:false,
        // id:false
    });

    image.associate=models=>{
        image.belongsTo(models.mk_shops,{
            foreignKey:'img_parent_id'
        });
    }
return image;
}

// core_images table name