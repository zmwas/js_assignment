
export const performUrlLookUp = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let request = new XMLHttpRequest();
            request.open("GET", url, true);
            const urlExists = request.readyState !== 4;
            if (urlExists) {
                resolve({urlExists: urlExists, urlType: isFile(url) ? "File" : "Folder"});
            }
            resolve({urlExists: urlExists, urlType: "unknown"})
        }, 750);
    });
};

const isFile = (url) => {
    return url.split("/").pop().indexOf(".") > -1;
};



