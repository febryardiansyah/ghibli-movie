function main() {
    const baseUrl = "https://ghibliapi.herokuapp.com/films"

    async function getMovie() {
        try {
            const response = await fetch(`${baseUrl}`)
            const responseJson = await response.json()
            renderAllMovies(responseJson)
        }
        catch (error) {
            showResponseMessage(error)
        }
    }

    const renderAllMovies = (movies) => {
        const listMovieElement = document.querySelector("#listmovie")
        listMovieElement.innerHTML = ""

        movies.forEach(movie => {
            // movie.description = movie.description.substring(0, 300)
            listMovieElement.innerHTML += `
            <div class="card mb-3" style="max-width: 30rem;">
            <div class="card-header bg-secondary text-white">${movie.title}</div>
            <div class="card-body">
              <p class="card-text">${movie.description}</p>
            </div>
            <div class="card-footer">
                Release Date : ${movie.release_date}
            </div>
          </div>
            `
        })
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    }

    document.addEventListener("DOMContentLoaded", () => {
        getMovie();
    })
}

export default main;
