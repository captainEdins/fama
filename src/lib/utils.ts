import * as mongoose from 'mongoose';
interface ConnectionStatus {
    isConnected: mongoose.ConnectionStates; // Use the correct type from mongoose
}

const connection: ConnectionStatus = { isConnected: 0 };

export async function connectToDb() {
    try {
        if(connection.isConnected === mongoose.ConnectionStates.connected) {
            console.log("Using existing connection");
            return;
        }
        
        const db = await mongoose.connect(process.env.MONGO as string);
        connection.isConnected = db.connections[0].readyState;
    }catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}