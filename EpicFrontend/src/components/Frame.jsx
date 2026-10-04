import '../assets/css/Frame.css';


function Frame({title, image, alt, sound, text}) {
  const VoiceStart = () => {
    var audio = document.getElementById(`${title}Voice`);
    audio.play();
    /*var audio2 = document.getElementById("EpicSong");
    audio2.volume = 0.3;
    audio2.play();*/
  }
  const VoiceStop = () => {
    var audio3 = document.getElementById(`${title}Voice`);
    audio3.currentTime = 0;
    audio3.pause();
  }
  return (
    <div className="inLineBlock">
      <p className='title'>{title}</p>
      <div className="frontPageHeroes">
        <audio id={`${title}Voice`} src={sound}/>
        <a href={`/${title}Cards`}>
          <img src={image} alt={alt} onBlur={() => VoiceStop()} onClick={() => VoiceStart}/>
        </a>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Frame;
