const description = document.getElementsByClassName("displayDescription");

const maxLength = 50;
const maxWords = 10;

for (let des of description) {
    const words = des.textContent.split(" ")
    const characters = des.textContent.split("")

    const wordsLimit = words.splice(0, maxWords).join(" ");
    const charactersLimit = characters.join("").substring(0, maxLength)

    if (wordsLimit.length > maxLength) {
        des.textContent = charactersLimit + "...";
    } else if (wordsLimit.length > maxLength) {
        des.textContent = wordsLimit + "...";
    }
}
