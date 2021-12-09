import { createContext  } from "react";

const SpeakerContext = createContext();

const SpeakerProvider = ({children, speaker, setSpeaker, insertRecord, deleteRecord, }) => {
    return(
    <SpeakerContext.Provider value={{speaker, setSpeaker, insertRecord, deleteRecord}}>
        {children}
    </SpeakerContext.Provider>);
};

export { SpeakerContext, SpeakerProvider };