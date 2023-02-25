const express = require("express");
const appRouter = express.Router();
const Course = require("../Models/Course");

//********************************************MENNAAAA*************************************************************** */
//view the price of each course
appRouter.get("/Guest_course_price", async (req, res) => {
  res.send(await Course.find().select(["Price"]));
});

//filter the courses based on price (price can be FREE)
appRouter.post("/Guest_filtercourse_price", async (req, res) => {
  //consol.log(req.body.Price);
  Course.find(
    {
      Price: { $eq: req.body.Price },
    },
    function (err, result) {
      if (err) {
        res.send("Error");
      } else {
        res.send(result);
      }
    }
  );
});
//choose a course from the results and view (but not open) its details including course subtitles, excercises ,
// total hours of each subtitle, total hours of the course and price (including % discount if applicable) according to the country selected

// var fx = require("money");

// appRouter.get("/GuestCountry_currency", async (req, res) => {
//   _id = req.body.id;
//   let products = await Course.find(
//     {
//       _id: { $eq: req.body._id },
//     },
//     function (err, result) {
//       if (err) {
//         res.send("Error");
//       } else {
//         res.send(result);
//       }
//     }
//   );
//   console.log("loc", _id);
//   if (products.Price != "FREE") {
//     async function fetchJson(url) {
//       let res = await fetch(url);

//           return await res.json();
//       }


//       let location = await fetchJson('https://api.ipdata.co?api-key=ec72d2a2d822f9832a689fbcacdb34e349a0aaeeac84487fb0fd6f80&fields=currency');
//       let exchange = await fetchJson('https://github.com/samayo/country-json/blob/master/src/country-by-currency-code.json);
//       console.log("loc", location);
//       console.log("exc", exchange);
//       fx.base = exchange.base;
//       fx.rates = exchange.rates;
//       console.log("ana hena", products.Price);
//       // if (products.Discount > 0) {
//       //   products.Price = products.Price - (products.Price) * (products.Discount / 100);
//       //}
//       console.log(location.currency.symbol + '' +
//           fx(products.Price).from('USD').to(location.currency.code).toFixed(2));
//       products.Price = fx(products.Price).from('USD').to(location.currency.code).toFixed(2) + '' + location.currency.symbol;
//       console.log(products.Price);
//       return await res.json();
//     }

//     let location = await fetchJson(
//       "https://api.ipdata.co?api-key=ec72d2a2d822f9832a689fbcacdb34e349a0aaeeac84487fb0fd6f80&fields=currency"
//     );
//     let exchange = await fetchJson(
//       "https://openexchangerates.org/api/latest.json?app_id=7cc454a028cf40d28802f444280976ec"
//     );
//     console.log("loc", location);
//     console.log("exc", exchange);
//     fx.base = exchange.base;
//     fx.rates = exchange.rates;
//     console.log("ana hena", products.Price);
//     // if (products.Discount > 0) {
//     //   products.Price = products.Price - (products.Price) * (products.Discount / 100);
//     //}
//     console.log(
//       location.currency.symbol +
//         "" +
//         fx(products.Price).from("USD").to(location.currency.code).toFixed(2)
//     );
//     products.Price =
//       fx(products.Price).from("USD").to(location.currency.code).toFixed(2) +
//       "" +
//       location.currency.symbol;
//     console.log(products.Price);
//   }
//   res.render("ShowCourse", { CourseData: products });
// });
// var fx = require("money");
// appRouter.post("/Guest_currency", async (req, res) => {
//   const Price = req.body.Price;
//   const CountryCode = req.body.CountryCode;
//   let result = 0;
//   if (Price != "FREE") {
//     let location = CountryCode;
//     async function fetchJson(url) {
//       let res = await fetch(url);

//       return await res.json();
//     }
//     let exchange = await fetchJson(
//       "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-currency-code.json"
//     );
//     fx.base = exchange[0].country;
//     fx.rates = exchange[0].currency_code;

//     result = fx(Price).from("USD").to(location).toFixed(2) + "" + location;
//   }
//   res.status(200).json(result);
// });

//*************************************************************MENNA'S END PART*********************************************************** */

appRouter.post("/Guest_filtercourse", async (req, res) => {
  const minrating = req.body.minrating;
  const maxrating = req.body.maxrating;
  Course.find(
    { Rating: { $gte: minrating, $lte: maxrating } },
    function (err, result) {
      if (err) {
        res.send("Error");
      } else {
        res.send(result);
      }
    }
  );
});
appRouter.post("/GuestCountry_currency", async (req, res) => {
  const countryToCurrency = require( 'country-to-currency' );
  const country = req.body.Country;
  console.log( countryToCurrency[ country ] );
  res.send(  countryToCurrency[ country ] );
  });
appRouter.post("/Guest_viewPopularCourses", async (req, res) => {
  const minrating = 4;
  const maxrating = 5;
  Course.find(
    { Rating: { $gte: minrating, $lte: maxrating } },
    function (err, result) {
      if (err) {
        res.send("Error");
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = appRouter;
