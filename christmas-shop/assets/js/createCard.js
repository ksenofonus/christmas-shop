export const createCard = (obj) => {
	const category = obj.category.toLocaleLowerCase().split(' ').join('-');
	const card = document.createElement('li');
	card.className = 'gifts_item';
	card.innerHTML = `
    <div class='gifts_image'><img src='../assets/images/gift-${category}.png')' alt=''> </div>
    <div class='gifts_description'>
      <h3 class='gifts_name'>${obj.name}</h3>
      <h4 class='gifts_category caption__top ${category}'>${obj.category}</h4>
    </div>
  `;
  card.setAttribute('data-category', `${category}`);
	return card;
};
