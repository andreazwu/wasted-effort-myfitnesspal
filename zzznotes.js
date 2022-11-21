//------------------------------------------
// fetch NUTRITIONAL data:
const apiEndpoint = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
const params = { query: "1 cup chicken noodle soup" };
const { data: nutrientInfo } = await axios.post(apiEndpoint, params, {
  headers,
});
updateFocusedFood(nutrientInfo);

// fetch example (POST, with body of "query"):
fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'x-app-id': '2b96017a',
    'x-app-key': '417ee5d2dcb531c6e5d81cb43fb2d06c',
    },
    body: JSON.stringify({
     "query" : "1 cup chicken noodle soup"
    })
}).then(res => res.json())
.then(res => console.log (res.foods[0].food_name, res.foods[0].serving_qty, res.foods[0].serving_unit, "calories:", res.foods[0].nf_calories, "carbs:", res.foods[0].nf_total_carbohydrate, "protein:", res.foods[0].nf_protein, "fat:", res.foods[0].nf_total_fat, "saturated fat:", res.foods[0].nf_saturated_fat, "fiber:", res.foods[0].nf_dietary_fiber, "sodium:", res.foods[0].nf_sodium,"mg", "potassium:", res.foods[0].nf_potassium, "mg"))
// .then(console.log)

// response:
// chicken noodle soup 1 cup calories: 59.52 carbs: 7.37 protein: 2.88 fat: 1.88 saturated fat: 0.47 fiber: 1.24 sodium: 830.8 mg potassium: 59.52 mg
const nutritionalresult =
{
  "foods": [
      {
          "food_name": "chicken noodle soup",
          "brand_name": null,
          "serving_qty": 1,
          "serving_unit": "cup",
          "serving_weight_grams": 248,
          "nf_calories": 62,
          "nf_total_fat": 2.36,
          "nf_saturated_fat": 0.65,
          "nf_cholesterol": 12.4,
          "nf_sodium": 865.52,
          "nf_total_carbohydrate": 7.32,
          "nf_dietary_fiber": 0.5,
          "nf_sugars": 0.67,
          "nf_protein": 3.15,
          "nf_potassium": 54.56,
          "nf_p": 42.16,
          "full_nutrients": [
              {
                  "attr_id": 203,
                  "value": 3.1496
              }, { }, { }
          ],
          "nix_brand_name": null,
          "nix_brand_id": null,
          "nix_item_name": null,
          "nix_item_id": null,
          "upc": null,
          "consumed_at": "2017-07-13T13:46:25+00:00",
          "metadata": {},
          "source": 1,
          "ndb_no": 6419,
          "tags": {
              "item": "chicken noodle soup",
              "measure": "cup",
              "quantity": "1.0",
              "tag_id": 256
          },
          "alt_measures": [
              {
                  "serving_weight": 248,
                  "measure": "serving 1 cup",
                  "seq": 1,
                  "qty": 1
              },
              {
                  "serving_weight": 248,
                  "measure": "cup",
                  "seq": 80,
                  "qty": 1
              },
              {
                  "serving_weight": 586,
                  "measure": "can",
                  "seq": 81,
                  "qty": 1
              },
              {
                  "serving_weight": 496,
                  "measure": "bowl (2 cups)",
                  "seq": 82,
                  "qty": 1
              },
              {
                  "serving_weight": 5.17,
                  "measure": "tsp",
                  "seq": 101,
                  "qty": 1
              },
              {
                  "serving_weight": 15.5,
                  "measure": "tbsp",
                  "seq": 102,
                  "qty": 1
              }
          ],
          "lat": null,
          "lng": null,
          "meal_type": 1,
          "photo": {
              "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/256_thumb.jpg",
              "highres": "https://d2xdmhkmkbyw75.cloudfront.net/256_highres.jpg"
          }
      }
  ]
}

//------------------------------------------
// fetch EXERCISE data:
fetch(`https://trackapi.nutritionix.com/v2/natural/exercise`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'x-app-id': '2b96017a',
    'x-app-key': '417ee5d2dcb531c6e5d81cb43fb2d06c',
    },
    body: JSON.stringify({
     "query" : "ran 3 miles",
     "gender": "female",
     "weight_kg": 69.5,
     "height_cm": 180,
     "age":32
    })
}).then(res => res.json())
.then(res => console.log (res.exercises[0].name, res.exercises[0].duration_min, "minutes", res.exercises[0].nf_calories, "calories burned"))
// .then(console.log)

// exercise return results:
// running 30.02 minutes 340.78 calories burned
const exercisereturn =
{
  "exercises": [
    {
      "tag_id": 316,
      "user_input": "ran",
      "duration_min": 34.63,
      "met": 9,
      "nf_calories": 363.62,
      "photo": {
        "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/exercise/316_thumb.jpg",
        "highres": null
      },
      "compendium_code": 12040,
      "name": "running"
    }
  ]
}





//------------------------------------------
// fetch FOOD search data:
// https://trackapi.nutritionix.com/v2/search/instant?query=${item}

fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=apple`, {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    'x-app-id': '2b96017a',
    'x-app-key': '417ee5d2dcb531c6e5d81cb43fb2d06c',
    }
}).then(res => res.json())
.then(console.log)

// The return structure is:
//   -branded: restaurant/ grocery stores
//   -self: user's own food log
//   -common: (normal)
const resultsearch =
{
  "branded": [
    {
      "food_name": "Grilled Cheese",
      "image": null,
      "serving_unit": "serving",
      "nix_brand_id": "513fbc1283aa2dc80c000358",
      "brand_name_item_name": "Claim Jumper Grilled Cheese",
      "serving_qty": 1,
      "nf_calories": 560,
      "brand_name": "Claim Jumper",
      "brand_type": 1,
      "nix_item_id": "529e800af9655f6d3500c710"
    }, { }, { }, { }, { }],

  "self": [
    {
      "food_name": "grilled cheese",
      "serving_unit": "item",
      "nix_brand_id": null,
      "serving_qty": 1,
      "nf_calories": 348.4,
      "brand_name": null,
      "uuid": "7e79cdfa-bb3f-4f3b-a292-3357aa35d31f",
      "nix_item_id": null
    }, { }, { }, { }, { }],

  "common": [
    {
      "food_name": "grilled cheese",
      "image": "https://d2xdmhkmkbyw75.cloudfront.net/1763_thumb.jpg",
      "tag_id": "1763",
      "tag_name": "grilled cheese"
    },
    {
      "food_name": "grilled cheese cheeseburger",
      "image": null,
      "tag_id": "5901",
      "tag_name": "grilled cheese burger"
    }, { }, { }, { }, { }]
}
