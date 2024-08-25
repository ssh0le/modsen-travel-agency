export interface DatePickerProps {
    date: Date;
    onDateChange: (date: Date | null) => void;
}