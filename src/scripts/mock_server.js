var urls = [
    'https://example.com/scripts',
    'https://example.com/scripts/url_validator.js'
];


export const performUrlLookUp = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let request = new XMLHttpRequest();
            request.open("GET", url, true);
            const urlExists = request.readyState !== 4;
            if (urlExists) {
                resolve({urlExists: urlExists, urlType: isFile(url) ? "Folder" : "File"});
            }
            resolve({urlExists: urlExists, urlType: "unknown"})
        }, 750);
    });
};

const isFile = (url) => {
    return url.split("/").pop().indexOf(".") > -1;
};



