// src/components/BackgroundMusic.tsx
import { useEffect, useRef, useState } from 'react';
import { Button, Frame } from '@react95/core';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch((e) => {
          console.warn('Autoplay prevented:', e);
        });
      }
    };

    // Toca após o primeiro clique do usuário
    window.addEventListener('click', playAudio, { once: true });

    return () => {
      window.removeEventListener('click', playAudio);
    };
  }, [isPlaying]);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/assets/hotBlood.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div style={{ position: 'fixed', bottom: -4, left: 60, zIndex: 999 }}>
        <Frame variant="well" style={{ padding: 6 }}>
          <Button onClick={toggleAudio}>
            {isPlaying ? '🔊 Pause Music' : '🔇 Play Music'}
          </Button>
        </Frame>
      </div>
    </>
  );
}
