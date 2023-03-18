const ingredientsContentContainer = document.getElementById('ingredients-content');
const mealDetailsContainer = document.getElementById('meal-details');

async function gatIngredientsData() {
  let response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  );
  let data = await response.json();
  displayIngredientsData(data);
}

function displayIngredientsData(data) {
  let arrayOfData = data.meals.slice(0, 20);
  let finalData = arrayOfData
    .map((the_data) => {
      return `
      <div class='${the_data.strIngredient == 'Unknown' ? `hide` : ''} div'  data-text='${the_data.strIngredient}'>
        <span data-text='${the_data.strIngredient}'>
          <i data-text='${the_data.strIngredient}' class="fa-solid fa-drumstick-bite"></i>
        </span>
        <p data-text='${the_data.strIngredient}'>${the_data.strIngredient}</p>
        <p data-text='${the_data.strIngredient}'>${the_data.strDescription.split(' ').slice(0,20).join(' ')}</p>
      </div>
    `;
    })
    .join('');
    ingredientsContentContainer.innerHTML = finalData;
  let allDivs = ingredientsContentContainer.querySelectorAll('.div');
  allDivs.forEach((div) => {
    div.addEventListener('click', (e) => {
      let the_text = e.target.getAttribute('data-text');
      getIngredientsDetails(the_text);
    });
  });
}


