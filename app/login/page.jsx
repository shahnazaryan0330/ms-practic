import LoginForm from '@/components/LoginForm/LoginForm'
import s from './login.module.css'

function page() {
	return (
		<div className={s.page}>
			<LoginForm/>
		</div>
	)
}

export default page