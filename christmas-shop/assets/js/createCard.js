export const createCard = (obj) => {
  const card = document.createElement('li');
  card.className = 'gifts_item';
  card.innerHTML = `
    <div class='gifts_image'> </div>
    <div class='gifts_description'>
      <h3 class='gifts_name'></h3>
      <h4 class='gifts_category caption__top'></h4>
    </div>
  `;
  const image = card.querySelector('.gifts_image');
  const name = card.querySelector('.gifts_name');
  const category = card.querySelector('.gifts_category');
  image.style.backgroundImage = `url('./assets/images/gift-${obj.category
		.toLocaleLowerCase()
		.split(' ')
		.join('-')}.png')`;
  name.textContent = `${obj.name}`;
  category.textContent = `${obj.category}`;
  category.classList.add(`${obj.category
		.toLocaleLowerCase()
		.split(' ')
		.join('-')}`)
  return card;
}

