module.exports = (sequelize, DataTypes) => {
    return sequelize.define('course', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNULL: false
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNULL: false
        },

        user_nickname: {
            type: DataTypes.STRING(40),
            allowNULL: false
        },

        category: {
            type: DataTypes.INTEGER,
            allowNULL: true
        },

        title: {
            type: DataTypes.STRING(200),
            allowNULL: false
        },

        contents: {
            type: DataTypes.STRING(1000),
            allowNULL: false
        },

        course_info1: {
            type: DataTypes.INTEGER,
            allowNULL: true
        },

        course_info_2: {
            type: DataTypes.INTEGER,
            allowNULL: true
        },

        course_info3: {
            type: DataTypes.INTEGER,
            allowNULL: true
        },

        grade_avg: {
            type: DataTypes.FLOAT,
            allowNULL: true,
            defaultValue: 0
        },

        dday: {
            type: DataTypes.DATEONLY,
            allowNULL: true
        },

        reviewnum: {
            type: DataTypes.INTEGER,
            allowNULL: true,
            defaultValue: 0
        },

        likenum: {
            type: DataTypes.INTEGER,
            allowNULL: true,
            defaultValue: 0
        },

        created_at: {
            type: DataTypes.DATE,
            allowNULL: false,
            defaultValue: sequelize.literal('now()')
        }

    }, 
        
        {
            timestamp: false,
            paranoid: true,
            underscored: true,
        }

    );
    
};
