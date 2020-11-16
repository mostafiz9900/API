
module.exports=(sequelize, DataTypes)=>{
    const Student =sequelize.define("Student",{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }, dep:{
            type:DataTypes.STRING,
            allowNull:false
        }, age:{
            type:DataTypes.STRING,
            allowNull:false
        },
      
    },     {
           freezeTableName: true,
        //    createAt:false,
        //    updateAt:false
        }
    ); 

    Student.associate=models=>{
        Student.hasOne(models.Profile,{
            onDelete:"cascade",
            foreignKey: 'stud_id'

        })
    }
    return Student;
}