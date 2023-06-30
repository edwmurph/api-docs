import app from './lib/app.mjs';

app.start().catch( console.error.bind('error starting app:') );
