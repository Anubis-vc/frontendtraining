import { SocialIcon } from 'react-social-icons'
function Header() {
	return (
		<header className='fixed flex items-center justify-center w-screen top-0 h-12 md:h-16 z-20 border-b-2 shadow-[4px_4px_0px_0px_black]'>
			<div className='flex justify-around items-center max-w-7xl mx-auto w-full xl:items-center'>
				<div className='flex md:space-x-7'>
					<SocialIcon
						bgColor='transparent'
						fgColor='black'
						target='_blank'
						url="https://www.twitter.com/notved"
					/>
					<SocialIcon
						bgColor='transparent'
						fgColor='black'
						target='_blank'
						url="https://www.linkedin.com/in/vedchugh/"
					/>
				</div>
				<h1 className='flex text-xl md:text-5xl'>
					Ved's Vork
				</h1>
				<div className='flex md:space-x-7'>
					<SocialIcon
						bgColor='transparent'
						fgColor='black'
						target='_blank'
						url="https://github.com/Anubis-vc"
					/>
					<SocialIcon
						bgColor='transparent'
						fgColor='black'
						target='_blank'
						url="https://letterboxd.com/vedchugh/"
					/>
				</div>
			</div>
		</header>
	)
}

export default Header