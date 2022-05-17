package mastermind

data class Evaluation(val rightPosition: Int, val wrongPosition: Int)

fun evaluateGuess(secret: String, guess: String): Evaluation {
    var (right, wrong) = Pair(0, 0)
    val map = mutableMapOf<Char, Int>()
    for (i in secret.indices)
        if (secret[i] == guess[i]) right++
        else {
            if (guess[i] !in map) map += guess[i] to secret.count(guess, guess[i])
            if (map[guess[i]]!! > 0) {
                wrong++
                map[guess[i]] = map[guess[i]]!! - 1
            }
        }
    return Evaluation(right, wrong)
}

fun String.count(other: String, ch: Char): Int {
    var count = 0
    for (i in this.indices) if (this[i] == ch && this[i] != other[i]) count++
    return count
}