import React from 'react';
import { motion } from 'motion/react';
import { Lock, Play, Download, ExternalLink } from 'lucide-react';
import { TRACKS, SOCIAL_LINKS, SPOTIFY_CONFIG } from '../constants';

export default function ExclusiveContent() {
  const [playingTrack, setPlayingTrack] = React.useState<string | null>(null);
  const [loadingTrack, setLoadingTrack] = React.useState<string | null>(null);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const togglePlay = async (trackId: string, audioUrl?: string) => {
    if (!audioUrl || !audioRef.current) return;

    try {
      if (playingTrack === trackId) {
        audioRef.current.pause();
        setPlayingTrack(null);
      } else {
        setLoadingTrack(trackId);
        
        // Reset current audio
        audioRef.current.pause();
        audioRef.current.src = audioUrl;
        
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          setPlayingTrack(trackId);
        }
      }
    } catch (error) {
      console.error("Playback failed:", error);
      setPlayingTrack(null);
      alert("Playback failed. This might be due to browser restrictions or a temporary connection issue. Please try again.");
    } finally {
      setLoadingTrack(null);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${filename}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. You can try right-clicking the play button and "Save link as".');
    }
  };

  const handleSpotifyAuth = () => {
    if (!SPOTIFY_CONFIG.clientId) {
      // If no client ID, just link to the artist profile as a fallback
      window.open(SOCIAL_LINKS.spotify, '_blank');
      return;
    }

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CONFIG.clientId}&response_type=token&redirect_uri=${encodeURIComponent(SPOTIFY_CONFIG.redirectUri)}&scope=${encodeURIComponent(SPOTIFY_CONFIG.scopes)}`;
    window.location.href = authUrl;
  };

  const handleAppleMusic = () => {
    window.open(SOCIAL_LINKS.appleMusic, '_blank');
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const shareTrack = (title: string) => {
    const shareUrl = window.location.href;
    const text = `Check out ${title} by SHOY! #SHOY #GlobalBass`;
    
    if (navigator.share) {
      navigator.share({
        title: 'SHOY Music',
        text: text,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(`${text} ${shareUrl}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section id="music" className="py-24 px-6 bg-surface">
      <audio 
        ref={audioRef} 
        onEnded={() => setPlayingTrack(null)} 
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onError={() => {
          setPlayingTrack(null);
          setLoadingTrack(null);
        }}
        preload="auto"
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif italic font-bold mb-4">The Vault</h2>
            <p className="text-white/50 font-mono text-sm tracking-widest uppercase">Exclusive Music & Early Access</p>
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 border border-brand text-brand font-mono text-xs tracking-widest hover:bg-brand hover:text-black transition-all"
          >
            JOIN INNER CIRCLE
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Featured Release */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-2xl aspect-square lg:aspect-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1000" 
              alt="Featured Release"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-brand font-mono text-xs mb-2">NEW EXCLUSIVE</span>
              <h3 className="text-3xl font-bold mb-4">LAGOS NIGHT DRIVE</h3>
              
              {playingTrack === '1' && (
                <div className="mb-4">
                  <input 
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-brand"
                  />
                  <div className="flex justify-between mt-1 text-[10px] font-mono text-white/40">
                    <span>{formatTime(currentTime)}</span>
                    <span>-{formatTime(duration - currentTime)}</span>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <button 
                  onClick={() => togglePlay('1', TRACKS[0].previewUrl)}
                  disabled={loadingTrack !== null}
                  className="p-3 bg-brand text-black rounded-full hover:scale-110 transition-transform disabled:opacity-50"
                >
                  {loadingTrack === '1' ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent animate-spin rounded-full" />
                  ) : playingTrack === '1' ? (
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-1 h-4 bg-black mx-0.5" />
                      <div className="w-1 h-4 bg-black mx-0.5" />
                    </div>
                  ) : (
                    <Play size={20} />
                  )}
                </button>
                <button 
                  onClick={() => handleDownload(TRACKS[0].previewUrl!, 'LAGOS_NIGHT_DRIVE')}
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                >
                  <Download size={20} />
                </button>
                <button 
                  onClick={() => shareTrack('LAGOS NIGHT DRIVE')}
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                >
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Track List */}
          <div className="space-y-4">
            {TRACKS.map((track, i) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col p-4 border-b border-white/5 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <span className="text-white/20 font-mono text-xs">0{i + 1}</span>
                    <div>
                      <h4 className="font-bold group-hover:text-brand transition-colors">{track.title}</h4>
                      <span className="text-white/40 text-[10px] font-mono">{track.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {track.isExclusive ? (
                      <div className="flex items-center gap-2 px-2 py-1 bg-brand/10 text-brand text-[10px] font-mono rounded">
                        <Lock size={10} /> EXCLUSIVE
                      </div>
                    ) : (
                      <button 
                        onClick={() => shareTrack(track.title)}
                        className="p-2 text-white/20 hover:text-brand transition-colors"
                      >
                        <ExternalLink size={16} />
                      </button>
                    )}
                    <button 
                      onClick={() => handleDownload(track.previewUrl!, track.title.replace(/\s+/g, '_'))}
                      className="p-2 text-white/20 hover:text-brand transition-colors"
                      title="Download"
                    >
                      <Download size={16} />
                    </button>
                    <button 
                      className="p-2 text-white/20 hover:text-[#FA243C] transition-colors"
                      title="Listen on Apple Music"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.35,11.51c0-2.32,1.9-3.43,1.98-3.48c-1.08-1.58-2.76-1.8-3.36-1.83c-1.43-0.14-2.8,0.84-3.52,0.84 c-0.72,0-1.88-0.83-3.09-0.81c-1.59,0.02-3.06,0.93-3.88,2.35c-1.65,2.87-0.42,7.12,1.18,9.43c0.78,1.13,1.71,2.4,2.94,2.35 c1.18-0.05,1.63-0.76,3.05-0.76c1.42,0,1.83,0.76,3.08,0.74c1.27-0.02,2.07-1.14,2.85-2.27c0.89-1.31,1.26-2.57,1.28-2.63 C19.83,14.72,17.35,13.77,17.35,11.51z M14.88,5.92c0.64-0.78,1.07-1.85,0.95-2.93c-0.92,0.04-2.04,0.61-2.7,1.39 c-0.59,0.69-1.11,1.78-0.97,2.84C13.1,7.27,14.23,6.7,14.88,5.92z"/>
                      </svg>
                    </button>
                    <button 
                      onClick={() => togglePlay(track.id, track.previewUrl)}
                      disabled={loadingTrack !== null}
                      className="p-2 hover:text-brand transition-colors disabled:opacity-50"
                    >
                      {loadingTrack === track.id ? (
                        <div className="w-4 h-4 border-2 border-brand border-t-transparent animate-spin rounded-full" />
                      ) : playingTrack === track.id ? (
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-4 bg-brand" />
                          <div className="w-1.5 h-4 bg-brand" />
                        </div>
                      ) : (
                        <Play size={16} />
                      )}
                    </button>
                  </div>
                </div>
                
                {playingTrack === track.id && (
                  <div className="mt-2 px-8">
                    <input 
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-brand"
                    />
                    <div className="flex justify-between mt-1 text-[10px] font-mono text-white/40">
                      <span>{formatTime(currentTime)}</span>
                      <span>-{formatTime(duration - currentTime)}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
            
            <div className="pt-8">
              <div className="p-8 glass rounded-2xl text-center">
                <h4 className="text-xl font-bold mb-2">Unlock the Full Catalog</h4>
                <p className="text-white/60 text-sm mb-6">Get access to unreleased demos, stems, and high-fidelity vinyl masters.</p>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={handleSpotifyAuth}
                    className="w-full py-4 bg-white text-black font-bold rounded-sm hover:bg-brand transition-colors flex items-center justify-center gap-2"
                  >
                    AUTHENTICATE WITH SPOTIFY
                  </button>
                  <button 
                    onClick={handleAppleMusic}
                    className="w-full py-4 border border-white/20 text-white font-bold rounded-sm hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    LISTEN ON APPLE MUSIC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
