const dataContainer = document.getElementById('category-content');
const mealDetailsContainer = document.getElementById('meal-details');

async function getCategoryData() {
  let response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );
  let data = await response.json();
  displayData(data);
}

function displayData(data) {
  let arrayOfData = data.categories;
  let finalData = arrayOfData
    .map((the_data) => {
      return `
      <div class="div" data-info="${the_data.strCategory}">
        <div class="image" data-text="${the_data.strCategory}" data-info="${
        the_data.strCategory
      }">
          <img src="${the_data.strCategoryThumb}" alt='${
        the_data.strCategory
      } data-info="${the_data.strCategory}'>
          <p data-info="${
            the_data.strCategory
          }">${the_data.strCategoryDescription
        .split(' ')
        .slice(0, 15)
        .join(' ')}<p/>
        </div>
      </div>
    `;
    })
    .join('');

  dataContainer.innerHTML = finalData;
  let allDivs = dataContainer.querySelectorAll('.div');
  allDivs.forEach((div) => {
    div.addEventListener('click', (e) => {
      let the_text = e.target.getAttribute('data-info');
      getCategoryDetails(the_text);
    });
  });
}

function handelSwitchBetweenSections() {
  document.querySelector('.main-page').style.display = 'none';
  document.querySelector('.sec-page').style.display = 'block';
}

async function getCategoryDetails(catName) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`,
  );
  let data = await response.json();

  displayCategoryDetails(data);
}

function displayCategoryDetails(data) {
  handelSwitchBetweenSections();
  let arrayOfData = data.meals;
  let finalData = arrayOfData
    .map((the_data) => {
      return `
      <div onclick='getEveryDishetails(${the_data.idMeal})'>
        <div class="image" data-text="${the_data.strMeal}">
          <img src="${the_data.strMealThumb}" alt='${the_data.strMeal}'>
        </div>
      </div>
    `;
    })
    .join('');

  document.getElementById('cat-details-content').innerHTML = `
    <span class="close-btn" onclick='handelCloseSectionF()'>
      <i class="fa-solid fa-xmark"></i>
    </span>
    ${finalData}
  `;
}

function handelCloseSectionF() {
  document.querySelector('.main-page').style.display = 'block';
  document.querySelector('.sec-page').style.display = 'none';
}

async function getEveryDishetails(id) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  let data = await response.json();
  displayMealDetails(data);
}

function handelBetweenSections() {
  document.querySelector('.sec-page').style.display = 'none';
  document.querySelector('.third-page').style.display = 'block';
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
  document.querySelector('.sec-page').style.display = 'block';
  document.querySelector('.third-page').style.display = 'none';
}

window.addEventListener('load', function () {
  getCategoryData();
});
