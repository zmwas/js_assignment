var urls = [
    'https://example.com/scripts',
    'https://example.com/scripts/url_validator.js'
];


export const performUrlLookUp = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const urlExists = urls.includes(url);
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



