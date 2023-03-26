const getRandomArray = (date) => {
    const randomIndex = Math.floor(Math.random() * date.length)

    return date[randomIndex]
}

export default getRandomArray