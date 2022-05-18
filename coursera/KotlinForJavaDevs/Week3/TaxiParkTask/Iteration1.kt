package taxipark

/**
 * Filter the drivers that had no record in the trips history.
 * */
fun TaxiPark.findFakeDrivers(): Set<Driver> =
    this.allDrivers.filter { driver -> driver !in this.trips.map { it.driver }.toSet() }.toSet()

/**
 * If the min is 0, return ALL the passengers list directly.
 * If not, get the passengers that had a trip before.
 * Filter the ones that had more than the min amount trips.
 * */
fun TaxiPark.findFaithfulPassengers(minTrips: Int): Set<Passenger> {
    if (minTrips == 0) return this.allPassengers
    val all = this.passengersDatabase()
    return all.filter { all.countPTrips(it) >= minTrips }.toSet()
}

/**
 * Some useful extensions for TaxiPark class.
 * */
fun TaxiPark.passengersDatabase() = this.trips.flatMap { it.passengers }

infix fun List<Passenger>.countPTrips(p: Passenger) = this.count { it == p }

fun TaxiPark.getDTrips(d: Driver) = this.trips.filter { it.driver == d }

/**
 * Get all the trips.
 * Get all the passengers from the trips.
 * Filter the ones that had more than 1 trip.
 * */
fun TaxiPark.findFrequentPassengers(driver: Driver): Set<Passenger> {
    val trips = this.getDTrips(driver)
    val allPass = trips.flatMap { it.passengers }
    return allPass.filter { p -> allPass.count { it == p } > 1 }.toSet()
}

/**
 * Find all the passengers of all time.
 * Map the passengers to 0.
 * Iterate through the trips history, for the ones that have discount, increase the value on the map.
 * For the trips without discount, decrease the value from the key in the map of passengers.
 * Find the passenger that have more than 0 balance at the end.
 * */
fun TaxiPark.findSmartPassengers(): Set<Passenger> {
    val pass = this.allPassengers
    val map = pass.associateWith { 0 }.toMutableMap()
    for (trip in this.trips) {
        for (p in trip.passengers) {
            if (trip.discount != null) map[p] = map[p]!! + 1
            else map[p] = map[p]!! - 1
        }
    }
    return map.filter { it.value > 0 }.map { it.key }.toSet()
}

/**
 * Group all the trips by their duration / 10.
 * Find the group with the most members.
 * Find the min and max of the range.
 */
fun TaxiPark.findTheMostFrequentTripDurationPeriod(): IntRange? {
    val groups = this.trips.groupBy { it.duration / 10 }
    val max = groups.maxBy { it.value.size }
    var minRange = max?.key ?: return null
    minRange *= 10
    return IntRange(minRange, minRange + 9)
}

/**
 * Calculate all the income.
 * Find the x number of 20% drivers.
 * Map the drivers to their total income from all of their trips.
 * Sort the list and the last x ones which are the top made.
 * Calculate the top made income.
 * Check if it is equal or more than 80% of the total income.
 */
fun TaxiPark.checkParetoPrinciple(): Boolean {
    if (this.trips.isEmpty()) return false
    val totalIncome = this.trips.map { it.cost }.sum()
    val x = (this.allDrivers.size * 0.2).toInt()
    val list = this.allDrivers.map {
        this.getDTrips(it).sumByDouble { t -> t.cost }
    }.sorted()
    val topMade = list.takeLast(x).sum()
    return (topMade >= (totalIncome * 0.8))
}