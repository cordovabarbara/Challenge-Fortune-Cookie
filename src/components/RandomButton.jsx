import getRandomArray from "../utils/getRandomArray"
import phrase from "../utils/phrases.json"

const RandomButton = ({ setRandomPhrases, setimgRandom }) => {
    const changePhrase = () => {
        setRandomPhrases(getRandomArray(phrase))
        setimgRandom(getRandomArray([1, 2, 3, 4]))
    }
    return (
    <button onClick={changePhrase}>Probar mi suerte</button>
    )
}

export default RandomButton