import 'dotenv/config';
import app from './server/app.mjs';

app.start().catch( console.error.bind('error starting app:') );
