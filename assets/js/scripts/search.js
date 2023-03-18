const theForm = document.getElementById('form');
const searchByName = document.getElementById('by-name');
const searchByFirstLetter = document.getElementById('by-firstLetter');
const mealDetailsContainer = document.getElementById('meal-details');
const thePage = document.getElementById('page');


async function getNameData(inputValue) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
  );
  let data = await response.json();
  displayNameData(data);
}

function displayNameData(data) {
  let arrayOfData = data.meals;
  if (arrayOfData == null) {
    return;
  } else {
    let finalData = arrayOfData
      .map((the_data) => {
        return `
        <div onclick='getMealDetails(${the_data.idMeal})'>
          <div class="image" data-text="${the_data.strMeal}">
            <img src="${the_data.strMealThumb}" alt='${the_data.strMeal}'>
          </div>
        </div>
      `;
      })
      .join('');
    document.getElementById('search-content').innerHTML = finalData
  }
}

async function getMealDetails(id) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  let data = await response.json();
  displayMealDetails(data);
}

// Close Main Section and open Details Section
function handelBetweenSections() {
  theForm.style.display = "none";
  mealDetailsContainer.style.display = 'block';
  thePage.style.display = 'none';
}

function displayMealDetails(data) {
  handelBetweenSections();
  let the_data = data.meals[0];

  mealDetailsContainer.innerHTML = `
    <span class="close-btn" onclick='handelCloseSection()'>
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
                ${the_data.strTags != null ? `<li>${the_data.strTags}</li>` : ''}
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

function handelCloseSection() {
  theForm.style.display = 'block';
  mealDetailsContainer.style.display = 'none';
  thePage.style.display = 'block';
}


searchByName.addEventListener('input', function (e) {
  getNameData(e.target.value);
});


async function getFirstNameData(inputValue) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`,
  );
  let data = await response.json();
  displayFirstNameData(data);
  searchByFirstLetter.value = ""
}

function displayFirstNameData(data) {
  let arrayOfData = data.meals;
  if (arrayOfData == null) {
    return;
  } else {
    let finalData = arrayOfData
      .map((the_data) => {
        return `
        <div onclick='getMealDetails(${the_data.idMeal})'>
          <div class="image" data-text="${the_data.strMeal}">
            <img src="${the_data.strMealThumb}" alt='${the_data.strMeal}'>
          </div>
        </div>
      `;
      })
      .join('');
    document.getElementById('search-content').innerHTML = finalData;
  }
}

async function getMealDetails(id) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  let data = await response.json();
  displayMealDetails(data);
}

searchByFirstLetter.addEventListener('input', function (e) {
  getFirstNameData(e.target.value);
});
