const ClickOutside = (event, className) => {
    let clickedInside = false
    Object.entries(event.path).forEach(entry => {
      if(entry[1].className === className)
        clickedInside = true
    })
    return clickedInside
}

export default ClickOutside