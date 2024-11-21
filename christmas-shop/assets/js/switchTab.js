const switchTabs = () => {
  const tabButtons = document.querySelectorAll('.gifts_tab');
  tabButtons.forEach((item) => {
    item.addEventListener('click', () => {
      tabButtons.forEach((elem) => {
        elem.classList.remove('gifts_tab__active');
      })
      item.classList.add('gifts_tab__active');
    })
  })
}
switchTabs();

const filterGifts = () => {
  
}