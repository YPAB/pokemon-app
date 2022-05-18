import { Link } from "react-router-dom";

export const PokemonCard = ({ id,nombre }) => {

    const imagePath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png
    //const imagePath = `${process.env.PUBLIC_URL}/assets/${id}.jpg`;


  return (
    
        <div className='col'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={imagePath} className='card-img' alt={nombre} />
                    </div>

                    <div className='col-8'>
                        <div className='card-body'>
                            <h4 className='card-title'><b>{ nombre }</b></h4>

                            <Link to={`/pokemon/${id}`}>
                                Mas Información ...
                            </Link>

                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    
    
  )
}
