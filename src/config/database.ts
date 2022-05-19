import mongoose, {ConnectOptions} from 'mongoose';
import key from './key'

type ConnectionOptions = {
  useNewUrlParser: boolean,
  useUnifiedTopology: boolean
}

const dbOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(key.db_URI, dbOptions as ConnectOptions)

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
}
);

connection.on('error', (err) => {
    console.log('MongoDB database connection error:', err);
    process.exit();
}
);
