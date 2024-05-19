import AddImage from '@/app/addImage/page';
import ImageList from '@/components/ImageList';

const ImageApp = () => {
  const [images, setImages] = useState([]);

  const addImage = (image) => {
    setImages([...images, image]);
  };

  return (
    <div>
      <AddImage addImageSubmit={addImage} />
      {images.map((img, index) => (
        <ImageList key={index} img={img} />
      ))}
    </div>
  );
};

export default ImageApp;
