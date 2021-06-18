import SpeechRecognition from 'react-speech-recognition';

import { IconButton } from '@material-ui/core'

import { Mic as MicIcon } from '@material-ui/icons';


export default ({ getSpeechRecognitionResult }: any) => {
  const listenOnce = () => {
    console.log(getSpeechRecognitionResult)
    SpeechRecognition.startListening({ continuous: false });
    (SpeechRecognition.getRecognition() as any).onresult = (event: any) => {
      getSpeechRecognitionResult(event.results[0][0].transcript)
    }
  }

  return (
    <IconButton type="submit" aria-label="voice" edge="end" onClick={listenOnce}>
      <MicIcon />
    </IconButton>
  )
}
