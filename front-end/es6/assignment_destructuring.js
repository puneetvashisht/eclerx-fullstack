const address = {
    street: "Govindpuram",
    city: "Ghaziabad",
    country: "india"
}

// const street = address.street;
// const city = address.city;
// const country = address.country;

// const { street, city, country } = address;

// Using alias
const { street:st } = address;


console.log(st);