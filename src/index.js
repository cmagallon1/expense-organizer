import { Dropbox } from 'dropbox';
import fetch from 'node-fetch';

const dbx = new Dropbox({
    accessToken: 'bTyO7qBXsHAAAAAAAAAASkK6LzviDe9lRdsVEXcHZwLtt1iEtZANfdY2n8eDyaM4',
    fetch
});

dbx.filesListFolder({
    path: ''//this specify the root path
}).then(res => console.log(res))