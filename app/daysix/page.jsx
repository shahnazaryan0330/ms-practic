import ConfirmButton from "@/components/ConfirmButton/ConfirmButton"
import HelpButton from "@/components/CopyButton/CopyButton"
import ExternalLink from "@/components/ExternalLink/ExternalLink"
import Navbar from "@/components/Navbar/Navbar"

function daysix() {
	return (
		<div className='page'>
			<Navbar />
			<div className="content-wrapper">
				<h1 className='content-title'>Պրակտիկա 6:<span> Մեդիապլանի կազմում</span></h1>
				<div className='text-container'>
					<h2 className='content-subtitle'>Առաջադրանք՝</h2>
					<p className='text'>1․Կամզել մեդիապլան։ Մեդիապլանի նկարագրությունը ստորև`</p>
					<p className='text'>Ընկերության անուն՝ <HelpButton label='Ameria Bank' /></p>
					<p className='text'>Ցուցադրության տեսակ՝ վիդեո և բաններային ֆորմատ:</p>
					<p className="text">ժամանակահատված՝ 1 ամիս</p>
					<p className="text">Բյուջեն 3.000.000 առանց հարկ</p>
					<p className="text italic">*Բանների պատրաստումը ներառել նշված բյուջեում</p>
					<p className="text">Ցուցադրության տեսակն ընտրել՝ ուսումնասիրելով մրցակից ընկերության առկա արշավներն ու ընկերության նախորդ արշավները:</p>
				</div>
				<ConfirmButton day='day6' />
			</div>
		</div>
	)
}

export default daysix