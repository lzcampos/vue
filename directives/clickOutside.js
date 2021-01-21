/* Directive made for helping you to know if a click was made inside a
element or not. To use it, call it passing your click event and a className string.
*/
const ClickOutside = (event, className) => {
    let clickedInside = false
    Object.entries(event.path).forEach(entry => {
      if(entry[1].className === className)
        clickedInside = true
    })
    return clickedInside
}

export default ClickOutside