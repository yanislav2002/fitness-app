import oracledb from "oracledb"; 


oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.initOracleClient();

let connection;

connection = await oracledb.getConnection({
    user : 'yanislav',
    password : '1234',
    connectString: 'localhost/xe',
    externalAuth: false,
})

export async function getData(query) {
    try{
        const data = await connection.execute(query);
        
        return data.rows;
    } catch (error) {
        console.log(error);
    }
} 

export async function postData(query, values) {
    try{
        const data = await connection.execute(query, values);
        await connection.commit();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteData(query) {
    try {
        const data = await connection.execute(query);
        await connection.commit();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateData(query, values) {
    try {
        const data = await connection.execute(query, values);
        await connection.commit();
        return data;
    } catch (error) {
        console.log(error);
    }
}