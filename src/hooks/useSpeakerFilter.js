import { useState } from "react";

function useSpeakerFilter(defaultShowSessions, defaultEventYear) {
    console.log(defaultEventYear)
  const [showSessions, setShowSessions] = useState(defaultShowSessions);
  const [eventYear, setEventYear] = useState(defaultEventYear);
  const [searchQuery, setSearchQuery] = useState("");

  const EVENT_YEARS = [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
  ];

  return {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS,
  };
}

export default useSpeakerFilter;