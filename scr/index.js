import { server } from "./bootstrap/server.js";


( () =>
{ try{
    server. listen (4000, () => {
        console.info('Server is running')
    });
} catch (error) {
    console.error('Could not start thr server', error )
process.exit(1)
}

})()