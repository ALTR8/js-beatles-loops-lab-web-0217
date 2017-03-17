function theBeatlesPlay(musiciansArray, instrumentsArray) {
	const otherArray = []
	for (let i=0, s = musiciansArray.length; i < s; i++) {
		otherArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`) 
	}
	return otherArray
}

function johnLennonFacts(array) {
	const newArray = []
	let i = 0
	while (i < array.length) {
		newArray.push(array[i] + "!!!")
		i += 1
	}
	return newArray
}

function iLoveTheBeatles(num) {
	const array = []
	do { array.push("I love the Beatles!"), num++
	}
	while (num < 15) {

	}
	return array
}

