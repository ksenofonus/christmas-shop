export const createCard = (obj) => {
	const category = obj.category.toLocaleLowerCase().split(' ').join('-');
	const card = document.createElement('div');
	card.className = 'modal';
	card.innerHTML = `
    <div class='modal_image'><img src='../assets/images/gift-${category}.png')' alt=''> </div>
    <div class='modal_content'>
    <div class='modal_title'>
    <h3 class='modal_name gifts_name'>${obj.name}</h3>
      <h4 class='modal_category gifts_category caption__top ${category}'>${obj.category}</h4>
      <p class='modal_description'>${obj.description}</p></div>
    <div class='modal_powers'><ul>
    <li class="modal_powers-item">
    <span></span>
    <span></span>
    <div></div>
    </li></ul></div>
    </div>
  `;
	card.setAttribute('data-category', `${category}`);
	return card;
};
