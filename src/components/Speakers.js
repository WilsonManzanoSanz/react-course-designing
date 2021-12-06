import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { SpeakerFilterProvider } from '../context/SpeakerFilterContext';

function Speakers() {

  return (
    <SpeakerFilterProvider defaultShowSessions={false} defaultEventYear="2017">
      <SpeakersToolbar />
      <SpeakersList />
    </SpeakerFilterProvider>
  );
}

export default Speakers;
