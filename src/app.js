const description = document.getElementsByClassName("displayDescription");

// const maxLength = 50;
const maxWords = 15;

for (let des of description) {
    const words = des.textContent.split(" ")

    if (words.length > maxWords) {
        des.textContent = words.splice(0, maxWords).join(" ") + " ...";
    }
}
