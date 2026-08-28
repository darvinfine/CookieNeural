let checkbox = document.getElementById('checkTheme')
let background = document.getElementById('backgroundTheme')

checkbox.onchange = function() {
    if (this.checked) {
        theme.setAttribute('href', 'interface/dark.css')
    } else {
        theme.setAttribute('href', 'interface/light.css')
    }
}