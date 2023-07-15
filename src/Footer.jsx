import React from 'react'
function Footer() {
  const date=new Date().getFullYear()
  return (
    <div className='footbody'>
     

      <div className='hart'>
        Made with 
        <div className='heart'> &hearts; </div> 
        Sarthak |
    
      Copyright &copy; {date}
      </div>
    </div>
  )
}

export default Footer;