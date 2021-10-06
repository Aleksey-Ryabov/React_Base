import '../starwars.css'

export const Hero = ({hero})=> {
    console.log(hero)
    return (
        <div>
            <p className='hero-name'>{hero.name}</p>
            <p className='hero-p'>weight: {hero.mass}</p>
            <p className='hero-p'>height: {hero.height}</p>
            <p className='hero-p'>gender: {hero.gender}</p>
        </div>

    )
}