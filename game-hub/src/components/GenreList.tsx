import useGenres from "../hooks/useGenres"


const GenreList = () => {
    const ghook = useGenres();
  return (
    
    <ul>
        {ghook.genres.map((genre) => <li>{ genre.name }</li>)}
    </ul>
  )
}

export default GenreList
