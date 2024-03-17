//codice preso da StackOverflow https://stackoverflow.com/questions/62655858/clear-site-data-equivalent-in-javascript


var theCookies = document.cookie.split(';');
for (var i = 1 ; i <= theCookies.length; i++) {
    var acookie = theCookies[i-1];
    var cookieArr = acookie.split('=');
    console.log(cookieArr[0]);
    document.cookie = cookieArr[0]+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Get cache storage and clear cache storage
window.caches.keys().then(function(names) {
    for (let name of names)
        window.caches.delete(name);
});

// Get indexed db and delete indexed db
const dbs = await window.indexedDB.databases()
dbs.forEach(db => { window.indexedDB.deleteDatabase(db.name) })

// clear localStorage
window.localStorage.clear();

// clear sessionStorage
window.sessionStorage.clear();