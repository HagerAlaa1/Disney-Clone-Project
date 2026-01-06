import Cards from '../components/Cards'

function Features() {
  return (
    <div>
        <Cards>
           <section className='md:grid md:grid-cols-3'>
             <img src='/public/images/usp_entertainment_1.webp' alt='Endless entertainment'/>
            <h2>Endless entertainment</h2>
            <h3>Explore thousands of hours of TV series, movies and originals.</h3>
           </section>
           <section>
             <img src='/public/images/usp_fav_device_1.webp' alt='Available on your favourite devices'/>
            <h2>Available on your favourite devices</h2>
            <h3>Stream on up to 4 screens at once on compatible devices.</h3>
           </section>
           <section>
             <img src='/public/images/usp_parental_control_1.webp' alt='Easy-to-use parental controls'/>
            <h2>Easy-to-use parental controls</h2>
            <h3>Keep your family safe with our intuitive parental controls.</h3>
           </section>
        </Cards>
    </div>
  )
}

export default Features
