document.addEventListener("DOMContentLoaded", function () {
  {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };
    const show = document.querySelector(".search .page");
    const sh = document.querySelector(".sh");
    searchQuery = localStorage.getItem("search");
    sh.innerHTML = `Search results for "${searchQuery}"`;
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const movieID = response.results[0].id;
        show.innerHTML = "";
        const science = document.querySelector(".similar .page");
        fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/similar?language=en-US&page=1`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            for (let i = 0; i < 10; i++) {
              science.innerHTML += `
                    <div class="card">  
                        <div class="rate">
                          ${response.results[i].vote_average.toFixed(1)}
                        </div>
                      <div class="content">
                        <div class="front">
                          <img src="https://image.tmdb.org/t/p/original${
                            response.results[i].poster_path
                          }" alt="" />
                        </div>
                        <div class="back">
                          <h3>${response.results[i].title}</h3>
                          <p>${response.results[i].overview}</p>
                        </div>
                      </div>
                    </div>
                  `;
            }
          })
          .catch((err) => console.error(err));
        fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/similar?language=en-US&page=2`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            for (let i = 0; i < 10; i++) {
              science.innerHTML += `
                    <div class="card">
                        <div class="rate">
                          ${response.results[i].vote_average.toFixed(1)}
                        </div>
                      <div class="content">
                        <div class="front">
                          <img src="https://image.tmdb.org/t/p/original${
                            response.results[i].poster_path
                          }" alt="" />
                        </div>
                        <div class="back">
                          <h3>${response.results[i].title}</h3>
                          <p>${response.results[i].overview}</p>
                        </div>
                      </div>
                    </div>
                  `;
            }
          })
          .catch((err) => console.error(err));
        for (let i = 0; i < 4; i++) {
          show.innerHTML += `
                <div class="card">
                    <div class="rate">
                      ${response.results[i].vote_average.toFixed(1)}
                    </div>
                  <div class="content">
                    <div class="front">
                      <img src="https://image.tmdb.org/t/p/original${
                        response.results[i].poster_path
                      }" alt="" />
                    </div>
                    <div class="back">
                      <h3>${response.results[i].title}</h3>
                      <p>${response.results[i].overview}</p>
                    </div>
                  </div>
                </div>
              `;
        }
      })
      .catch((err) => console.error(err));
  }
});
