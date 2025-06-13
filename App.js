// import React from "react"
// import ReactDOM from "react-dom/client"
// const heading = React.createElement("h1",{}, "Hellow world from react")
// //CreateElent crete a react object that furter generate html tag that browser understand
// //CreateElement(Object) ==> HTML(Browser understand)
// // createElement conatin three arguments where:
// // fist definr name of the tag
// //second i.e empty object it define the attributes which that tag hold: could be id or class or style etc
// // third was the Inner Html of the tag
// const root = ReactDOM.createRoot(document.getElementById("root"))
// //createRoot create root element

// //render put the element into the root

// const parent = React.createElement("div",{id: "parent"},

//    [ React.createElement("div",{id: "child", key: "child-1"},
//     //for multiple children we simply have to put each child into an array
//     [React.createElement("h1",{id: "h1-1"},"i am h1 tag"),React.createElement("h2",{id: "h2-1"},"i am h2 tag")]),
//     React.createElement("div",{id: "child2", key:"child-2"},
//         //for multiple children we simply have to put each child into an array
//         [React.createElement("h1",{id: "h1-2"},"i am h1 tag2"),React.createElement("h2",{id: "h2-2"},"i am h2 tag2")])]
// )

// root.render(parent);
// console.log(parent)
// import React from "react";
// import ReactDOM from "react-dom/client";

// Simple heading
// const heading = React.createElement("h1", {}, "Hello world from React");

// // Parent with children that have proper `key` props
// const parent = React.createElement("div", { id: "parent" }, [

//   React.createElement("div", { id: "child", key: "child-1" }, [
//     React.createElement("h1", { key: "h1-1", id: "h1-1" }, "I am h1 tag"),
//     React.createElement("h2", { key: "h2-1", id: "h2-1" }, "I am h2 tag")
//   ]),

//   React.createElement("div", { id: "child2", key: "child-2" }, [
//     React.createElement("h1", { key: "h1-2", id: "h1-2" }, "I am h1 tag2"),
//     React.createElement("h2", { key: "h2-2", id: "h2-2" }, "I am h2 tag2")
//   ])

// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// ========================================================================================================================================
import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", { id: "hwading" }, "i am ali Mehdi");
const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading)
// console.log(root);
// // note : createElement creates react object(heading), and after rendering heading to root that object convert into HTML
// // object, and whatever which is written inside the root taht will me rplaced with the text in the that object heading

// // JSX - HTML like syantax: We use JSX to reduce the complexness of the above Core React code
// const jsxheading = (
//   <h1 id="heading " tabIndex="5">
//     using JSX
//   </h1>
//); // this jsx code is not understand by the JS engine
//therefore this jsx code transpiled before it goes to JS engine
// AND IT IS DOEN BY PARCEL which further used babel
// root.render(jsxheading);
// console.log(heading)
// console.log(jsxheading)
// both are nothing but react objects

// REACT coponents:
// There are two types of React components
// Class based components = Old way  to creating components which is currently not used by the modern developer
// Functional Components = New way of creating components
// Func Com is nthg but just a normal Javascript function that return some peice of JSX or
// it is something(funtion) that return a react element
// name of component should be start from capatial letter

// const Head = () => (
//     <div>
//     <h1 className="head" tabIndex="5">
//       Hi I am ali
//     </h1>
//     </div>
//   );

// // we can put any peice of JS code in JSX code just by writing that code in curly braces {}
// const num = 10000

// this is something called Component composition which is rendering compnent inside a component
// const HeadingComponent = () => (
//      // Component composition
//   <div>

//     {Head()}
//     <Head/>
//     <h1>{num}</h1>

//     <h1>React HeadingComponent</h1>
//   </div>
// );

// // way of rendering component

// const Title = () => (
//     <div>
//         <HeadingComponent/>
//     <h1 className="head" tabIndex="5">
//       Title REACT
//     </h1>
//     </div>
//   );

// root.render(<Title />);

//summary: we can put any react element inside functional component and can put any functional component inside react element
// and we can run any peice of JS code inside {}

