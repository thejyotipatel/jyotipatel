const Navbar = () => {
  return (
    <div className='container header'>
      <div className='logo'>
        <a href='/'>theJYOTIpatel</a>
      </div>

      <div className='contact-btns'>
        <a className='contact-btn' href='https://github.com/thejyotipatel'>
          <i
            className='fa-brands fa-square-github'
            style={{ color: '#000000' }}
          ></i>
        </a>
        <a className='contact-btn' href='https://twitter.com/thejyotipatel'>
          <i
            className='fa-brands fa-square-twitter'
            style={{ color: '#146ebe' }}
          ></i>
        </a>
        <a
          className='contact-btn'
          href='https://www.linkedin.com/in/jyoti-patel-352b921a2'
        >
          <i className='fa-brands fa-linkedin' style={{ color: '#146ebe' }}></i>
        </a>
      </div>
    </div>
  )
}
export default Navbar
