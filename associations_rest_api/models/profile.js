
module.exports=(sequelize, DataTypes)=>{
    const Profile =sequelize.define("Profile",{
        name:{
            type:DataTypes.STRING,
            allowNull: false
        }
    },{freezeTableName: true }
    );
    Profile.associate= models=>{
        Profile.belongsTo(models.User,{
            foreignKey:{
                allowNull: false
            }
        },
      
        );
        Profile.belongsTo(models.Student,{
            foreignKey:{
                allowNull: false,
                // foreignKey: 'stud_id'
            }
        });
    };
    return Profile;
}