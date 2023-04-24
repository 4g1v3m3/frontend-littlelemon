import "./styles/About.css"
import image1 from "./assets/Mario and Adrian A.jpg"
import image2 from "./assets/Mario and Adrian b.jpg"
import image3 from "./assets/restaurant chef B.jpg"

const About = () => {
  return (
    <div className="About">
      <div className="about-container">
        <div className="about-desc">
          <p className="about">Welcome to Little Lemon Restaurant, a cozy and vibrant dining spot in the heart of the city, where the culinary magic happens every day. Meet Mario and Adrian, the two co-owners and chefs behind the mouth-watering dishes that have been delighting customers for years.</p>
          <p className="about">Mario and Adrian are passionate foodies with a strong commitment to using fresh, locally sourced ingredients in their cooking. Their love for cooking started at a young age, as they both grew up in families where food was a central part of everyday life. Over the years, they honed their skills through rigorous training and hands-on experience in some of the most prestigious restaurants in the world.</p>
        </div>
        <div className="about-image-container"><img src={image1} className="about-image" /></div>
      </div>
      <div className="about-container">
        <div className="about-image-container"><img src={image3} className="about-image" /></div>
        <div className="about-desc">
          <p className="about">Together, they decided to create their own restaurant, where they could showcase their unique culinary talents and share their passion for food with others. Little Lemon Restaurant was born, and since then, it has been a huge success, attracting foodies from all over the city and beyond.</p>
          <p className="about">Mario and Adrian's menu is a reflection of their diverse culinary backgrounds and their commitment to innovation and creativity. They are constantly experimenting with new flavors and techniques, using only the finest ingredients to create dishes that are both beautiful and delicious. Whether you're in the mood for a classic Italian pasta dish, a hearty steak, or a fresh salad, you'll find something to love at Little Lemon Restaurant.</p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-desc">
          <p className="about">At Little Lemon, Mario and Adrian pride themselves on providing exceptional service, and they go above and beyond to make sure that every customer feels welcome and valued. They believe that food is not just about sustenance, but about bringing people together and creating memories that will last a lifetime.</p>
          <p className="about">So come and visit us at Little Lemon Restaurant, and experience the culinary magic of Mario and Adrian for yourself. We promise you won't be disappointed.</p>
        </div>
        <div className="about-image-container"><img src={image2} className="about-image" /></div>
      </div>
    </div>
  )
}

export default About