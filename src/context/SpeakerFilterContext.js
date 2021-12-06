import React, { createContext } from 'react';
import useSpeakerFilter from '../hooks/useSpeakerFIlter';

export const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({
    children, 
    defaultShowSessions = false,
    defaultEventYear = '2017'
}) {
    const { 
        showSessions, 
        setShowSessions,
        eventYear, 
        setEventYear,
        searchQuery,
        setSearchQuery,
        EVENT_YEARS
    } = useSpeakerFilter(defaultShowSessions, defaultEventYear);

    return (
    <SpeakerFilterContext.Provider value={{
        showSessions, 
        setShowSessions,
        eventYear,
        setEventYear,
        searchQuery,
        setSearchQuery,
        EVENT_YEARS
    }}>
        {children}
    </SpeakerFilterContext.Provider>)
};

export { SpeakerFilterProvider };
