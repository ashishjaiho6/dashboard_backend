import mongoose, { ConnectionOptions } from 'mongoose';
import dotenv from 'dotenv';

mongoose.Promise = global.Promise;
dotenv.config();

const { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } = process.env;

const connectToDatabase = async (): Promise<void> => {
  const options: ConnectionOptions = { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true };

  // await mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, options);
  await mongoose.connect(`mongodb+srv://devashish7991:ashish303@@cluster0.mgnydfh.mongodb.net/test`, options);
  // await mongoose.connect(`mongodb://ashish:ashish303%40@localhost:27017/?authMechanism=DEFAULT&authSource=dashboard`, options);
};

export { connectToDatabase };
