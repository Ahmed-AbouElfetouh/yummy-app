const dataContainer = document.getElementById('home-content');
const mealDetailsContainer = document.getElementById('meal-details');
const thePage = document.getElementById('page');

async function getHomeData() {
  let response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  );
  let data = await response.json();
  displayData(data);
}

function displayData(data) {
  let arrayOfData = data.meals;
  let finalData = arrayOfData
    .map((data) => {
      return `
      <div onclick='getMealDetails(${data.idMeal})'>
        <div class="image" data-text="${data.strMeal}">
          <img src="${data.strMealThumb}" alt='${data.strMeal}'>
        </div>
      </div>
    `;
    })
    .join('');

  dataContainer.innerHTML = finalData;
}

// Close Main Section and open Details Section
function handelBetweenSections() {
  mealDetailsContainer.style.display = 'block';
  thePage.style.display = 'none';
}

async function getMealDetails(id) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  let data = await response.json();
  displayMealDetails(data);
}

function displayMealDetails(data) {
  handelBetweenSections();
  let the_data = data.meals[0];
  console.log(the_data);
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
  mealDetailsContainer.style.display = 'none';
  thePage.style.display = 'block';
}


// فكره وفشلت :(

// function createTagsList(tags) {
//   let the_tags = tags.split(',');
//   let tagsLength = the_tags.length;
//   let ul = document.createElement('ul');

//   for (let i = 0; i < tagsLength; i++) {
//     let li = document.createElement('li');
//     let liContent = document.createTextNode(the_tags[i]);
//     li.append(liContent);
//     ul.append(li);
//   }
//   mealDetailsContainer.append(ul)
//   document.body.append(mealDetailsContainer)
// }

window.addEventListener('load', function () {
  getHomeData();
});
