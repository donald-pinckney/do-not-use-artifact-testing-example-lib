exports.stupidParseInt = function(str, rad) {
    var realRad = rad + 0; // force rad to be a number
    return parseInt(str, realRad)
}