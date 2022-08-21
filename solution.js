function isIsomorphic(s, t) {
    var mapS = new Map();
    var mapT = new Map();
    for (var i = 0; i < s.length; i++) {
        // no mapping exists
        if (!mapS.has(s[i]) && !mapT.has(t[i])) {
            mapS.set(s[i], t[i]);
            mapT.set(t[i], s[i]);
        }
        // has different value for a key
        if (mapS.get(s[i]) != t[i] || mapT.get(t[i]) != s[i]) {
            return false;
        }
    }
    return true;
};

console.log('egg', 'add');
console.log(isIsomorphic('egg', 'add'));
console.log('foo', 'bar');
console.log(isIsomorphic('foo', 'bar'));
console.log('paper', 'title');
console.log(isIsomorphic('paper', 'title'));
console.log('ab', 'aa');
console.log(isIsomorphic('ab', 'aa'));
