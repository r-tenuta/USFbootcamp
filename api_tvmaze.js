async function searchShows(query) {
  const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
  let shows = response.data.map(result => {
    let show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : "https://tinyurl.com/tv-missing",
    };
  });

  return shows;
}

function populateShows(shows) {
  const $showsList = $("#showsList");
  $showsList.empty();

  for (let show of shows) {
    let item = $(
      `<div data-show-id="${show.id}" class="Show col-md-6 col-lg-3 mb-4">
         <div class="card" data-show-id="${show.id}">
           <img class="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button class="btn btn-primary get-episodes">Episodes</button>
           </div>
         </div>
       </div>
      `);

    $showsList.append(item);
  }
}

async function getEpisodes(id) {
  const response = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);

  let episodes = response.data.map(episode => ({
    id: episode.id,
    name: episode.name,
    season: episode.season,
    number: episode.number
  }));

  return episodes;
}

function populateEpisodes(episodes) {
  const $episodesList = $("#episodesList");
  $episodesList.empty();

  for (let episode of episodes) {
    let item = $(`<li>${episode.name} (season ${episode.season}, number ${episode.number})</li>`);
    $episodesList.append(item);
  }

  $("#episodesArea").show();
}

$("#searchForm").on("submit", async function handleSearch(evt) {
  evt.preventDefault();

  let query = $("#searchForm-term").val();
  if (!query) return;

  $("#episodesArea").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});

$("#showsList").on("click", ".get-episodes", async function handleEpisodeClick(evt) {
  let showId = $(evt.target).closest(".Show").data("show-id");
  let episodes = await getEpisodes(showId);
  populateEpisodes(episodes);
});


