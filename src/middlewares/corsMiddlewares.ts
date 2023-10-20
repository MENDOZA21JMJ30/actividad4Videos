import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:9000',
    optionsSuccesStatus:200
}

module.exports = cors(corsOptions);