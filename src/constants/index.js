import DickJones from "../assets/images/testimonials/dick-jones.jpg";
import SirPeterWayland from "../assets/images/testimonials/sir-peter-weyland.jpg";
import BorisBalkan from "../assets/images/testimonials/boris-balkan.jpg";

const navLinks = [
  { id: "home", value: "home" },
  { id: "services", value: "services" },
  { id: "projects", value: "projects" },
  { id: "testimonials", value: "testimonials" },
  { id: "contact", value: "contact" },
];

const headings = [
  { id: "services", title: "Our Services", description: "Explore the wide range of services that we offer." },
  { id: "projects", title: "Our Projects", description: "Browse through our recent and current endeavours." },
  { id: "testimonials", title: "Testimonials", description: "The reputation that we earned." },
  { id: "contact", title: "Contact Us", description: "Lets get in touch and start building dreams." },
];

const colors = { orange: "#db7a0a", green: "#3e7742" };

const services = [
  {
    id: "general",
    heading: "General Construction",
    text: "With over 20 years of experience we are ready to build your dreams!",
    image: "../src/assets/images/services/generalConstruction/crew.jpg",
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
    text: "We are more than happy to share our knowledge and expertise.",
    image: "../src/assets/images/services/consultation/consult2.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    rating: 5,
    testimonial: "StandFor did an amazing job repairing my office after the ED-209 incident.",
    name: "Dick Jones",
    designation: "Senior VP",
    company: "OCP",
    image: DickJones,
  },
  {
    id: 2,
    rating: 5,
    testimonial: "My new wine cellar is out of this world!",
    name: "Sir Peter Wayland",
    designation: "Founder/CEO",
    company: "Weyland Corporation",
    image: SirPeterWayland,
  },
  {
    id: 3,
    rating: 4.5,
    testimonial: "The new book vault is devlishly good!",
    name: "Boris Balkan",
    designation: "Founder/CEO",
    company: "Balkan Enterprises",
    image: BorisBalkan,
  },
];

const projectPreviews = [
  { id: 1, type: "Residential", image: "../src/assets/images/projects/houses/house2.jpg" },
  { id: 2, type: "Commercial", image: "../src/assets/images/projects/buildings/building4.jpg" },
  { id: 3, type: "Retail", image: "../src/assets/images/projects/retailCenters/retail6.jpg" },
];

const residentialProjects = [
  { id: 1, type: "Two Story House", location: "Santa Barbara, CA", year: "2018", image: "../src/assets/images/projects/houses/house4.jpg" },
  {
    id: 2,
    type: "Two Story House With a Pool",
    location: "Hollywood Hills, CA",
    year: "2019",
    image: "../src/assets/images/projects/houses/house3.jpg",
  },
  { id: 3, type: "Two Story House", location: "San Jose, CA", year: "2018", image: "../src/assets/images/projects/houses/house2.jpg" },
  { id: 4, type: "Three Story House", location: "Los Angeles, CA", year: "2018", image: "../src/assets/images/projects/houses/house.jpg" },
  { id: 5, type: "Two Story House", location: "Santa Rosa, CA", year: "2023", image: "../src/assets/images/projects/houses/house5.jpg" },
];

const commercialProjects = [
  { id: 1, type: "Fitness Center", location: "San Dimas, CA", year: "2023", image: "../src/assets//images/projects/buildings/building5.jpg" },
  { id: 2, type: "Administrative Building", location: "Barstow, CA", year: "2023", image: "../src/assets//images/projects/buildings/building4.jpg" },
  { id: 3, type: "Administrative Building", location: "Bishop, CA", year: "2023", image: "../src/assets//images/projects/buildings/project4.jpeg" },
  { id: 4, type: "Apartment Building", location: "Los Angeles, CA", year: "2023", image: "../src/assets//images/projects/buildings/building3.jpg" },
  { id: 5, type: "Campus Library", location: "Berkley, CA", year: "2023", image: "../src/assets/images/projects/buildings/building6.jpg" },
];

const retailProjects = [
  { id: 1, type: "Retail Center", location: "Thousand Oaks, CA", year: "2019", image: "../src/assets//images/projects/retailCenters/retail5.jpg" },
  { id: 2, type: "Strip Mall", location: "Camarillo, CA", year: "2020", image: "../src/assets/images/projects/retailCenters/retail6.jpg" },
  { id: 3, type: "Strip Mall", location: "Oxnard, CA", year: "2023", image: "../src/assets/images/projects/retailCenters/retail4.jpeg" },
  { id: 4, type: "Retail Store", location: "Victorville, CA", year: "2023", image: "../src/assets/images/projects/retailCenters/retail3.jpg" },
  { id: 5, type: "Retail Center", location: "Westwood, CA", year: "2024", image: "../src/assets/images/projects/retailCenters/retail2.jpg" },
  { id: 6, type: "Strip Mall", location: "Barstow, CA", year: "2023", image: "../src/assets/images/projects/retailCenters/retail1.jpg" },
];

export { navLinks, testimonials, residentialProjects, commercialProjects, retailProjects, projectPreviews, services, headings, colors };