// We can put these rect element and components using both syantax because at the end it is normal JS function and
// we have ability to run JS code in {}.
//{Head()}
//<Head/>

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_hF141wNMNkIEzxUbMzHSmjAQK4qy_ZCeJYHZq7LRAGDi7C4qGaXk6rU5PAeHm9v56o"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    resData?.card?.card?.info;
  const {deliveryTime} = resData?.card?.card?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} STAR</h4>
      <h4>{deliveryTime} MIN</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "78675",
          name: "Raj Luxmi Restaurant",
          city: "15",
          slugs: {
            restaurant: "raj-luxmi-misthan-bhandar-charbagh-alambagh",
            city: "lucknow",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/9/da5e90cd-9a84-4c34-b000-9b957f8c324a_78675.jpg",
          address: "Charbagh, Charbagh, Guru Nanak Market, Charbagh, Lucknow",
          locality: "Charbagh",
          areaName: "Charbagh",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Indian", "South Indian", "Chinese", "Thalis"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "54K+",
          promoted: true,
          adTrackingId:
            "cid=c1c8ff56-dcfe-4c72-ba2b-bedf9af333c6~p=0~adgrpid=c1c8ff56-dcfe-4c72-ba2b-bedf9af333c6#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=78675~plpr=SEARCH#RESTAURANT~st=restaurants~eid=8090054b-f565-411a-b75b-20491c75db4a~srvts=1749798719030",
          sla: {
            deliveryTime: 33,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 4.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "30-35 MINS",
            lastMileTravelString: "4.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "273",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "c1c8ff56-dcfe-4c72-ba2b-bedf9af333c6",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants","adTrackingId":"cid=c1c8ff56-dcfe-4c72-ba2b-bedf9af333c6~p=0~adgrpid=c1c8ff56-dcfe-4c72-ba2b-bedf9af333c6#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=78675~plpr=SEARCH#RESTAURANT~st=restaurants~eid=8090054b-f565-411a-b75b-20491c75db4a~srvts=1749798719030"}',
          objectValue: "78675",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "78675",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "99980",
          name: "Tarush Restaurant",
          city: "15",
          slugs: {
            restaurant: "tarush-restaurant-hazratganj-hazratganj",
            city: "lucknow",
          },
          cloudinaryImageId: "c7sicdsyvl6y4yayf9o1",
          address: "Dainik Jagran Chauraha, Hazratganj, Lucknow",
          locality: "Butler Colony",
          areaName: "Sapru Marg",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["North Indian", "Chinese", "Indian"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1.4K+",
          sla: {
            deliveryTime: 31,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "30-35 MINS",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹5",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "1 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "26",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "99980",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "99980",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "150382",
          name: "Ghante Wala Sweets & Restaurant",
          city: "15",
          slugs: {
            restaurant: "ghante-wala-sweets-restaurant-chowk-chowk",
            city: "lucknow",
          },
          cloudinaryImageId: "hppi6r5dsseh5kqxwltv",
          address: "Ghantewala Chauraha ,Thakur Ganj",
          locality: "Thakurganj",
          areaName: "Chowk",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: [
            "Chinese",
            "Snacks",
            "Indian",
            "Fast Food",
            "Continental",
            "Lucknowi",
            "South Indian",
            "Biryani",
            "Kebabs",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "6.5K+",
          promoted: true,
          adTrackingId:
            "cid=dc427565-e685-4b9e-8c4f-b605855b07e4~p=2~adgrpid=dc427565-e685-4b9e-8c4f-b605855b07e4#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=150382~plpr=SEARCH#RESTAURANT~st=restaurants~eid=ecde5dfc-2be7-466b-a7d8-9bb7d61eeb79~srvts=1749798719030",
          sla: {
            deliveryTime: 36,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "35-40 MINS",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "dc427565-e685-4b9e-8c4f-b605855b07e4",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants","adTrackingId":"cid=dc427565-e685-4b9e-8c4f-b605855b07e4~p=2~adgrpid=dc427565-e685-4b9e-8c4f-b605855b07e4#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=150382~plpr=SEARCH#RESTAURANT~st=restaurants~eid=ecde5dfc-2be7-466b-a7d8-9bb7d61eeb79~srvts=1749798719030"}',
          objectValue: "150382",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "150382",
            query: "Restaurants",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "124780",
          name: "Jai Bharat Restaurant",
          city: "15",
          slugs: {
            restaurant: "jai-bharat-hotel-charbagh-sg-city",
            city: "lucknow",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/1b8d9372-c65b-4e2e-8390-73c2e87251a8_124780 SS.jpg",
          address: "Opposite Mohan Hotel, Charbagh, Lucknow",
          locality: "Cash and Pay Colony",
          areaName: "Charbagh",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: [
            "North Indian",
            "Biryani",
            "Chinese",
            "Snacks",
            "South Indian",
            "Beverages",
          ],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "1.4K+",
          sla: {
            deliveryTime: 34,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "30-35 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "124780",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "124780",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "788223",
          name: "Madras Restaurant since 1951",
          city: "15",
          slugs: {
            restaurant: "madras-restaurant-since-1951-hazratganj-hazratganj",
            city: "lucknow",
          },
          cloudinaryImageId: "bf083822a35bee9d6411b2322ab2bcb6",
          address:
            "27, behind new Market, Hazratganj, Lucknow, Uttar Pradesh 226001, India",
          locality: "New Market",
          areaName: "Hazratganj",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["South Indian", "Chinese"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "558",
          promoted: true,
          adTrackingId:
            "cid=7e96e5b2-24bc-4dfc-8b72-422f988a059e~p=3~adgrpid=7e96e5b2-24bc-4dfc-8b72-422f988a059e#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=788223~plpr=SEARCH#RESTAURANT~st=restaurants~eid=82dc78c1-a02a-455e-8f91-c8b3aeb448dc~srvts=1749798719030",
          sla: {
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                description: "Delivery!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "15% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "7e96e5b2-24bc-4dfc-8b72-422f988a059e",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants","adTrackingId":"cid=7e96e5b2-24bc-4dfc-8b72-422f988a059e~p=3~adgrpid=7e96e5b2-24bc-4dfc-8b72-422f988a059e#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=788223~plpr=SEARCH#RESTAURANT~st=restaurants~eid=82dc78c1-a02a-455e-8f91-c8b3aeb448dc~srvts=1749798719030"}',
          objectValue: "788223",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "788223",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "537604",
          name: "Manbhavan Premium Thali Restaurant",
          city: "15",
          slugs: {
            restaurant:
              "manbhavan-premium-thali-restaurant-gomti-nagar-gomti-nagar",
            city: "lucknow",
          },
          cloudinaryImageId: "bmx43jf1efv7cc3udeuo",
          address:
            "Unit No T-30 T-31 Third Floor  Phoenix Palassio Sector 7  Gomtinagar Extension Lucknow",
          locality: "Gomti Nagar",
          areaName: "Gomti Nagar",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["South Indian", "North Indian", "Chinese", "Beverages"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "73",
          sla: {
            deliveryTime: 68,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 14.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "14.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "ABOVE ₹3000",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.7",
              ratingCount: "1.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "537604",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "537604",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "381244",
          name: "Hotel Mera Mann And Restaurant",
          city: "15",
          slugs: {
            restaurant: "hotel-mera-mann-and-restaurant-aminabad-aminabad",
            city: "lucknow",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/2/239825cb-5d6d-4892-ae54-b65c202144df_381244 (1).jpg",
          address: "MAHARANA PRATAP CHAURAHA, STATION ROAD LUCKNOW\t226004",
          locality: "Husainganj",
          areaName: "Husainganj",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Chinese", "Pizzas", "Biryani"],
          avgRating: 4.6,
          feeDetails: {},
          avgRatingString: "4.6",
          totalRatingsString: "1.7K+",
          promoted: true,
          adTrackingId:
            "cid=49934f12-6b59-4f67-8607-5cfd464835bf~p=4~adgrpid=49934f12-6b59-4f67-8607-5cfd464835bf#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=381244~plpr=SEARCH#RESTAURANT~st=restaurants~eid=35b36983-cdcf-4ad7-8ee6-bd4c4594fc24~srvts=1749798719030",
          sla: {
            deliveryTime: 53,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "50-55 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "1.1K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "49934f12-6b59-4f67-8607-5cfd464835bf",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants","adTrackingId":"cid=49934f12-6b59-4f67-8607-5cfd464835bf~p=4~adgrpid=49934f12-6b59-4f67-8607-5cfd464835bf#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=381244~plpr=SEARCH#RESTAURANT~st=restaurants~eid=35b36983-cdcf-4ad7-8ee6-bd4c4594fc24~srvts=1749798719030"}',
          objectValue: "381244",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "381244",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "777769",
          name: "Mrs Rasoi Restaurant",
          city: "15",
          slugs: {
            restaurant: "mrs-rasoi-restaurant-chowk-chowk",
            city: "lucknow",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/21/e94b025b-52d4-4c71-878e-f4d5555057bc_777769.jpg",
          address:
            "Shop No- S-23, Sanjay Market, Sec- C, Block C, Rajajipuram, Lucknow, Uttar Pradesh 226017, India",
          locality: "Sanjay Market",
          areaName: "Chowk",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: [
            "Chinese",
            "Indian",
            "sandwich",
            "Pizzas",
            "Burgers",
            "Thalis",
            "Pastas",
            "Snacks",
          ],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "169",
          sla: {
            deliveryTime: 52,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 4.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "50-55 MINS",
            lastMileTravelString: "4.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "777769",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "777769",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1079346",
          name: "Shri Radhey Radhey Family Restaurant",
          city: "15",
          slugs: {
            restaurant: "shri-radhey-radhey-hazratganj-hazratganj",
            city: "lucknow",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/14/5df25947-dbbc-4043-b22e-9f8e63ffda27_1079346.JPG",
          address:
            "AHLUWALIA BUILDING, OPPOSITE BHOPAL HOUSE, LAL BAGH, LUCKNOW ,RAM TEERTH WARD,Nagar Nigam Food Safety Zone-1,Lucknow,Uttar Pradesh-226001\t",
          locality: "Hazratganj",
          areaName: "Hazratganj",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Chinese", "Biryani", "Thalis", "Snacks", "North Indian"],
          feeDetails: {},
          avgRatingString: "NEW",
          promoted: true,
          adTrackingId:
            "cid=f1f45634-a847-4d0f-8b75-01f0c4b15eb2~p=5~adgrpid=f1f45634-a847-4d0f-8b75-01f0c4b15eb2#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1079346~plpr=SEARCH#RESTAURANT~st=restaurants~eid=73de2b91-86a2-426f-a230-fc6959a69bfd~srvts=1749798719030",
          sla: {
            deliveryTime: 36,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "35-40 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "f1f45634-a847-4d0f-8b75-01f0c4b15eb2",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants","adTrackingId":"cid=f1f45634-a847-4d0f-8b75-01f0c4b15eb2~p=5~adgrpid=f1f45634-a847-4d0f-8b75-01f0c4b15eb2#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1079346~plpr=SEARCH#RESTAURANT~st=restaurants~eid=73de2b91-86a2-426f-a230-fc6959a69bfd~srvts=1749798719030"}',
          objectValue: "1079346",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "1079346",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "572346",
          name: "Bhargavas Restaurant & Banquet",
          city: "15",
          slugs: {
            restaurant: "bhargavas-restaurant-&-banquet-ashiyana-ashiyana",
            city: "lucknow",
          },
          cloudinaryImageId: "m6gkt5yr60l2tnfmhd0v",
          address:
            "M-204,Sec-G,Opp-Zonal Park, Kanpur - Lucknow Rd, Lda Colony, Lucknow, Uttar Pradesh 226012",
          locality: "LDA Colony",
          areaName: "LDA Colony",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "North Indian",
            "Chinese",
            "Snacks",
            "Fast Food",
            "Desserts",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "703",
          sla: {
            deliveryTime: 52,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 10.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "50-55 MINS",
            lastMileTravelString: "10.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "1 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "43",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "572346",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "572346",
            query: "Restaurants",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "165050",
          name: "Mahalaxmi Sweets & Restaurant",
          city: "15",
          slugs: {
            restaurant: "mahalaxmi-sweets-restaurant-aliganj",
            city: "lucknow",
          },
          cloudinaryImageId: "oqk0mierg0rlhuxoa3ok",
          address: "Arif Chamber -4 Purania Choraha Aliganj",
          locality: "Aliganj",
          areaName: "Aliganj",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "North Indian",
            "Thalis",
            "South Indian",
            "Snacks",
            "Chinese",
            "Sweets",
            "Desserts",
            "Beverages",
            "Ice Cream",
          ],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "39K+",
          promoted: true,
          adTrackingId:
            "cid=e6ae5f00-eff6-482f-9efe-ef98907eb303~p=6~adgrpid=e6ae5f00-eff6-482f-9efe-ef98907eb303#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=165050~plpr=SEARCH#RESTAURANT~st=restaurants~eid=d30b15f2-a3db-4450-b8d7-43bc15d81b6f~srvts=1749798719030",
          sla: {
            deliveryTime: 29,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "25-30 MINS",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "8.3K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "e6ae5f00-eff6-482f-9efe-ef98907eb303",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants","adTrackingId":"cid=e6ae5f00-eff6-482f-9efe-ef98907eb303~p=6~adgrpid=e6ae5f00-eff6-482f-9efe-ef98907eb303#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=165050~plpr=SEARCH#RESTAURANT~st=restaurants~eid=d30b15f2-a3db-4450-b8d7-43bc15d81b6f~srvts=1749798719030"}',
          objectValue: "165050",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "165050",
            query: "Restaurants",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "100395",
          name: "Balle Balle Fast Food Restaurant",
          city: "15",
          slugs: {
            restaurant: "balle-balle-yaaron-da-dhaba-alambagh-alambagh",
            city: "lucknow",
          },
          cloudinaryImageId: "s79hjnykfjt8bonwsijs",
          address: "C24 Chandar Nagar Market , Alambagh Lucknow ,226005",
          locality: "Alambagh",
          areaName: "Alambagh",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["North Indian", "Chinese", "South Indian"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "924",
          sla: {
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 7.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "7.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "1 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "185",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "100395",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "100395",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "962163",
          name: "Vm Resorts And Restaurant",
          city: "15",
          slugs: {
            restaurant: "vm-resorts-and-restaurant-ashiyana-ashiyana",
            city: "lucknow",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/24/3a2c1b21-f3a4-46fd-8544-74376d3b715b_962163.jpg",
          address:
            "Shop No : KBC -36 , Floor :  , VM resorts & Restaurant private limited , Sector B, Bargawan, LDA Colony, Lucknow, Uttar Pradesh, India 226012",
          locality: "Lda Colony",
          areaName: "Ashiyana",
          costForTwo: "22000",
          costForTwoMessage: "₹220 FOR TWO",
          cuisines: [
            "North Indian",
            "South Indian",
            "Tandoor",
            "Fast Food",
            "Chinese",
          ],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "36",
          sla: {
            deliveryTime: 53,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 9.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "50-55 MINS",
            lastMileTravelString: "9.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "962163",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "962163",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "944766",
          name: "Chakh Le India Restaurant",
          city: "15",
          slugs: {
            restaurant: "chakh-le-india-restaurant-ashiyana-ashiyana",
            city: "lucknow",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/21/f9cd2285-ba43-4aa0-b317-af8db10464cd_944766.JPG",
          address:
            "Shop No : SHOP NO.46 , Floor : 0 , NEAR ALAMBAGH TALKATORA  RAOD , ",
          locality: "Ashiyana",
          areaName: "Ashiyana",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Chinese", "Beverages"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "20",
          sla: {
            deliveryTime: 42,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 6.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40-45 MINS",
            lastMileTravelString: "6.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "944766",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "944766",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "546186",
          name: "The king restaurant",
          city: "15",
          slugs: {
            restaurant: "the-king-restaurant-nirala-nagar-nirala-nagar",
            city: "lucknow",
          },
          cloudinaryImageId: "urvsm7kg6ri5cbfaola7",
          address:
            "280/11D Blunt Square Lucknow ,Lucknow (M Corp.),Lucknow Tahsil,Lucknow,Uttar Pradesh-226004",
          locality: "Blunt Square",
          areaName: "Hazratganj",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "American", "Snacks"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 37,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 4.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "35-40 MINS",
            lastMileTravelString: "4.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹250 OFF",
            subHeader: "ABOVE ₹999",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "546186",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "546186",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "127944",
          name: "Neelkanth Sweets",
          city: "15",
          slugs: {
            restaurant: "neelkanth-sweets-vibhuti-khand-gomti-nagar",
            city: "lucknow",
          },
          cloudinaryImageId: "okgeqdb5bycqaoeuyi51",
          address: "Kamta, Lucknow",
          locality: "Shankar Puri",
          areaName: "Indira Nagar",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Sweets", "Snacks", "Chinese", "South Indian", "Chaat"],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "29K+",
          sla: {
            deliveryTime: 52,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 12.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "50-55 MINS",
            lastMileTravelString: "12.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹449",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "127944",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "127944",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1065059",
          name: "Taste Of Moms Kitchen",
          city: "15",
          slugs: {
            restaurant: "taste-of-moms-kitchen-gomti-nagar-gomti-nagar",
            city: "lucknow",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/18/43b2c09f-2d50-42fe-9b27-48f3081b9768_1065059.jpg",
          address:
            "4/924 , Vinay Khand Gomti Nagar, Lucknow ,GOMTI NAGAR,Nagar Nigam Food Safety Zone-17,Lucknow,Uttar Pradesh-226010\t",
          locality: "Gomti Nagar",
          areaName: "Gomti Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["North Indian"],
          avgRating: 3.5,
          feeDetails: {},
          avgRatingString: "3.5",
          totalRatingsString: "4",
          sla: {
            deliveryTime: 69,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 11.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "11.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "₹50 OFF",
            subHeader: "ABOVE ₹349",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "1065059",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "true",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "1065059",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "91876",
          name: "Maharaja Restaurant",
          city: "15",
          slugs: {
            restaurant: "maharaja-restaurant-charbagh-charbagh",
            city: "lucknow",
          },
          cloudinaryImageId: "zwqjrivcjwmtit3ejish",
          address: "92/218 gautam budh marg charbagh LUCKNOW",
          locality: "Charbagh",
          areaName: "Charbagh",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Mughlai", "Indian"],
          avgRating: 3.8,
          feeDetails: {},
          avgRatingString: "3.8",
          totalRatingsString: "1.2K+",
          sla: {
            deliveryTime: 35,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "30-35 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹69",
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "91876",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "91876",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "825636",
          name: "Bikanervala",
          city: "15",
          slugs: {
            restaurant: "bikanervala-aliganj-aliganj",
            city: "lucknow",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/15598bb8-70ad-4bec-a9b7-52764583869f_825636.jpg",
          address:
            "Counter No-A5,Food Court,2nd Floor,Emerald Mall,CP-138,Sec-D1,Kanpur Road scheme, Lucknow UP-226012",
          locality: "emerald mall lucknow",
          areaName: "emerald?mall?lucknow",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Street Food", "Fast Food", "Sweets"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "469",
          sla: {
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 10.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "10.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "825636",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "825636",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "59125",
          name: "Bhargava Restaurant",
          city: "15",
          slugs: {
            restaurant: "bhargava-restaurant-dainak-jagran-chauraha-hazratganj",
            city: "lucknow",
          },
          cloudinaryImageId: "irganf8qj7qts2rp3vyz",
          address: "Dainik Jagran Chauraha, Hazratganj, Lucknow",
          locality: "Butler Colony",
          areaName: "Sapru Marg",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["North Indian", "Chinese", "Fast Food", "Snacks"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "4.7K+",
          sla: {
            deliveryTime: 34,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "30-35 MINS",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "2.9",
              ratingCount: "19",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "59125",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "59125",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "59529",
          name: "Classic Restaurant",
          city: "15",
          slugs: {
            restaurant: "classic-treat-restaurant-mahanagar-indira-nagar",
            city: "lucknow",
          },
          cloudinaryImageId: "bnpy0ljxighgcq7i7gts",
          address: "M 28, 1st Floor, Gole Market, Mahanagar, Lucknow",
          locality: "Mandir Marg",
          areaName: "Mahanagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Indian", "Chinese", "Continental", "Navratri Special"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "51K+",
          sla: {
            deliveryTime: 47,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 9.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "9.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹19",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "2 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "59529",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "59529",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "67927",
          name: "Zakir Restaurant (Tedhi Pulia)",
          city: "15",
          slugs: {
            restaurant: "zakir-restauarnt-tedhi-pulia-aliganj",
            city: "lucknow",
          },
          cloudinaryImageId: "zd0tofijndoyri7ciphs",
          address: "Shop.2, Awadh Plaza Tedhi Pulia Chauraha, Aliganj, Lucknow",
          locality: "Aliganj",
          areaName: "Aliganj",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["North Indian", "Mughlai", "Biryani", "Beverages"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "16K+",
          sla: {
            deliveryTime: 33,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 8.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "30-35 MINS",
            lastMileTravelString: "8.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.8",
              ratingCount: "225",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "67927",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "67927",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "756642",
          name: "Balaji Restaurant",
          city: "15",
          slugs: {
            restaurant: "balaji-restaurant-gomti-nagar-gomti-nagar-2",
            city: "lucknow",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/8/fcb8de6f-f87d-4548-854d-97c7e97aba08_756642.jpg",
          address:
            "Shop No- 1/145 Near Mantri Avas, Vibhav Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India",
          locality: "Vibhav Khand",
          areaName: "Gomti Nagar",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["North Indian", "South Indian", "Biryani", "Chinese"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "1.4K+",
          sla: {
            deliveryTime: 59,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 13.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "13.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹89",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "9 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "756642",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "756642",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "88827",
          name: "Shivom Restaurant",
          city: "15",
          slugs: {
            restaurant:
              "shivom-the-mithai-shop-and-restaurant-alambagh-alambagh",
            city: "lucknow",
          },
          cloudinaryImageId: "8aad9bf4d3a12d787bf3d17e8c2baa57",
          address: "Opposite United Bank, Talkatora Road, Alambagh",
          locality: "Alambagh",
          areaName: "Alambagh",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Sweets", "Indian", "South Indian", "Snacks", "Chinese"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "12K+",
          sla: {
            deliveryTime: 42,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 6.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40-45 MINS",
            lastMileTravelString: "6.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹79",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "565",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "88827",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "88827",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "63849",
          name: "Durgma Restaurant",
          city: "15",
          slugs: {
            restaurant: "durgma-restaurant-hazratganj-hazratganj",
            city: "lucknow",
          },
          cloudinaryImageId: "lekhu2tvgosiilgq97ar",
          address: "Basement, Durgma Towers, Lalbagh, Lucknow",
          locality: "Lalbagh",
          areaName: "Lalbagh",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: [
            "North Indian",
            "Punjabi",
            "Indian",
            "Snacks",
            "Fast Food",
            "Lucknowi",
            "Desserts",
            "Continental",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "8.7K+",
          sla: {
            deliveryTime: 40,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 6.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40-45 MINS",
            lastMileTravelString: "6.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹800",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"85f7a06b-d083-1bac-8b06-5501ff45f2d9","grid":"e166c457-374c-48db-9bc9-de947043110e","queryUniqueId":"1d3ffc62-0558-5dab-f52b-903cd53927d7","query":"Restaurants"}',
          objectValue: "63849",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "459d13b60c5cdacec1684faa1ef48bae",
            qrEnabled: "false",
            restaurant_id: "63849",
            query: "Restaurants",
            sourceSessionId: "l4ya1d92-cbd0-4255-b8f4-ab1d0aa4148f",
            source: "SEARCH",
          },
        },
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
         {
          resList.map((restaurant) => 
            <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>
          )
         }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root.render(<AppLayout />);

// if we want to pass data to the card dynamically , we have to use something known as props(properties)
// we have pass props to our functional component(just like passing arguments to normal functions)
