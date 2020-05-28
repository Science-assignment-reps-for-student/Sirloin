export default {
    type: "mysql",
    host: "scarfs.cm63idi6gyr1.ap-northeast-2.rds.amazonaws.com",
    username: "root",
    password: process.env.SCARFS_PASSWORD,
    database: "scarfs_production",
    synchronize: true,
    logging: false,
    entities: [
       "dist\\app\\models\\*.*"
    ]
 }