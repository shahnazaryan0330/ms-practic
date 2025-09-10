import ConfirmButton from "@/components/ConfirmButton/ConfirmButton"
import Navbar from "@/components/Navbar/Navbar"

function dayfive() {
	return (
		<div className='page'>
			<Navbar />
			<div className="content-wrapper">
				<h1 className='content-title'>Պրակտիկա 5:<span> Մեդիապլանի կազմում</span></h1>
				<div className='text-container'>
					<h2 className='content-subtitle'>Առաջադրանք՝</h2>
					<p className='text'>1․մեդիա պլան Scavolini-ի համար, 2 ձևով ցածր ակտիվություն և միջին ակտիվություն:։ Մեդիապլանի նկարագրությունը ստորև`</p>
					<p className="text">Ցածր ակտիվություն</p>
					<p className="text">ժամանակահատված՝ 1 ամիս</p>
					<p className='text'>Բյուջե` 1 000 000 (առանց հարկերի)</p>
					<p className='text'>Ցուցադրման տեսակներ` Catfish, Incontent</p>
					<p className="text">Կայքերի ցանկ - ֆիլտրել, թողնել լավագույն կայքերը</p>
					<p className="text">Բանների պատրաստումը ներառել նշված բյուջեում</p>
				</div>
				<ConfirmButton day='day5' />
			</div>
		</div>
	)
}

export default dayfive