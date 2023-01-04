import { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants'


import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className="app__video"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      <video
        src={meal} ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      {isShown &&
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={handleVideo} >
            {
              playVideo
                ? <BsPauseFill color='#f0f8ff' fontSize={30} />
                : <BsFillPlayFill color='#f0f8ff' fontSize={30} />
            }
          </div>
        </div>
      }




    </div>
  )
}

export default Intro;
