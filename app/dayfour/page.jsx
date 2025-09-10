import ConfirmButton from "@/components/ConfirmButton/ConfirmButton"
import Navbar from "@/components/Navbar/Navbar"

function dayfour() {
	return (
		<div className='page'>
			<Navbar />
			<div className="content-wrapper">
				<h1 className='content-title'>Պրակտիկա 4:<span> Համակարգից հաշվետվությունների արտահանում
					Հաշվետվությունների տեսակների ներկայացում, կազմում</span></h1>
				<div className='text-container'>
					<h2 className='content-subtitle'>Առաջադրանք՝</h2>
					<p className='text'>1․ Անհրաժեշտ է համակարգից արտահանել հաշվետվություն երկու ընկերությունների՝ Media Systems համար։
						Հաշվետվությունները պետք է լինեն՝ ըստ օրերի, սարքավորումների, շաբաթվա օրերի, կայքերի։
						Հաշվետու ժամնակահատվածը՝ 01․02-09․02։</p>
					<p className='text'>2․Ուսումնասիրել հաշվետվության արդյունքները, վերլուծել, դուրս բերել հարցեր։</p>
					<p className='text'>3․Ստեղծել ուղեկցող նամակ հաշվետվությունը պատվիրատուին ուղարկելու համար։</p>
				</div>
				<ConfirmButton day='day4' />
			</div>
		</div>
	)
}

export default dayfour