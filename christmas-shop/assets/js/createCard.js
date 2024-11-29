export const createCard = (obj) => {
	const category = obj.category.toLocaleLowerCase().split(' ').join('-');
	const card = document.createElement('li');
	card.className = 'gifts_item';
	card.innerHTML = `
    <div class='gifts_image'><img src='../assets/images/gift-${category}.png')' alt='${obj.name}'> </div>
    <div class='gifts_description'>
      <h3 class='gifts_name'>${obj.name}</h3>
      <h4 class='gifts_category caption__top ${category}'>${obj.category}</h4>
    </div>
  `;
	return card;
};

export const createModal = (obj) => {
	const category = obj.category.toLocaleLowerCase().split(' ').join('-');
	const card = document.createElement('div');
	const image = document.createElement('div');
	const content = document.createElement('div');
	const powerList = document.createElement('ul');
	card.className = 'modal';
	image.className = 'modal_image';
	content.className = 'modal_content';
	powerList.className = 'modal_power';
	image.style.backgroundImage = `url('../assets/images/gift-${category}.png')`;
	content.innerHTML = `<div class='modal_title'>
    <h3 class='gifts_name'>${obj.name}</h3>
      <h4 class='gifts_category caption__top ${category}'>${obj.category}</h4>
      <p class='modal_description'>${obj.description}</p></div>`;
	const superPowers = document.createElement('div');
	superPowers.className = 'modal_powers';
	superPowers.innerHTML = `<h4>Adds superpowers to:</h4>`;
	const powersName = Object.keys(obj.superpowers);
	const powersValue = Object.values(obj.superpowers);
	for (let i = 0; i < powersName.length; i++) {
		const powerItem = document.createElement('li');
		powerItem.className = 'power-list_item';
		powerItem.innerHTML = `<span class='power_name'>${powersName[i]}</span><span class='power_value'>${powersValue[i]}</span>`;
		const rating = document.createElement('div');
		rating.className = 'power-list_rating';
		const activeItem = powersValue[i] / 100;
		for (let j = 0; j < 5; j++) {
			const ratingItem = document.createElement('div');
			ratingItem.className = 'rating_item';
			if (j >= activeItem) ratingItem.classList.add('rating_item__opacity');
			ratingItem.innerHTML = `<img src='../assets/images/icons/snowflake.svg' alt='*'>`;
			rating.append(ratingItem);
		}
		powerItem.append(rating);
		powerList.append(powerItem);
		superPowers.append(powerList);
	}
	content.append(superPowers);

	const closeModal = document.createElement('div');
	closeModal.className = 'modal_close';
	closeModal.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
	card.append(image, content, closeModal);
	return card;
};