async function getIngredientsDetails(ingredientsName) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsName}`,
  );
  let data = await response.json();
  displayIngredientsDetails(data);
}

function handelSwitchBetweenSections() {
  document.querySelector('.first-section').style.display = "none";
  document.querySelector('.second-section').style.display = "block";
}

function displayIngredientsDetails(data) {
  handelSwitchBetweenSections();
  let arrayOfData = data.meals;
  console.log(arrayOfData);
  let finalData = arrayOfData.map((the_data) => {
    return `
      <div onclick='getEveryDishDetails(${the_data.idMeal})'>
        <div class="image" data-text="${the_data.strMeal}">
          <img src="${the_data.strMealThumb}" alt='${the_data.strMeal}'>
        </div>
      </div>
    `
  }).join('')

  document.getElementById('ingredients-details-content').innerHTML = `
    <span class="close-btn" onclick='handelCloseSectionF()'>
      <i class="fa-solid fa-xmark"></i>
    </span>
    ${finalData}
  `
}

function handelCloseSectionF() {
  document.querySelector('.first-section').style.display = "block";
  document.querySelector('.second-section').style.display = "none";
}

async function getEveryDishDetails(id) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  let data = await response.json();
  displayMealDetails(data);
}

function handelBetweenSections() {
  document.querySelector('.second-section').style.display = 'none';
  document.querySelector('.third-section').style.display = 'block';
}

function displayMealDetails(data) {
  handelBetweenSections();
  let the_data = data.meals[0];
  mealDetailsContainer.innerHTML = `
    <span class="close-btn" onclick='handelCloseSectionSec_()'>
      <i class="fa-solid fa-xmark"></i>
    </span>
    <div class="container">
      <div class="meal-details-content">
        <div class="meal-image">
          <img src="${the_data.strMealThumb}" alt="${the_data.strMeal}">
          <p>${the_data.strMeal}</p>
        </div>
        <div class="meal-infos">
          <h2>Instructions</h2>
          <p>${the_data.strInstructions}.</p>
          <ul>
            <li><span>Area : </span>${the_data.strArea}</li>
            <li><span>Category : </span>${the_data.strCategory}</li>
            <li class="recipes"><span>Recipes :</span> 
              <ul>
                ${
                  the_data.strIngredient1 != '' &&
                  the_data.strIngredient1 != ' '
                    ? `<li>${the_data.strMeasure1} ${the_data.strIngredient1}</li>`
                    : ''
                }
                ${
                  the_data.strIngredient2 != '' &&
                  the_data.strIngredient2 != ' '
                    ? `<li>${the_data.strMeasure2} ${the_data.strIngredient2}</li>`
                    : ''
                }
                ${
                  the_data.strIngredient3 != '' ||
                  the_data.strIngredient3 != ' '
                    ? `<li>${the_data.strMeasure3} ${the_data.strIngredient3}</li>`
                    : ''
                }
                ${
                  the_data.strIngredient4 != '' &&
                  the_data.strIngredient4 != ' '
                    ? `<li>${the_data.strMeasure4} ${the_data.strIngredient4}</li>`
                    : ''
                }
                ${
                  the_data.strIngredient5 != '' &&
                  the_data.strIngredient5 != ' '
                    ? `<li>${the_data.strMeasure5} ${the_data.strIngredient5}</li>`
                    : ''
                }
                ${
                  the_data.strIngredient6 != '' &&
                  the_data.strIngredient6 != ' '
                    ? `<li>${the_data.strMeasure6} ${the_data.strIngredient6}</li>`
                    : ''
                }
                ${
                  the_data.strIngredient7 != '' &&
                  the_data.strIngredient7 != ' '
                    ? `<li>${the_data.strMeasure7} ${the_data.strIngredient7}</li>`
                    : ''
                }
                ${
                  the_data.strIngredient8 != '' &&
                  the_data.strIngredient8 != ' '
                    ? `<li>${the_data.strMeasure8} ${the_data.strIngredient9}</li>`
                    : ''
                }
                ${
                  the_data.strIngredient9 != '' &&
                  the_data.strIngredient9 != ' '
                    ? `<li>${the_data.strMeasure9} ${the_data.strIngredient9}</li>`
                    : ''
                }
                ${
                  the_data.strIngredient10 != '' &&
                  the_data.strIngredient10 != ' '
                    ? `<li>${the_data.strMeasure10} ${the_data.strIngredient10}</li>`
                    : ``
                }
                ${
                  the_data.strIngredient11 != '' &&
                  the_data.strIngredient11 != ' '
                    ? `<li>${the_data.strMeasure11} ${the_data.strIngredient11}</li>`
                    : ``
                }
                ${
                  the_data.strIngredient12 != '' &&
                  the_data.strIngredient12 != ' '
                    ? `<li>${the_data.strMeasure12} ${the_data.strIngredient12}</li>`
                    : ``
                }
                ${
                  the_data.strIngredient13 != '' &&
                  the_data.strIngredient13 != ' '
                    ? `<li>${the_data.strMeasure13} ${the_data.strIngredient13}</li>`
                    : ``
                }
                ${
                  the_data.strIngredient14 != '' &&
                  the_data.strIngredient14 != ' '
                    ? `<li>${the_data.strMeasure14} ${the_data.strIngredient14}</li>`
                    : ``
                }
                ${
                  the_data.strIngredient15 != '' &&
                  the_data.strIngredient15 != ' '
                    ? `<li>${the_data.strMeasure15} ${the_data.strIngredient15}</li>`
                    : ``
                }
                ${
                  the_data.strIngredient16 != '' &&
                  the_data.strIngredient16 != ' '
                    ? `<li>${the_data.strMeasure16} ${the_data.strIngredient16}</li>`
                    : ``
                }
              </ul>
            </li>
            <li class="tags"><span>Tags : </span>
              <ul>
                ${
                  the_data.strTags != null ? `<li>${the_data.strTags}</li>` : ''
                }
              </ul>
              
            </li>
          </ul>
          <div class="links">
            <a href="${
              the_data.strSource
            }" target="_blank" class="source-link">Source</a>
            <a href="${
              the_data.strYoutube
            }" target="_blank" class="youtube-link">Youtube</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function handelCloseSectionSec_() {
  document.querySelector('.third-section').style.display = "none";
  document.querySelector('.second-section').style.display = "block";
}

window.addEventListener('load', function () {
  gatIngredientsData();
});