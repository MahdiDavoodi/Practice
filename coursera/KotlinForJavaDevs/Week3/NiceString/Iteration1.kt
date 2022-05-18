package nicestring

fun String.isNice(): Boolean {
    return Triple(
        !this.contains("b[uae]".toRegex()),
        this.length - this.replace("[aeiou]".toRegex(), "").length > 2,
        this.contains("""([a-z])\1""".toRegex())
    ).toList().count { it } > 1
}