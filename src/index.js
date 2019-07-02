import { Dropbox } from 'dropbox';
import fetch from 'node-fetch';

const dbx = new Dropbox({
    accessToken: 'bTyO7qBXsHAAAAAAAAAASkK6LzviDe9lRdsVEXcHZwLtt1iEtZANfdY2n8eDyaM4',
    fetch
});

const fileListElem = document.querySelector('.js-file-list');

const state = {
    files: []
}

const init = () => {
    dbx.filesListFolder({
        path: ''//this specify the root path
    }).then(res => {
        updatedFiles(res.entries)
    })    
}

const updatedFiles = files => {
    state.files = [...state.files, ...files]
    renderFiles()
}

const renderFiles = () => {
    fileListElem.innerHTML = state.files.sort((a,b) => {
        //sort alphabetically, folders fisrt
        if((a['.tag'] === 'folder' || b['.tag'] === 'folder')
            && !(a['.tag'] === b['.tag'])){
                return a['.tag'] === 'folder' ? -1 : 1
        } else {
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        }
    }).map(file => {
        const type = file['.tag']
        let thumbnail
        if(type === 'file'){
            thumbnail = file.thumbnail ?  :
        }else {

        }
        return `
            <li class="dbx-list-item ${type}">${file.name}</li>
        `
    }).join('')
}

init();
