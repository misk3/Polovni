//Its used for cacheing

const { createClient } = require('redis');
const client = createClient;

exports.connectToRedis = async () => {
    client.on('error', (error) => console.log('[REDIS] Client Error', error))

    await client.connect()
    .then(() => {
        console.log(`[REDIS] Successfully connected to redis server.`);
    })
    .catch((error) => {
        console.error(`[REDIS] Failed at connecting to redis server. `, error);
    });
}

exports.getByAKeyASync = async (key) => {
    client.get( key, async(error, value) => {
        console.log('random')
        if(error) console.log(`[REDIS] Failure durring data fetching with key: ${key}...`, error)
        if(value) {
            console.log(JSON.parse(value));
            return JSON.parse(value);
        }
    })
}

exports.setByKeyASync = async (key, value) => {
    await client.setEx(key, 1440, JSON.stringify(value))
    .catch((error) =>{
        console.log(`[REDIS] Error while setting to cache the values: ${value} with key: ${key}.`, error)
    })
}