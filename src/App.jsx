import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async"; // 1. Import Helmet
import Topbar from "./components/Topbar.jsx";
import Header from "./components/Header.jsx";
import Homepage from "./components/Homepage.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Content from "./components/Content.jsx";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";
import Story from "./components/Story.jsx";
import Our_taste from "./components/Our_taste.jsx";
import Guest from "./components/Guest.jsx";
import Our_menu from "./components/Our_menu.jsx";
import Brand from "./components/Brand.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Articles from "./components/Articles";
import BookTable from "./components/BookTable";

function App() {
  return (
    <HelmetProvider> {/* 2. Wrap everything in HelmetProvider */}
      <Router>
        <Topbar />
        <Header />
        
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={
            <main>
              <Helmet>
                <title>Little Lemon | Best Food for Your Taste</title>
                <meta name="description" content="Discover delectable cuisine and unforgettable moments in our culinary haven." />
              </Helmet>
              <Homepage /> 
              <Menu />
              <About />
              <Services />
              <Content />
              <Testimonial />
              <Blog />
            </main>
          } />

          {/* ABOUT PAGE */}
          <Route path="/about" element={
            <main>
              <Helmet>
                <title>About Us | Our Story & Values</title>
              </Helmet>
              <Story />
              <Our_taste />
              <Guest/>
              <Testimonial/>
            </main>
          } />

          {/* MENU PAGE */}
          <Route path="/menu" element={
            <>
              <Helmet>
                <title>Our Menu | Delectable Cuisine</title>
              </Helmet>
              <Our_menu />
              <Brand/>
            </>
          } />

          {/* ARTICLES/PAGES */}
          <Route path="/pages" element={
            <>
              <Helmet>
                <title>Articles & News | Little Lemon</title>
              </Helmet>
              <Articles />
            </>
          } />

          {/* CONTACT PAGE */}
          <Route path="/contact" element={
            <>
              <Helmet>
                <title>Contact Us | Get in Touch</title>
              </Helmet>
              <ContactUs />
            </>
          } />

          {/* BOOK A TABLE PAGE */}
          <Route path="/book" element={
            <>
              <Helmet>
                <title>Book A Table | Reserve Your Spot</title>
              </Helmet>
              <BookTable />
            </>
          } />
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;