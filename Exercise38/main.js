"use strict";
// Q:38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// 31.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// --------------------SOLUTION------------------------//
function describe_city(city, country = 'default country') {
    console.log(` ${city} is in ${country}`);
}
// call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('Los Angles', 'USA');
describe_city('Toronto');
