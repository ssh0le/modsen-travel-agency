export interface DropDownProps<T> {
	options: T[];
	onSelect: (selectedOption: T) => void;
	placeholder?: string;
	selectedOption: T;
}

export interface DropDownOption {
	value: string | number;
	label: string;
}
