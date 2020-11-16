
module.exports=(sequelize, DataType)=>{
    const shop=sequelize.define("mk_shops",{
        name:{
            type:DataType.STRING,
            allowNull: false,
            field:'name'
        }
    },{
        freezeTableName: true,
        createdAt:false,
        updatedAt:false,
    });
shop.associate=models=>{
    shop.hasMany(models.core_images,{
        foreignKey:'img_parent_id'
    });
}

return shop;
}

// mk_shops