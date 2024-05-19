const ImageApp = () => {
  const [images, setImages] = useState([]);

  const addImage = (image) => {
    setImages([...images, image]);
    console.log(props);
  };

  return (
    <div>
      <addImage addImageSubmit={addImage} />
      {images.map((img, index) => (
        <imageList key={index} img={img} />
      ))}
    </div>
  );
};
