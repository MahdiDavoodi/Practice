/*
* An exercise from the Algorithmic Toolbox course on Coursera - Week 1.
* Question: Write a program that reads two numbers and returns their sum.
* */

fun main() {
    val input = readLine()!!.split("\\s".toRegex()).map { it.toInt() }
    println(input[0] + input[1])
}
