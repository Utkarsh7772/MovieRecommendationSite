document.addEventListener("DOMContentLoaded", function () {
  {
    // run every 5 sec to update login btn
    setInterval(() => {
      user = localStorage.getItem("user");
      if (user != null) {
        document.getElementById("lgn-btn").innerHTML = user;
      } else {
        document.getElementById("lgn-btn").innerHTML = "Login";
      }
    }, 5000);
  }
  {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };
    const imgtag = document.getElementById("bg-img");
    const imgtag2 = document.getElementById("up-next");
    const title = document.getElementById("movie-title");
    const queue = [];

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          const movie = response.results[i];
          queue.push(movie);
        }
        setInterval(() => {
          const background = queue.shift().backdrop_path;
          imgtag.src = "https://image.tmdb.org/t/p/original" + background;
          const nextMovie = queue[0];
          imgtag2.src =
            "https://image.tmdb.org/t/p/original" + nextMovie.backdrop_path;
          title.innerHTML = nextMovie.title;
          queue.push(nextMovie);
        }, 5000);
      })
      .catch((err) => console.error(err));
  }
  {
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.onclick = function () {
      navigation.classList.toggle("active");
    };
  }
  {
    const trending = document.querySelector(".trending .row");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          trending.innerHTML += `
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
  {
    const upcoming = document.querySelector(".upcoming .row");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          upcoming.innerHTML += `
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
  {
    const playing = document.querySelector(".playing .row");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          playing.innerHTML += `
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
  {
    const rated = document.querySelector(".rated .row");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          rated.innerHTML += `
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
  {
    const slider = document.querySelectorAll(".items");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.forEach((item) => {
      item.addEventListener("mousedown", (e) => {
        isDown = true;
        item.classList.add("active");
        startX = e.pageX - item.offsetLeft;
        scrollLeft = item.scrollLeft;
      });
      item.addEventListener("mouseleave", () => {
        isDown = false;
        item.classList.remove("active");
      });
      item.addEventListener("mouseup", () => {
        isDown = false;
        item.classList.remove("active");
      });
      item.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - item.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        item.scrollLeft = scrollLeft - walk;
        // console.log(walk);
      });
    });
  }
  {
    const action = document.querySelector(".action .page");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=action",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          action.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=action",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          action.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=action",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          action.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=action",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          action.innerHTML += `
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
  {
    const animation = document.querySelector(".animation .page");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=animation",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          animation.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=animation",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          animation.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=animation",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          animation.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=animation",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          animation.innerHTML += `
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
  {
    const adventure = document.querySelector(".adventure .page");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=adventure",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          adventure.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=adventure",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          adventure.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=adventure",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          adventure.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=adventure",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          adventure.innerHTML += `
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
  {
    const comedy = document.querySelector(".comedy .page");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=comedy",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          comedy.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=comedy",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          comedy.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=comedy",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          comedy.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=comedy",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          comedy.innerHTML += `
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
  {
    const crime = document.querySelector(".crime .page");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=crime",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          crime.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=crime",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          crime.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=crime",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          crime.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=crime",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          crime.innerHTML += `
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
  {
    const horror = document.querySelector(".horror .page");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=horror",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          horror.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=horror",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          horror.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=horror",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          horror.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=horror",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          horror.innerHTML += `
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
  {
    const drama = document.querySelector(".drama .page");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=drama",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          drama.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=drama",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          drama.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=drama",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          drama.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=drama",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          drama.innerHTML += `
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
  {
    const fantasy = document.querySelector(".fantasy .page");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=fantasy",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          fantasy.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=fantasy",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          fantasy.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=fantasy",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          fantasy.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=fantasy",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          fantasy.innerHTML += `
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
  {
    const family = document.querySelector(".family .page");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=family",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          family.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=family",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          family.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=family",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          family.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=family",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          family.innerHTML += `
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
  {
    const romance = document.querySelector(".romance .page");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=romance",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          romance.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=romance",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          romance.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=romance",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          romance.innerHTML += `
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=romance",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 10; i++) {
          romance.innerHTML += `
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
  {
    const science = document.querySelector(".science .page");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=Science%20Fiction",
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
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=Science%20Fiction",
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
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=Science%20Fiction",
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
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=Science%20Fiction",
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
  }
  {
    const search = document.getElementById("search");
    const btn = document.querySelector(".search-btn");
    btn.addEventListener("click", () => {
      const searchQuery = search.value;
      localStorage.setItem("search", searchQuery);
      window.location.href = "search.html";
    });
    // on pressing enter
    search.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        const searchQuery = search.value;
        localStorage.setItem("search", searchQuery);
        window.location.href = "search.html";
      }
    });
  }
});
