import '../index.css';
const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        <p>Aca va un texto</p>
      </div>
      <div className="footer-cont">
        <img src="./images/DH.png" alt='DH-logo' />
        <div className='icons'>
          <img src="/images/ico-facebook.png" alt="icon facebook" />
          <img src="/images/ico-instagram.png" alt="icon instagram" />
          <img src="/images/ico-tiktok.png" alt="icon tiktok" />
          <img src="/images/ico-whatsapp.png" alt="icon whatsapp" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
