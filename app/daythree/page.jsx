import ConfirmButton from "@/components/ConfirmButton/ConfirmButton"
import HelpButton from "@/components/CopyButton/CopyButton"
import ExternalLink from "@/components/ExternalLink/ExternalLink"
import Navbar from "@/components/Navbar/Navbar"

function daythree() {
	return (
		<div className='page'>
			<Navbar />
			<div className="content-wrapper">
				<h1 className='content-title'>Պրակտիկա 3:<span> Մեդիապլանի կազմում</span></h1>
				<div className='text-container'>
					<h2 className='content-subtitle'>Առաջադրանք՝</h2>
					<p className='text'>1․Քայլերով ներկայացնել համակարգում գովազդի ակտիվացման մեխանիզմները</p>
					<p className='text'>Ընկերության անուն՝ <HelpButton label='Media Systems' /></p>
					<p className='text'>Տեղադրման տեսակ՝ <HelpButton label='Catfish' /></p>
					<p className="text">ժամանակահատված՝ 1 ամիս</p>
					<p className="text">Հղում՝ <HelpButton label='https://mediasystems.am/' /></p>
					<p className="text">Ծավալ՝ 8 000 000</p>
					<p className="text">
						Վիզուալ՝ <ExternalLink label='https://drive.google.com/file/d/1SjG0op4_vzkUD6PPBViKmH2sDb_3mJUK/view?usp=drive_link' />
					</p>
				</div>
				<ConfirmButton day='day3' />
			</div>
		</div>
	)
}

export default daythree