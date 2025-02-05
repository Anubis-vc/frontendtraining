import { SocialIcon } from 'react-social-icons'
function Header() {
  return (
	<header className='fixed w-screen flex items-center justify-around top-0 
	h-16 md:h-20 z-20 p-5 border-b-2 shadow-[4px_4px_0px_0px_black]'>
		<div className='space-x-5'>
			<SocialIcon
				target='_blank'
				url="https://www.twitter.com/notved"
			/>
			<SocialIcon
				target='_blank'
				url="https://www.linkedin.com/in/vedchugh/"
			/>
		</div>
		<h1 className='text-5xl'>
			Ved's Frontend
		</h1>
		<div className='space-x-5'>
			<SocialIcon
				target='_blank'
				url="https://github.com/Anubis-vc"
			/>
			<SocialIcon
				target='_blank'
				url="https://letterboxd.com/vedchugh/"
			/>
		</div>
	</header>
  )
}

export default Header