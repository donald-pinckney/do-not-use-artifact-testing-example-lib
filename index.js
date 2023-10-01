exports.stupidParseInt = function(str, rad) {
    var realRad = rad(); // force rad to be a function returning a number
    return parseInt(str, realRad)
}