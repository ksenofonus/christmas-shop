
export const createCard = ([ data ]) => {
  const card = document.createElement('li');
  card.classList.add = 'gifts_item';
  card.innerHTML = `
    <div class='gifts_image'> </div>
    <div class='gifts_description'>
      <h3 class='gifts_name'>Console.log Guru</h3>
      <h4 class='gifts_function caption__top'>For work</h4>
    </div>
  `;

  
}

