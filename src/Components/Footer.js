import React from 'react'

const Footer = () => {
  return (
    <footer>
            <div className="w-screen h-7 md:h-10 flex justify-between items-center px-4 md:px-14 bg-slate-800 text-white text-xs md:text-sm">
              <p>
                ©️ Movies GPT. <span className='hidden md:inline-block'>All rights reserved</span>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/tarun-sai-thota-53436211b/">Linkedin🔗 </a>
                <a href="https://github.com/tarunsaithota?tab=repositories"> GitHub🔗</a>
              </p>
            </div>
          </footer>
  )
}

export default Footer