function isIsomorphic(s: string, t: string): boolean {
    
    let mapS = new Map<string, string>();
    let mapT = new Map<string, string>();
    
    for (let i = 0; i < s.length; i++) {
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