exports.stupidParseInt = function(str) {
    let n = parseInt(str);
    return { num: n, ok: !isNaN(n) }; 
}