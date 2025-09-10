import ConfirmButton from "@/components/ConfirmButton/ConfirmButton"
import Navbar from "@/components/Navbar/Navbar"

function dayseven() {
	return (
		<div className='page'>
			<Navbar />
			<div className="content-wrapper">
				<h1 className='content-title'>Պրակտիկա 7: <span>Ստրատեգիական Պլանի Կամում</span></h1>
				<div className='text-container'>
					<h2 className="content-subtitle">Առաջադրանք՝</h2>
					<p className='text'>1․Կազմել ստրատեգիական պլան __________ ընկերության համար։</p>
				</div>
				<ConfirmButton day='day7'/>
			</div>
		</div>
	)
}

export default dayseven