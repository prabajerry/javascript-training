
let parperties = {
    "name": "praba",
    "age": 24,
    "language": ["a", "b", "d"]
}
/*
1:read all the data
2:read only language
3:print all the language
4:check language d is prasent or not
5:if prasent-praba knows language d
6:else praba dose not know language d
*/
var flag = 0
var languageLength = parperties.language.length
for (var i = 0; i < languageLength; i++) {

    if (parperties.language[i] == "d") {
        flag = 1

    }
}
if (flag == 1) {
    console.log("praba knows language d");

} else {
    console.log("praba dose not know language d");
} 