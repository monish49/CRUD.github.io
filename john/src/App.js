import react,{useState,useEffect, useRef} from "react";
const App = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [value,onChange]=useState(1);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

   useEffect(()=>{
      const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  })

  
  const mouse = document.querySelector('.buble')
  const container=document.querySelector('.fill')
  const Inputrange = document.querySelector('.range')

  window.addEventListener('mousemove', function(){
    container.style.filter = "brightness(" + Inputrange.value + "%)";

  })

  return (
    <>
      <div style={styles.container}>
        <input
          accept="image/*"
          type="file"
          onChange={imageChange}
        />

        

        {selectedImage && (
          <div style={styles.preview}>
            <div className="fill">
            <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
              width={'250px'}
              height={'200px'}
            />
            </div>
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove This Image
            </button>
          </div>
        )}
      </div>
      <div className="slider-parent">
      <input type="range" min="1" max="500" className='range' value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
      />
      <div className="buble"> 
      {value}
      </div>
    </div>
    </>
  );
};

export default App;

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
  
};