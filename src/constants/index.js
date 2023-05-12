import DickJones from "../assets/images/testimonials/dick-jones.jpg";
import SirPeterWayland from "../assets/images/testimonials/sir-peter-weyland.jpg";
import BorisBalkan from "../assets/images/testimonials/boris-balkan.jpg";

const navLinks = [
  { id: "home", value: "home" },
  { id: "vision", value: "vision" },
  { id: "services", value: "services" },
  { id: "projects", value: "projects" },
  { id: "commitment", value: "commitment" },
  { id: "contact", value: "contact" },
];

const services = [
  {
    id: "general",
    heading: "General Construction",
    text: "With over 20 years of experience we are ready to build your dreams!",
    image: "../src/assets/images/services/general consruction/crew.jpg",
  },
  {
    id: "landscaping",
    heading: "Landscaping",
    text: "Let us turn your property into paradise.",
    image: "../src/assets/images/services/landscaping/landscaping3.jpg",
  },
  {
    id: "restoration",
    heading: "Restoration",
    text: "Sometimes there's no need to start from scratch...",
    image: "../src/assets/images/services/restoration/restore2.jpg",
  },
  {
    id: "consultation",
    heading: "Consultation",
    text: "We are more than happy to share our knolege and let you learn",
    image: "../src/assets/images/services/consultation/consult2.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    testimonial: "StandFor did an amazing job repairing my office after the ED-209 incident.",
    name: "Dick Jones",
    designation: "Senior VP",
    company: "OCP",
    image: DickJones,
  },
  {
    id: 2,
    testimonial: "My new wine cellar is out of this world!",
    name: "Sir Peter Wayland",
    designation: "Founder/CEO",
    company: "Weyland Corporation",
    image: SirPeterWayland,
  },
  {
    id: 3,
    testimonial: "The new book valut is devlishly good!",
    name: "Boris Balkan",
    designation: "Founder/CEO",
    company: "Balkan Enterprises",
    image: BorisBalkan,
  },
];

const projectsPreview = [
  { id: 1, name: "Residential Projects", image: "../src/assets/images/projects/houses/house2.jpg" },
  { id: 2, name: "Commercial Projects", image: "../src/assets/images/projects/buildings/building4.jpg" },
  { id: 3, name: "Retail Projects", image: "../src/assets/images/projects/retailCenters/retail6.jpg" },
];

const residentialProjects = [
  { id: 1, name: "Two Story House", location: "Santa Barbara, CA", year: "2018", image: "../src/assets/images/projects/houses/house4.jpg" },
  {
    id: 2,
    name: "Two Story House With a Pool",
    location: "Hollywood Hills, CA",
    year: "2019",
    image: "../src/assets/images/projects/houses/house3.jpg",
  },
  { id: 3, name: "Two Story House", location: "San Jose, CA", year: "2018", image: "../src/assets/images/projects/houses/house2.jpg" },
  { id: 4, name: "Three Story House", location: "Los Angeles, CA", year: "2018", image: "../src/assets/images/projects/houses/house.jpg" },
  { id: 5, name: "Two Story House", location: "Santa Rosa, CA", year: "2023", image: "../src/assets/images/projects/houses/house5.jpg" },
];

const commercialProjects = [
  { id: 1, name: "Fitness Center", location: "San Dimas, CA", year: "2023", image: "../src/assets//images/projects/buildings/building5.jpg" },
  { id: 2, name: "Administrative Building", location: "Barstow, CA", year: "2023", image: "../src/assets//images/projects/buildings/building4.jpg" },
  { id: 3, name: "Administrative Building", location: "Bishop, CA", year: "2023", image: "../src/assets//images/projects/buildings/project4.jpeg" },
  { id: 4, name: "Apartment Building", location: "Los Angeles, CA", year: "2023", image: "../src/assets//images/projects/buildings/building3.jpg" },
  { id: 5, name: "Campus Library", location: "Berkley, CA", year: "2023", image: "../src/assets/images/projects/buildings/building6.jpg" },
];

const retailProjects = [
  { id: 1, name: "Retail Center", location: "Thousand Oaks, CA", year: "2019", image: "../src/assets//images/projects/retailCenters/retail5.jpg" },
  { id: 2, name: "Strip Mall", location: "Camarillo, CA", year: "2020", image: "../src/assets/images/projects/retailCenters/retail6.jpg" },
  { id: 3, name: "Strip Mall", location: "Oxnard, CA", year: "2023", image: "../src/assets/images/projects/retailCenters/retail4.jpeg" },
  { id: 4, name: "Retail Store", location: "Victorville, CA", year: "2023", image: "../src/assets/images/projects/retailCenters/retail3.jpg" },
  { id: 5, name: "Retail Center", location: "Westwood, CA", year: "2024", image: "../src/assets/images/projects/retailCenters/retail2.jpg" },
  { id: 6, name: "Strip Mall", location: "Barstow, CA", year: "2023", image: "../src/assets/images/projects/retailCenters/retail1.jpg" },
];

