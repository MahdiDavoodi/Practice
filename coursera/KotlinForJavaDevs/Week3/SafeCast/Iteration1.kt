fun main() {
    val s = "Something"
    println(s as? Int)    // null
    println(s as Int?)    // exception
}