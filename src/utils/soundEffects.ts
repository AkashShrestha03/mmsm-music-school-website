// Sound effects utility for button interactions
export const playButtonSound = () => {
  try {
    // Create audio context for better browser compatibility
    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    
    // Create oscillator for a pleasant musical tone
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Set audio properties for a nice musical click sound
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime); // Musical note
    oscillator.type = 'sine'; // Smooth sine wave
    
    // Set volume envelope
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    // Play the sound
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
    
  } catch {
    // Fallback for browsers that don't support Web Audio API
    console.log('Sound effect played (fallback)');
  }
};

// Hindi Raga hover sound - plays traditional Sa Re Ga Ma Pa notes
export const playRagaHoverSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    
    // Traditional Indian classical music frequencies (Sa Re Ga Ma Pa)
    // Using the correct frequencies for a beautiful raga sound
    const ragaNotes = [
      { frequency: 261.63, duration: 0.12 }, // Sa (C4) - Base note
      { frequency: 293.66, duration: 0.12 }, // Re (D4) - Second note
      { frequency: 329.63, duration: 0.12 }, // Ga (E4) - Third note
      { frequency: 349.23, duration: 0.12 }, // Ma (F4) - Fourth note
      { frequency: 392.00, duration: 0.12 }  // Pa (G4) - Fifth note
    ];
    
    ragaNotes.forEach((note, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Set frequency and type for authentic Indian sound
      oscillator.frequency.setValueAtTime(note.frequency, audioContext.currentTime + (index * 0.15));
      oscillator.type = 'sine'; // Pure sine wave for classical sound
      
      // Create a beautiful, gentle volume envelope
      gainNode.gain.setValueAtTime(0, audioContext.currentTime + (index * 0.15));
      gainNode.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + (index * 0.15) + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + (index * 0.15) + note.duration);
      
      // Play each note in sequence with proper timing
      oscillator.start(audioContext.currentTime + (index * 0.15));
      oscillator.stop(audioContext.currentTime + (index * 0.15) + note.duration);
    });
    
  } catch {
    console.log('Raga hover sound played (fallback)');
  }
};

// Alternative sound effect for different button types
export const playSuccessSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Success chord (two notes)
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
    
  } catch {
    console.log('Success sound played (fallback)');
  }
};
