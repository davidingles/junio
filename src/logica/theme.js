export function changeTheme() {
  const htmlElement = document.querySelector('html')
  if (htmlElement.style.colorScheme === 'dark') {
    htmlElement.style.colorScheme = 'light'
  } else {
    htmlElement.style.colorScheme = 'dark'
  }
}