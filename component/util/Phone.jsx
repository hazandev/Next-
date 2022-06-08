import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { company } from '../../data';
const Phone = () => {
	return (
		<div className="phone_number">
			<LocalPhoneIcon />
			<a href={`tel:${company.phone}`} >{company.phone}</a>
		</div>
	);
};

export default Phone;
