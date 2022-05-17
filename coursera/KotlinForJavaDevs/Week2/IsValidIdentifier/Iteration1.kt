fun isValidIdentifier(s: String): Boolean {
    return if (s.isEmpty()) false
    else if (!s[0].isLetter() && s[0] != '_') false
    else {
        for (ch in s) {
            if (ch.isDigit() || ch.isLetter() || ch == '_') continue
            else return false
        }
        true
    }
}

fun main() {
    println(isValidIdentifier("name"))   // true
    println(isValidIdentifier("_name"))  // true
    println(isValidIdentifier("_12"))    // true
    println(isValidIdentifier(""))       // false
    println(isValidIdentifier("012"))    // false
    println(isValidIdentifier("no$"))    // false
}