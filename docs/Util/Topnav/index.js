window.onload = async function() {
    var Elements = document.getElementsByClassName("topnav")[0].children

    var ElementsArray = []

    var arrayLength = Elements.length;
    for (var i = 0; i < arrayLength; i++) {
        if (i != 0) {
            ElementsArray[i] = Elements[i]
        }
    }

    var SwappedElements = ElementsArray.reverse()

    console.log(SwappedElements)

    var arrayLength = SwappedElements.length;
    for (var i = 0; i < arrayLength; i++) {
        if (i != 7) {
            SwappedElements[i].style.float = "right"
        }
    }
}