// const residentialProjectsCompleted = [
//   { name: "Two Story House", location: "Santa Barbara, CA", year: "2018", image: "../images/projects/houses/house4.jpg" },
//   { name: "Two Story House With a Pool", location: "Hollywood Hills, CA", year: "2019", image: "../images/projects/houses/house3.jpg" },
//   { name: "Two Story House", location: "San Jose, CA", year: "2018", image: "../images/projects/houses/house2.jpg" },
//   { name: "Three Story House", location: "Los Angeles, CA", year: "2018", image: "../images/projects/houses/house.jpg" },
// ];

// const residentialProjectsPending = [
//   { name: "Two Story House", location: "Santa Rosa, CA", year: "2023", image: "../images/projects/houses/house5.jpg" },
// ];

// const commercialProjectsCompleted = [
//   { name: "Fitness Center", location: "San Dimas, CA", year: "2023", image: "../images/projects/buildings/building5.jpg" },
//   { name: "Administrative Building", location: "Barstow, CA", year: "2023", image: "../images/projects/buildings/building4.jpg" },
// ];

// const commercialProjectsPending = [
//   { name: "Administrative Building", location: "Bishop, CA", year: "2023", image: "../images/projects/buildings/building4.jpg" },
//   { name: "Apartment Building", location: "Los Angeles, CA", year: "2023", image: "../images/projects/buildings/building3.jpg" },
//   { name: "Campus Library", location: "Berkley, CA", year: "2023", image: "../images/projects/buildings/building6.jpg" },
// ];

// const retailProjectsCompleted = [
//   { name: "Retail Center", location: "Thousand Oaks, CA", year: "2019", image: "../images/projects/retailCenters/retail5.jpg" },
//   { name: "Strip Mall", location: "Camarillo, CA", year: "2020", image: "../images/projects/retailCenters/retail6.jpg" },
// ];
// const retailProjectsPending = [
//   { name: "Strip Mall", location: "Oxnard, CA", year: "2023", image: "../images/projects/retailCenters/retail4.jpg" },
//   { name: "Retail Store", location: "Victorville, CA", year: "2023", image: "../images/projects/retailCenters/retail3.jpg" },
//   { name: "Retail Center", location: "Westwood, CA", year: "2024", image: "../images/projects/retailCenters/retail2.jpg" },
//   { name: "Strip Mall", location: "Barstow, CA", year: "2023", image: "../images/projects/retailCenters/retail1.jpg" },
// ];

export { navLinks, testimonials, residentialProjects, commercialProjects, retailProjects, projectsPreview, services };

// const projects = {
//   commercial: {
//     completed: [
//       { name: "Fitness Center", location: "San Dimas, CA", year: "2023", image: "../images/projects/buildings/building5.jpg" },
//       { name: "Administrative Building", location: "Barstow, CA", year: "2023", image: "../images/projects/buildings/building4.jpg" },
//     ],
//     underway: [
//       { name: "Administrative Building", location: "Bishop, CA", year: "2023", image: "../images/projects/buildings/building4.jpg" },
//       { name: "Apartment Building", location: ":ps Angeles, CA", year: "2023", image: "../images/projects/buildings/building3.jpg" },
//       { name: "Campus Library", location: "Berkley, CA", year: "2023", image: "../images/projects/buildings/building6.jpg" },
//     ],
//   },
//   residential: {
//     completed: [
//       { name: "Two Story House", location: "Santa Barbara, CA", year: "2018", image: "../images/projects/houses/house4.jpg" },
//       { name: "Two Story House With a Pool", location: "Hollywood Hills, CA", year: "2019", image: "../images/projects/houses/house3.jpg" },
//       { name: "Two Story House", location: "San Jose, CA", year: "2018", image: "../images/projects/houses/house2.jpg" },
//       { name: "Three Story House", location: "Los Angeles, CA", year: "2018", image: "../images/projects/houses/house.jpg" },
//     ],
//     underway: { name: "Two Story House", location: "Santa Rosa, CA", year: "2023", image: "../images/projects/houses/house5.jpg" },
//   },
//   retail: {
//     completed: [
//       { name: "Retail Center", location: "Thousand Oaks, CA", year: "2019", image: "../images/projects/retailCenters/retail5.jpg" },
//       { name: "Strip Mall", location: "Camarillo, CA", year: "2020", image: "../images/projects/retailCenters/retail6.jpg" },
//     ],
//     underway: [
//       { name: "Strip Mall", location: "Oxnard, CA", year: "2023", image: "../images/projects/retailCenters/retail4.jpg" },
//       { name: "Retail Store", location: "Victorville, CA", year: "2023", image: "../images/projects/retailCenters/retail3.jpg" },
//       { name: "Retail Center", location: "Westwood, CA", year: "2024", image: "../images/projects/retailCenters/retail2.jpg" },
//       { name: "Strip Mall", location: "Barstow, CA", year: "2023", image: "../images/projects/retailCenters/retail1.jpg" },
//     ],
//   },
// };
