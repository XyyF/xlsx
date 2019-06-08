import Xlsx from 'xlsx'

export default {
    readWorkbookFromLocalFile,
    readWorkbookFromRemoteFile
}

// 读取本地excel文件
export function readWorkbookFromLocalFile(file, callback) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const data = e.target.result;
        const workbook = Xlsx.read(data, {type: 'binary'});
        if(callback) callback(workbook);
    };
    reader.readAsBinaryString(file);
}

// 从网络上读取某个excel文件，url必须同域，否则报错
export function readWorkbookFromRemoteFile(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function() {
        if(xhr.status === 200) {
            const data = new Uint8Array(xhr.response)
            const workbook = Xlsx.read(data, {type: 'array'});
            if(callback) callback(workbook);
        }
    };
    xhr.send();
}