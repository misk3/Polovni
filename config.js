module.exports = {
    nodeEnv: process.env.NODE_ENV,
    apiPort: process.env.NODE_ENV,
    jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
    dbName: process.env.NODE_ENV === 'development' ? process.env.DEV_DB_NAME : process.env.PROD_DB_NAME,
    dbAdminUsername: process.env.NODE_ENV === 'development' ? process.env.DEV_DB_ADMIN_USERNAME : process.env.DB_ADMIN_USERNAME,
    dbAdminPassword: process.env.NODE_ENV === 'development' ? process.env.DEV_DB_ADMIN_PASSWORD : process.env.DB_ADMIN_PASSWORD,
    dbPort: process.env.NODE_ENV === 'development' ? process.env.DEV_DB_PORT : process.env.PROD_DB_PORT,
    dbHost: process.env.NODE_ENV === 'development' ? process.env.DEV_DB_HOST : process.env.PROD_DB_HOST
}
