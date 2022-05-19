val foo: Int
    get() = (1..1000).random()

fun main() {
    println(foo)
    println(foo)
    println(foo)
}