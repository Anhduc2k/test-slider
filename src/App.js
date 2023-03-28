import "./App.css";
import HorizontalSlideShow from "./components/HorizontalSlideShow";

const imgSlider = [
  {
    src: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/m1.png",
    alt: "Messi 1",
    description: "Active 1",
  },
  {
    src: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/phonics.jpg",
    alt: "Messi 2",
    description: "Active 2",
  },
  {
    src: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/flashcard.jpg",
    alt: "Messi 3",
    description: "Active 3",
  },
  {
    src: "https://monkeymedia.vcdn.com.vn/upload/web/img_default/m4.png",
    alt: "Messi 4",
    description: "Active 4"
  },
];

function App() {
  return (
    <HorizontalSlideShow item={imgSlider} />
  )
}

export default App;
