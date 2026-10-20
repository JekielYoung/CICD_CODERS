// MEMBER B: Implement the search feature.
// TODO 1: Return true when query is empty or only spaces.
// TODO 2: Otherwise return true only when the event's title OR location
//         contains the query (case-insensitive).
// Hint: .trim(), .toLowerCase(), .includes()

window.matchesSearch = function (event, query) {

  const q = (query || "").trim().toLowerCase();
  if (q === "") return true;

  const title = (event.title || "").toLowerCase();
  const location = (event.location || "").toLowerCase();
  return title.includes(q) || location.includes(q);
};
