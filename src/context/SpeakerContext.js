import { createContext  } from "react";

const SpeakerContext = createContext();

const SpeakerProvider = ({children, speaker, setSpeaker }) => {
    return(
    <SpeakerContext.Provider value={{speaker, setSpeaker}}>
        {children}
    </SpeakerContext.Provider>);
};

export { SpeakerContext, SpeakerProvider };