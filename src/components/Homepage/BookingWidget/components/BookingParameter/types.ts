import { DropDownOption } from '@/components/UI/DropDown/types';

interface BookingsParameterWithDropDownProps {
	type: 'dropdown';
	icon: React.ReactNode;
	label: string;
	onSelect: (selectedValue: DropDownOption) => void;
	value: DropDownOption;
	options: Array<DropDownOption>;
}

interface DateBookingsParameterWithDateProps {
	type: 'date';
	icon: React.ReactNode;
	label: string;
	onDateChange: (selectedValue: Date | null) => void;
	date: Date;
}

export type BookingParameterProps =
	| BookingsParameterWithDropDownProps
	| DateBookingsParameterWithDateProps;
