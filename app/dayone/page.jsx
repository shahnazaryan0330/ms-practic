import ConfirmButton from "@/components/ConfirmButton/ConfirmButton"
import Navbar from "@/components/Navbar/Navbar"

function dayone() {
	return (
		<div className='page'>
			<Navbar />
			<div className="content-wrapper">
				<h1 className='content-title'>Պրակտիկա 1</h1>
				<div className='text-container'>
					<p className='text'>MS Presentation -ի ներկայացում</p>
				</div>
				<ConfirmButton day='day1'/>
			</div>
		</div>
	)
}

export default dayone