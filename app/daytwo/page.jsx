import ConfirmButton from "@/components/ConfirmButton/ConfirmButton"
import Navbar from "@/components/Navbar/Navbar"

function daytwo() {
	return (
		<div className='page'>
			<Navbar />
			<div className="content-wrapper">
				<h1 className='content-title'>Պրակտիկա 2:<span> Պրոդուկտներրի ներկայացում</span></h1>
				<div className='text-container'>
					<h2 className='content-subtitle'>Առաջադրանք՝</h2>
					<p className='text'>1․ Ուսումնասիրել ցանցային կայքերը, կայքերում ակտիվ տեղադրման տեսակները, վիզուալները։</p>
					<p className='text'>2․Ներկայացնել փորքիկ վերլուծություն կատարված ուսումնասիրության մասին։</p>
					<p className='text'>3․Ներկայացնել ուսումնասիրության ընթացքում առաջացած հարցերը։</p>
				</div>
				<ConfirmButton day='day2'/>
			</div>
		</div>
	)
}

export default daytwo