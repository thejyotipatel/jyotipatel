const Hero = () => {
  return (
    <main className='container'>
      <section className='home' id='home'>
        <h1 className='name'>Hi there, I'm Jyoti</h1>
        <p>
          a software developer. I love coming up with cool ideas and always
          learning new stuff in the tech world.
        </p>

        <div className='language-icons | space-margin-top'>
          <div className='s-icon'>
            <i className='fa-brands fa-react' style={{ color: ' #00D8FF' }}></i>
          </div>

          <div className='md-icons'>
            <div className='icon'>
              <i
                className='fa-brands fa-square-js'
                style={{ color: '#ffd43b' }}
              ></i>
            </div>

            <img
              className='icon'
              src='/tailwindcss.svg'
              alt='tailwindcss.svg'
            />

            <div className='icon'>
              <i
                className='fa-brands fa-git-alt icon'
                style={{ color: '#f03c2e' }}
              ></i>
            </div>
            <img className='icon' src='/chakaraUi.jpg' alt='chakara Ui' />
          </div>

          <div className='l-icon'>
            <i className='fa-brands fa-sass ' style={{ color: '#cf649a' }}></i>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Hero
